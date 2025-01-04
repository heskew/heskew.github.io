// eleventy.config.js
import { marked } from 'marked';
import { readFileSync } from 'node:fs';

export default function(eleventyConfig) {
  // Add markdown content as a global data object
  eleventyConfig.addGlobalData("resume", () => {
    const markdown = readFileSync('src/resume.md', 'utf8');
    // SVG icons
    const icons = {
      location: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
      linkedin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
      github: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
      download: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
      email: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>'
    };
    // Custom renderer
    const renderer = new marked.Renderer();
    // Customize link rendering
    renderer.link = function({ href, tokens }) {
      // Get the actual text content from tokens
      const text = tokens.filter(t => t.type === 'text').map(t => t.text).join('');
      
      let icon = '';
      if (text.includes('Greater Seattle Area')) {
        icon = icons.location;
      } else if (text.includes('linkedin.com')) {
        icon = icons.linkedin;
      } else if (text.includes('github.com')) {
        icon = icons.github;
      } else if (href.startsWith('mailto:')) {
        icon = icons.email;
      }
      
      if (icon) {
        return `<a href="${href}" class="icon-link">${icon}${text}</a>`;
      }
      return `<a href="${href}">${text}</a>`;
    };
    // Configure marked options
    marked.setOptions({
      headerIds: false,
      mangle: false,
      breaks: true,
      renderer: renderer
    });
    return marked.parse(markdown);
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/icons");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/resume.md");
  
  // Watch for changes
  eleventyConfig.addWatchTarget("src/icons/");
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addWatchTarget("src/resume.md");
  
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    }
  };
};