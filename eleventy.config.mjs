// eleventy.config.js
import { marked } from 'marked';
import { readFileSync } from 'node:fs';

export default function(eleventyConfig) {
  // Add markdown content as a global data object
  eleventyConfig.addGlobalData("resume", () => {
    const markdown = readFileSync('src/resume.md', 'utf8');
    return marked.parse(markdown);
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/icons");
  eleventyConfig.addPassthroughCopy("src/styles");
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