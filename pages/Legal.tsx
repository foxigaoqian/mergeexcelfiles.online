
import React from 'react';

interface LegalProps {
  type: 'privacy' | 'terms' | 'contact';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const content = {
    privacy: {
      title: 'Privacy & Security Policy',
      body: `
        <p class="text-lg mb-6">Your data privacy is our absolute priority. At <strong>MergeExcelFiles.Online</strong>, we operate on a "Local-First" philosophy.</p>
        
        <h3 class="text-xl font-bold text-slate-900 mt-10 mb-4">1. Local Processing</h3>
        <p>All file manipulation, merging, and conversion tasks are performed directly within your web browser using JavaScript. No document, spreadsheet, or CSV data is transmitted to our servers at any time.</p>
        
        <h3 class="text-xl font-bold text-slate-900 mt-10 mb-4">2. Zero Data Retention</h3>
        <p>Because we do not upload your files, we have no capability to store, view, or sell your data. Your sensitive business records remain under your control throughout the entire process.</p>
        
        <h3 class="text-xl font-bold text-slate-900 mt-10 mb-4">3. Analytics</h3>
        <p>We use basic, anonymized web analytics to understand how many people visit our site and which features are most popular. This does not involve tracking individual users or accessing file content.</p>
      `
    },
    terms: {
      title: 'Terms of Service',
      body: `
        <p class="mb-6">By accessing MergeExcelFiles.Online, you agree to these terms of use. Please read them carefully.</p>
        
        <h3 class="text-xl font-bold text-slate-900 mt-10 mb-4">1. License for Use</h3>
        <p>We grant you a free, non-exclusive license to use our tools for personal or commercial purposes. You are solely responsible for the content of the files you merge.</p>
        
        <h3 class="text-xl font-bold text-slate-900 mt-10 mb-4">2. No Warranties</h3>
        <p>While we strive for 100% accuracy, this tool is provided "as is." We are not liable for any data loss, formatting errors, or financial damages resulting from the use of our merging services.</p>
        
        <h3 class="text-xl font-bold text-slate-900 mt-10 mb-4">3. Limitation of Liability</h3>
        <p>In no event shall MergeExcelFiles.Online or its developers be held liable for any damages arising out of the use or inability to use the tools on this website.</p>
      `
    },
    contact: {
      title: 'Contact Our Team',
      body: `
        <p class="mb-8">Have a feature request or found a bug? We're here to help you work faster with your spreadsheets.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div class="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
            <div class="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 class="font-bold text-lg mb-2">Technical Support</h4>
            <p class="text-slate-500 mb-4">For help with file errors or tool issues.</p>
            <a href="mailto:support@mergeexcelfiles.online" class="text-indigo-600 font-bold hover:underline">support@mergeexcelfiles.online</a>
          </div>
          
          <div class="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
            <div class="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 class="font-bold text-lg mb-2">General Inquiries</h4>
            <p class="text-slate-500 mb-4">Partnerships, feedback, or just to say hi.</p>
            <a href="mailto:hello@mergeexcelfiles.online" class="text-indigo-600 font-bold hover:underline">hello@mergeexcelfiles.online</a>
          </div>
        </div>
      `
    }
  }[type];

  return (
    <div className="py-20 px-6 animate-in fade-in duration-700">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tight">{content.title}</h1>
        <div 
          className="prose prose-xl prose-indigo max-w-none text-slate-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content.body }}
        />
      </div>
    </div>
  );
};

export default Legal;
