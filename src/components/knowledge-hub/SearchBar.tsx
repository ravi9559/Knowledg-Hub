
'use client';

import { useState, useEffect, useTransition, useMemo } from 'react';
import { Search, X, Loader2, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  suggestContent,
  SuggestContentOutput,
} from '@/ai/flows/intelligent-content-suggestions';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { knowledgeHubData } from '@/data/knowledge-hub-data';

interface SearchBarProps {
  onSearchChange: (term: string) => void;
  resultCount: number;
  hasSearchTerm: boolean;
}

export function SearchBar({ onSearchChange, resultCount, hasSearchTerm }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestContentOutput | null>(null);
  const [isPending, startTransition] = useTransition();
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const { toast } = useToast();

  const autocompleteSuggestions = useMemo(() => {
    if (!query || query.length < 2) {
      return [];
    }
    const lowercasedQuery = query.toLowerCase();
    const allTitles = knowledgeHubData.flatMap(section => [
      section.title,
      ...section.resources.map(r => r.title)
    ]);
    const uniqueTitles = [...new Set(allTitles)];
    
    return uniqueTitles
      .filter(title => title.toLowerCase().includes(lowercasedQuery))
      .slice(0, 5); // Limit to 5 suggestions
  }, [query]);

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
            const errorMessage = (err.message || 'An unknown error occurred').toLowerCase();
            if (errorMessage.includes('503') || errorMessage.includes('overloaded')) {
               toast({
                variant: 'destructive',
                title: 'AI Service Unavailable',
                description: 'The AI suggestion service is currently overloaded. Please try again in a moment.',
              });
            } else {
              toast({
                variant: 'destructive',
                title: 'AI Suggestion Error',
                description: 'Could not fetch intelligent suggestions.',
              });
            }
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
    setShowAutocomplete(false);
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onSearchChange(suggestion);
    setShowAutocomplete(false);
  };

  const allSuggestions = [
    ...(suggestions?.keywords || []),
    ...(suggestions?.entities || []),
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for articles, policies, maps, and more..."
          className="w-full pl-12 pr-12 py-7 text-base rounded-full shadow-lg focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setShowAutocomplete(true)}
          onBlur={() => setTimeout(() => setShowAutocomplete(false), 150)}
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full"
            onClick={clearSearch}
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </Button>
        )}
        {showAutocomplete && autocompleteSuggestions.length > 0 && (
          <Card className="absolute top-full mt-2 w-full z-10 shadow-lg">
            <CardContent className="p-2">
              <ul>
                {autocompleteSuggestions.map((suggestion, index) => (
                  <li key={index}>
                    <button
                      className="w-full text-left p-2 rounded-md hover:bg-accent text-sm"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
      <div className="h-10 mt-3 px-4 flex items-center justify-center text-sm min-h-[2.5rem]">
        {isPending && <Loader2 className="h-4 w-4 animate-spin mr-2 text-muted-foreground" />}
        {hasSearchTerm && !isPending && (
          <div className="text-muted-foreground">
            Found {resultCount} item(s).
          </div>
        )}
        {allSuggestions.length > 0 && !autocompleteSuggestions.length && (
          <div className="ml-4 flex items-center gap-2 overflow-x-auto">
             <Sparkles className="h-5 w-5 text-amber-500 shrink-0" />
             <span className="text-muted-foreground font-medium shrink-0">Try:</span>
            {allSuggestions.map((s, i) => (
              <Badge key={i} variant="outline" className="cursor-pointer font-normal border-primary/50 text-primary hover:bg-primary/10" onClick={() => handleSuggestionClick(s)}>
                {s}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
