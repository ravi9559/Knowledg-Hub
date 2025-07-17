
'use client';

import { useState, useEffect, useMemo } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/knowledge-hub/SidebarNav';
import { KnowledgeHubHeader } from '@/components/knowledge-hub/Header';
import { SearchBar } from '@/components/knowledge-hub/SearchBar';
import { ResourceCard } from '@/components/knowledge-hub/ResourceCard';
import { knowledgeHubData } from '@/data/knowledge-hub-data';
import { BackToTop } from '@/components/BackToTop';
import { Skeleton } from '@/components/ui/skeleton';

function PageContent() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return knowledgeHubData;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return knowledgeHubData.map(section => ({
      ...section,
      resources: section.resources.filter(
        resource =>
          resource.title.toLowerCase().includes(lowercasedFilter) ||
          resource.description.toLowerCase().includes(lowercasedFilter)
      ),
    })).filter(section => section.resources.length > 0);
  }, [searchTerm]);
  
  const totalResults = useMemo(() => {
    return filteredData.reduce((acc, section) => acc + section.resources.length, 0);
  }, [filteredData]);

  return (
    <>
      <KnowledgeHubHeader />
      <main className="p-4 sm:p-6 lg:p-8">
        <SearchBar onSearchChange={setSearchTerm} resultCount={totalResults} hasSearchTerm={!!searchTerm} />
        <div className="mt-12 space-y-12">
          {filteredData.length > 0 ? (
            filteredData.map(section => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {section.resources.map((resource, index) => (
                    <ResourceCard key={index} resource={resource} />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No results found for "{searchTerm}".</p>
              <p className="text-sm text-muted-foreground mt-2">Try a different search term.</p>
            </div>
          )}
        </div>
      </main>
      <footer className="text-center p-6 mt-12 text-muted-foreground text-sm">
          Powered by O2O | Simplifying Real Estate Transactions
      </footer>
    </>
  )
}

function PageSkeleton() {
  return (
      <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8 h-16">
        <Skeleton className="h-9 w-9 md:hidden" />
        <div className="flex-grow" />
        <Skeleton className="h-9 w-9" />
      </div>
      <Skeleton className="h-24 w-1/2 mx-auto mb-8" />
      <Skeleton className="h-12 w-full max-w-2xl mx-auto mb-4" />
      <Skeleton className="h-8 w-1/4 mx-auto mb-12" />
      <div className="space-y-12">
        {[1,2].map(i => (
          <div key={i}>
            <Skeleton className="h-10 w-1/3 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <Skeleton className="h-52 w-full rounded-lg" />
              <Skeleton className="h-52 w-full rounded-lg" />
              <Skeleton className="h-52 w-full rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function KnowledgeHubPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <SidebarProvider>
      <div className="relative min-h-screen bg-background font-body">
        <Sidebar>
          <SidebarNav sections={knowledgeHubData} />
        </Sidebar>
        <SidebarInset>
          {!isMounted ? <PageSkeleton /> : <PageContent />}
        </SidebarInset>
        <BackToTop />
      </div>
    </SidebarProvider>
  );
}
