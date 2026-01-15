
import React from 'react';
import ExcelMerger from '../components/ExcelMerger';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-12 px-6">
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-2xl mb-10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-indigo-700 text-xs font-bold uppercase tracking-widest">
              #1 Private Tool to Merge Excel Files
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Merge Excel Files <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 animate-gradient-x">
              Quickly & Securely
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 mb-14 leading-relaxed max-w-3xl mx-auto font-medium">
            The easiest online solution to <strong>merge Excel files</strong> and CSV spreadsheets. No software installation, no data uploads—just pure privacy.
          </p>
          
          {/* Main Tool Component */}
          <div className="relative mb-20">
            <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            <ExcelMerger />
          </div>
        </div>
      </section>

      {/* Introduction Section - High Keyword Value */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 underline decoration-indigo-200 decoration-8 underline-offset-8">The Best Way to Merge Excel Files Online</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Need to <strong>combine multiple Excel files into one</strong>? Many online tools require you to upload your sensitive spreadsheets to their servers, creating a security risk. <strong>MergeExcelFiles.Online</strong> changes that. Our tool uses cutting-edge browser technology to process your data locally.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you need to merge XLSX, XLS, or CSV formats, our platform ensures high-speed processing without compromising your privacy. Join thousands of users who <strong>merge spreadsheets</strong> the smart way every day.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Section - Semantic Instructions */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 text-center mb-16">How to Merge Excel Files in 4 Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Add Your Files", desc: "Select or drag the XLSX/CSV files you want to combine into the box." },
              { step: "02", title: "Arrange Order", desc: "Drag files to reorder them if you need a specific sequence for your data." },
              { step: "03", title: "Combine Sheets", desc: "Click the merge button. Our engine reads and aligns your headers automatically." },
              { step: "04", title: "Save Results", desc: "Download your new master Excel file immediately. It’s that simple!" }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-6xl font-black text-slate-100 absolute top-4 right-6 leading-none select-none">{item.step}</span>
                <h3 className="text-xl font-bold text-indigo-600 mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section - Competitive SEO */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 text-center mb-16">Compare Excel Merging Solutions</h2>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl">
            <table className="w-full text-left bg-white border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 font-bold">Feature</th>
                  <th className="p-6 font-bold">Cloud-Based Tools</th>
                  <th className="p-6 font-bold text-indigo-400">MergeExcelFiles.Online</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { f: "Merge Excel Privacy", o: "Files uploaded to cloud", u: "Local (Files stay on PC)" },
                  { f: "Combine CSV Support", o: "Varies", u: "Full Support" },
                  { f: "Data Limit", o: "Strict 10MB-50MB limits", u: "Unlimited (RAM based)" },
                  { f: "Ease of Use", o: "Account often required", u: "Instant (No Login)" },
                  { f: "Result Accuracy", o: "Can lose data formatting", u: "High Fidelity Merging" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 text-slate-900 font-bold">{row.f}</td>
                    <td className="p-6 text-slate-500">{row.o}</td>
                    <td className="p-6 text-indigo-600 font-bold">{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section - Rich Snippets Opportunity */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 text-center mb-16 underline decoration-violet-200 underline-offset-8">Excel File Merging FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "How can I merge excel files without software?", a: "You can use MergeExcelFiles.Online directly in your web browser. It uses JavaScript to process your files locally, so you don't need to install Excel or any third-party software." },
              { q: "Is there a limit to how many XLSX files I can combine?", a: "No. Unlike other online services that cap your usage, we allow you to merge as many files as your computer's memory can handle." },
              { q: "Can I combine CSV files into an Excel workbook?", a: "Yes, our engine automatically detects CSV formatting and seamlessly integrates it into the resulting .xlsx file." },
              { q: "Will merging files keep my column headers?", a: "Yes, our smart algorithm identifies matching header names and stacks your data correctly to maintain data integrity." },
              { q: "Is this tool safe for company data?", a: "Absolutely. Because the merging happens in your browser, no data ever reaches our server. This makes it ideal for combining confidential financial or HR spreadsheets." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                <summary className="list-none p-6 font-bold text-slate-900 cursor-pointer flex justify-between items-center hover:bg-slate-100 transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-indigo-600 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200 bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Long-tail Keywords */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to Combine Your Excel Files?</h2>
          <p className="text-indigo-100 mb-12 max-w-2xl mx-auto text-lg">Use the world's most secure <strong>online Excel merger</strong> today. No sign-up, no cost, 100% private.</p>
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-900/20 hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
          >
            Start Merging Files Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
