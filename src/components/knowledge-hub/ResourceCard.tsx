import type { Resource } from '@/data/knowledge-hub-data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, FileText } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <Card className="flex flex-col h-full transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1 border-l-4 border-transparent group-hover:border-primary">
        <CardHeader>
          <CardTitle className="flex items-start gap-4 text-lg font-headline">
            <div className="bg-accent text-accent-foreground p-3 rounded-lg mt-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
               <resource.icon className="w-5 h-5" />
            </div>
            <span className="flex-1">{resource.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
          <div className="flex items-center text-xs text-muted-foreground">
             <FileText className="w-3.5 h-3.5 mr-2" />
             <span>{resource.type}</span>
             <span className="mx-2">•</span>
             <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
             <span>External Link</span>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
