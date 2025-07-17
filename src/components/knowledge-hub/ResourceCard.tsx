import type { Resource } from '@/data/knowledge-hub-data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="flex flex-col h-full transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl border-l-4 border-l-accent">
      <CardHeader>
        <CardTitle className="flex items-start gap-3 text-lg font-headline">
          <div className="bg-accent/10 p-2 rounded-md mt-1">
             <resource.icon className="w-5 h-5 text-accent" />
          </div>
          <span className="flex-1">{resource.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{resource.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="default" className="w-full">
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            Read More <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
