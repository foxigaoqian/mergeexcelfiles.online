
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page, params?: any) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => onNavigate(Page.Home)}
            className="flex items-center space-x-2.5 group"
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-indigo-100 group-hover:rotate-6 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              MergeExcelFiles<span className="text-indigo-600">.Online</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id as Page)}
                className={`text-sm font-bold transition-all hover:text-indigo-600 ${
                  currentPage === link.id ? 'text-indigo-600' : 'text-slate-500'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => onNavigate(Page.Home)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-indigo-100 hover:shadow-indigo-200 active:scale-95"
            >
              Merge Now
            </button>
          </nav>

          <button className="lg:hidden text-slate-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 md:pt-32">
        {children}
      </main>

      {/* Redesigned SEO-Optimized Footer */}
      <footer className="bg-indigo-950 text-indigo-200/80 py-16 px-6 border-t border-indigo-900/50">
        <div className="container mx-auto max-w-6xl text-center space-y-10">
          
          {/* Section 1: Copyright & Slogan */}
          <div className="text-sm md:text-base font-medium text-white/90">
            © 2024 Merge Excel Files Online. The world's most secure and private excel file joiner for professional data management.
          </div>

          {/* Section 2: SEO Keyword Links (Pipe Separated) */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-indigo-300">
            <button onClick={() => onNavigate(Page.Home)} className="hover:text-white transition-colors">Merge Excel Files</button>
            <span className="text-indigo-800">|</span>
            <button onClick={() => onNavigate(Page.Home)} className="hover:text-white transition-colors">Combine XLSX Online</button>
            <span className="text-indigo-800">|</span>
            <button onClick={() => onNavigate(Page.Home)} className="hover:text-white transition-colors">Join CSV Sheets</button>
            <span className="text-indigo-800">|</span>
            <button onClick={() => onNavigate(Page.Home)} className="hover:text-white transition-colors">Multi-Workbook Merger</button>
            <span className="text-indigo-800">|</span>
            <button onClick={() => onNavigate(Page.Home)} className="hover:text-white transition-colors">Secure Spreadsheet Combiner</button>
          </div>

          {/* Section 3: Legal & Utility Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-white">
            <button onClick={() => onNavigate(Page.Privacy)} className="hover:underline decoration-2 underline-offset-4">Privacy Policy</button>
            <span className="text-indigo-800">|</span>
            <button onClick={() => onNavigate(Page.Terms)} className="hover:underline decoration-2 underline-offset-4">Terms of Service</button>
            <span className="text-indigo-800">|</span>
            <button onClick={() => onNavigate(Page.Contact)} className="hover:underline decoration-2 underline-offset-4">Contact Us</button>
          </div>

          {/* Section 4: SEO Descriptive Paragraph */}
          <div className="max-w-4xl mx-auto text-xs md:text-sm leading-relaxed text-indigo-200/60 font-medium">
            MergeExcelFiles.Online is your free online excel file joiner. Our secure spreadsheet combiner 
            allows you to merge multiple datasets without ever uploading files to a remote server. 
            Built for high-performance browser-based processing, we support XLSX, XLS, and CSV formats 
            instantly. Try our professional excel merger and multi-sheet joiner to automate your 
            workflow while keeping your sensitive business data 100% private and protected.
          </div>

          {/* Compliance Badge */}
          <div className="pt-6 flex justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
             <div className="flex items-center space-x-2 border border-indigo-500/30 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">
               <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
               Security Certified
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
