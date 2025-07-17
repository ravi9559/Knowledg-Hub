'use client';

import { useState, useEffect } from 'react';
import type { Section } from '@/data/knowledge-hub-data';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { BookOpen } from 'lucide-react';
import { useSidebar } from '../ui/sidebar';

interface SidebarNavProps {
  sections: Section[];
}

export function SidebarNav({ sections }: SidebarNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const { setOpenMobile } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    
    sections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);
  
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    // Close mobile sidebar on navigation
    setTimeout(() => {
      setOpenMobile(false);
    }, 200)
  };


  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <span className="font-headline text-lg font-semibold">O2O Knowledge Nav</span>
        </div>
      </SidebarHeader>
      <SidebarMenu className="p-2">
        {sections.map(section => (
          <SidebarMenuItem key={section.id}>
            <SidebarMenuButton
              onClick={() => handleNavClick(section.id)}
              isActive={activeSection === section.id}
              className="justify-start"
            >
              <section.icon className="h-4 w-4" />
              <span>{section.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
