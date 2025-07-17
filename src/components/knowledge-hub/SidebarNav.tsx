'use client';

import { useState, useEffect } from 'react';
import type { Section } from '@/data/knowledge-hub-data';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  useSidebar,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { LibraryBig, PanelLeft } from 'lucide-react';

interface SidebarNavProps {
  sections: Section[];
}

export function SidebarNav({ sections }: SidebarNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const { setOpenMobile, state: sidebarState, toggleSidebar } = useSidebar();

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
      <SidebarHeader className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <LibraryBig className="w-6 h-6" />
            </div>
            <span className="font-headline text-lg font-semibold group-data-[collapsible=icon]:hidden">O2O Navigator</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="p-2">
          {sections.map(section => (
            <SidebarMenuItem key={section.id}>
              <SidebarMenuButton
                onClick={() => handleNavClick(section.id)}
                isActive={activeSection === section.id}
                className="justify-start"
                tooltip={sidebarState === 'collapsed' ? section.title : undefined}
              >
                <section.icon className="h-4 w-4" />
                <span>{section.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className='mt-auto p-2 border-t'>
          <SidebarMenu>
            <SidebarMenuButton onClick={toggleSidebar} className="hidden md:flex">
                <PanelLeft />
                <span>Collapse</span>
            </SidebarMenuButton>
          </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
