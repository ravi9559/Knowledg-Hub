'use client';

import { useState, useEffect, useTransition } from 'react';
import { Search, X, Loader2, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  suggestContent,
  SuggestContentOutput,
} from '@/ai/flows/intelligent-content-suggestions';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

interface SearchBarProps {
  onSearchChange: (term: string) => void;
  resultCount: number;
  hasSearchTerm: boolean;
}

export function SearchBar({ onSearchChange, resultCount, hasSearchTerm }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestContentOutput | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  useEffect(() => {
    const handler = setTimeout(() => {
      startTransition(() => {
        onSearchChange(query);
      });
      if (query.trim().length > 2) {
        suggestContent({ query })
          .then(setSuggestions)
          .catch(err => {
            console.error('AI suggestion error:', err);
            toast({
              variant: 'destructive',
              title: 'AI Suggestion Error',
              description: 'Could not fetch intelligent suggestions.',
            });
          });
      } else {
        setSuggestions(null);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query, onSearchChange, toast]);

  const clearSearch = () => {
    setQuery('');
    onSearchChange('');
    setSuggestions(null);
  };

  const allSuggestions = [
    ...(suggestions?.keywords || []),
    ...(suggestions?.entities || []),
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search knowledge hub..."
          className="w-full pl-10 pr-10 py-6 text-base rounded-full shadow-sm"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
            onClick={clearSearch}
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </Button>
        )}
      </div>
      <div className="h-10 mt-2 px-4 flex items-center justify-center text-sm">
        {isPending && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
        {hasSearchTerm && !isPending && (
          <div className="text-muted-foreground">
            Found {resultCount} item(s).
          </div>
        )}
        {allSuggestions.length > 0 && (
          <div className="ml-4 flex items-center gap-2 overflow-x-auto">
             <Sparkles className="h-4 w-4 text-amber-500 shrink-0" />
             <span className="text-muted-foreground font-medium shrink-0">Suggestions:</span>
            {allSuggestions.map((s, i) => (
              <Badge key={i} variant="secondary" className="cursor-pointer" onClick={() => setQuery(s)}>
                {s}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
