import { LibraryBig } from 'lucide-react';

export function KnowledgeHubHeader() {
  return (
    <div className="text-center py-8 sm:py-12">
      <div className="inline-flex items-center justify-center bg-primary/10 text-primary p-4 rounded-full mb-6 shadow-sm">
        <LibraryBig className="w-10 h-10" />
      </div>
      <h1 className="font-headline text-4xl sm:text-5xl font-bold text-foreground tracking-tighter">
        O2O Knowledge Navigator
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Your one-stop hub for regional real estate insights and expert articles.
      </p>
    </div>
  );
}
