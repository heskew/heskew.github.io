# Personal Website & Resume

> Note: This README was generated through a conversation with [Claude](https://www.anthropic.com/claude) (Anthropic's AI assistant) while discussing ways to document the technical implementation of my resume site.

This repository contains my professional website and resume, implemented as a modern static site using 11ty (Eleventy) with automated PDF generation. It demonstrates modern static site generation practices with a focus on simplicity and performance.

## Architecture Overview

The site consists of three main components:
1. An 11ty-based static site with custom markdown rendering
1. A GitHub Actions workflow for PDF generation
1. Content managed in Markdown as the single source of truth

### Static Site Generation

The site uses 11ty with several custom enhancements:
- Custom markdown rendering with marked.js
- Automatic icon injection for contact links
- Dark mode support
- Responsive design with print optimization

Key components include:

#### Eleventy Configuration
```javascript
// eleventy.config.mjs
export default function(eleventyConfig) {
  // Custom markdown renderer with icon support
  const renderer = new marked.Renderer();
  renderer.link = function({ href, tokens }) {
    const text = tokens.filter(t => t.type === 'text')
                      .map(t => t.text).join('');
    
    // Inject appropriate icons based on link content
    let icon = '';
    if (text.includes('Greater Seattle Area')) {
      icon = icons.location;
    } else if (text.includes('linkedin.com')) {
      icon = icons.linkedin;
    }
    // ... other icon mappings
    
    return icon ? 
      `<a href="${href}" class="icon-link">${icon}${text}</a>` : 
      `<a href="${href}">${text}</a>`;
  };
}
```

#### Base Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title | default("Nathan Heskew - Builder of Internet Things") }}</title>
    <meta name="description" content="{{ description | default("Technical leader specializing in secure, high-performance software") }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css">
    <link rel="stylesheet" href="styles/default.css">
</head>
<body class="markdown-body">
    <div class="container">
        {{ content | safe }}
    </div>
</body>
</html>
```

### PDF Generation Pipeline

The PDF generation uses GitHub Actions with Pandoc and LaTeX for professional output:

```yaml
jobs:
  generate-pdf:
    runs-on: ubuntu-latest
    container:
      image: pandoc/ubuntu-latex:latest
    steps:
      - name: Install fonts
        run: |
          apt-get update
          apt-get install -y fonts-dejavu-core fonts-noto

      - name: Generate PDF
        run: |
          pandoc \
            --pdf-engine=xelatex \
            --variable=geometry:margin=1in \
            --variable=mainfont="Noto Sans" \
            --variable=fontsize=10pt \
            --from=markdown+raw_tex \
            --output=dist/resume.pdf \
            src/resume.md
```

### Styling

The site implements a sophisticated CSS system with:
- Dark mode support using CSS custom properties
- Responsive design for various screen sizes
- Print optimization
- Icon link styling

```css
:root {
    --bg: #ffffff;
    --text: #2d3748;
    --text-muted: #64748b;
    --accent: #3b82f6;
    --accent-hover: #2563eb;
    --border: #e2e8f0;
}

@media (prefers-color-scheme: dark) {
    :root {
        --bg: #0f172a;
        --text: #e2e8f0;
        --text-muted: #94a3b8;
        --accent: #60a5fa;
        --accent-hover: #3b82f6;
        --border: #1e293b;
    }
}
```

## Design Decisions

### Why 11ty?
- Zero client-side JavaScript
- Flexible templating
- Fast builds
- Great developer experience
- Simple to extend

### Why Custom Icon Integration?
- Reduces external dependencies
- Ensures consistent styling
- Improves load performance
- Enables dark mode compatibility

### Why Pandoc for PDFs?
- Professional typesetting
- Consistent output
- Markdown compatibility
- Extensive customization options

## Local Development

To run the site locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Clean build directory
npm run clean
```

## Project Structure
```
.
├── src/
│   ├── _includes/      # Templates
│   ├── styles/         # CSS
│   ├── icons/          # SVG icons
│   └── resume.md       # Content
├── .github/
│   └── workflows/      # GitHub Actions
├── eleventy.config.mjs # 11ty config
└── package.json
```

## Future Improvements

Planned enhancements include:
- Structured data (schema.org)
- Additional export formats
- Automated link validation
- Enhanced print stylesheet
- Performance optimizations

## Contributing

While this is a personal project, I welcome suggestions and improvements through issues and pull requests.

## License

This project is open source and available under the MIT License. Feel free to use it as inspiration for your own personal site!