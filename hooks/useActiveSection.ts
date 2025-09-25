'use client';

import React, { SetStateAction, useEffect } from "react";


export const useActiveSection = (navlinks: PNavLink[], setActiveNavlinkIdx: React.Dispatch<SetStateAction<number>>) => {

   useEffect(() => {
            
      const sections = navlinks
      .map((nl) => document.getElementById(nl.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

      if (sections.length === 0) return;

      let visibleSections: HTMLElement[] = [];

      const observer = new IntersectionObserver(
         (entries) => {
            visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target as HTMLElement);
            

            if (visibleSections.length > 0) {
               visibleSections.sort(
                  (a, b) => 
                     a.getBoundingClientRect().top - b.getBoundingClientRect().top
               )

               const topSection = visibleSections[0];
               const activeIndex = navlinks.findIndex(
                  (nl) => nl.href.slice(1) === topSection.id
               );

               setActiveNavlinkIdx(activeIndex);
            }
         },
         {
            root: null,
            rootMargin: '0px 0px -70% 0px',
            threshold: 0.2,
         }
      )

      sections.forEach((section) => observer.observe(section));
      
      
      return () => {
         sections.forEach((section) => observer.unobserve(section));
      }
   }, [navlinks, setActiveNavlinkIdx])
}