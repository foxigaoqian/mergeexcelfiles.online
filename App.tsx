
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Legal from './pages/Legal';
import { Page, BlogPost } from './types';
import { BLOG_POSTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [routeParams, setRouteParams] = useState<any>({});

  // Simple routing logic
  const navigate = (page: Page, params: any = {}) => {
    setCurrentPage(page);
    setRouteParams(params);
    window.scrollTo(0, 0);
    // Update hash for basic navigation state
    window.location.hash = page;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home />;
      case Page.Blog:
        return <Blog onNavigate={navigate} />;
      case Page.BlogPost:
        const post = BLOG_POSTS.find(p => p.id === routeParams.postId);
        if (!post) return <Home />;
        return (
          <div className="py-16 px-4 max-w-4xl mx-auto animate-in fade-in duration-500">
            <button onClick={() => navigate(Page.Blog)} className="mb-8 text-indigo-600 font-bold flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </button>
            <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-3xl mb-8 shadow-lg" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{post.title}</h1>
            <div className="flex items-center space-x-4 mb-10 text-slate-500 text-sm">
              <span className="bg-slate-100 px-3 py-1 rounded-full font-bold text-slate-700">{post.category}</span>
              <span>•</span>
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div 
              className="prose prose-lg prose-indigo max-w-none text-slate-600 space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        );
      case Page.Privacy:
        return <Legal type="privacy" />;
      case Page.Terms:
        return <Legal type="terms" />;
      case Page.Contact:
        return <Legal type="contact" />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={navigate}>
      {renderPage()}
    </Layout>
  );
};

export default App;
