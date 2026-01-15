
import React from 'react';
import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'how-to-merge-excel-files-online',
    title: 'How to Merge Excel Files Online: A 2024 Secure Guide',
    excerpt: 'Discover how to merge multiple Excel workbooks into one without compromising security. Perfect for business data consolidation.',
    content: `
      <h2>Why Merging Excel Files Locally is the New Standard</h2>
      <p>Data privacy is more critical than ever. When you search for "merge excel files online", most results lead to tools that process data on their servers. This guide explains why local browser merging is the only safe way to handle business XLSX files.</p>
      
      <h2>Step-by-Step Tutorial</h2>
      <p>Using <strong>MergeExcelFiles.Online</strong>, you can follow these simple steps to combine data:</p>
      <ol>
        <li>Select your source spreadsheets.</li>
        <li>Review data headers for consistency.</li>
        <li>Click combine.</li>
        <li>Save your consolidated master sheet.</li>
      </ol>

      <h3>Common Challenges</h3>
      <p>One common issue when you <strong>merge spreadsheets</strong> is mismatched column names. Our tool addresses this by using fuzzy matching for headers, ensuring your data stacks correctly regardless of column order.</p>
    `,
    date: '2024-07-01',
    author: 'SEO Content Team',
    category: 'Expert Guide',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'combine-csv-files-online-fast',
    title: 'The Fastest Way to Combine CSV Files Online for Free',
    excerpt: 'Need to stack thousands of CSV rows? Learn why browser-based tools outperform cloud converters in speed and reliability.',
    content: `
      <h2>Combining CSV Files for Big Data</h2>
      <p>CSV files are the backbone of data exchange. When you need to <strong>combine CSV files</strong> from various exports, you need a tool that won't lag. Since our merger runs on your local machine, it scales with your hardware.</p>
      
      <h3>Browser Merging vs Server Merging</h3>
      <p>Traditional tools have a 50MB limit. Our tool has no limit other than your computer's RAM, making it the best choice for developers and data scientists looking to <strong>merge large datasets</strong>.</p>
    `,
    date: '2024-07-05',
    author: 'Data Analyst',
    category: 'Tech Tip',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
];

export const NAV_LINKS = [
  { label: 'Merge Tool', id: 'home' },
  { label: 'Blog & Guides', id: 'blog' },
  { label: 'Privacy Policy', id: 'privacy' },
  { label: 'Contact', id: 'contact' }
];

export const FOOTER_LINKS = {
  Product: [
    { label: 'Merge Excel Files', id: 'home' },
    { label: 'Combine CSV Online', id: 'home' },
    { label: 'Privacy & Security', id: 'privacy' }
  ],
  Resources: [
    { label: 'XLSX Guide', id: 'blog' },
    { label: 'CSV Tutorials', id: 'blog' },
    { label: 'Terms of Service', id: 'terms' }
  ],
  Company: [
    { label: 'About Us', id: 'contact' },
    { label: 'Support Desk', id: 'contact' }
  ]
};
