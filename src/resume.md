# Nathan Heskew

Building Internet Things

- Email: [nathan@heskew.dev](mailto:nathan@heskew.dev)
- Location: [Greater Seattle Area](https://www.google.com/maps/place/Seattle+Metropolitan+Area,+WA/@47.5061384,-123.1988914,538045m/data=!3m2!1e3!4b1!4m6!3m5!1s0x54907b72dfbd79f3:0x35b57dcd99e57e0e!8m2!3d47.6061031!4d-122.3320534!16zL20vMDN3MHZ5)
- LinkedIn: [linkedin.com/in/heskew](https://linkedin.com/in/heskew)
- GitHub: [github.com/heskew](https://github.com/heskew)

## Professional Summary

Technical leader and distributed systems architect with deep expertise building high-performance platforms and developer tools at scale. Strong focus on Node.js, real-time systems, and developer experience.

Experienced across the full spectrum from 0-to-1 product development at startups to evolving enterprise platforms through multiple growth phases.

## Professional Experience

### Harper

**Node.js Software Engineer** (April 2025 - Present)

Contributing to [Harper](https://harper.fast/)'s open-source Node.js performance platform that unifies database, cache, application, and messaging layers into a single in-memory process.

- Built the [OAuth plugin](https://github.com/HarperFast/oauth) (`@harperfast/oauth`, formerly `@harperdb/oauth`), a complete OAuth 2.0 and OpenID Connect authentication system with multi-provider support (GitHub, Google, Azure AD, Auth0, and any custom OIDC provider), OIDC ID-token verification, automatic token refresh, lifecycle hooks for user provisioning, and CSRF protection
- Extended the plugin into an OAuth 2.1 authorization server for MCP (Model Context Protocol) clients (Claude Desktop, Cursor, mcp-remote), with PKCE, RFC 7591 dynamic client registration, Client ID Metadata Document (CIMD) support, and rotating JWT signing keys (ES256/RS256), so agent tools authenticate against the same upstream providers as human users

- Contributing to [Harper core](https://github.com/HarperFast/harper) development, now open-source-first as of its v5 release (shipped; currently v5.2)

- Led an initial reset of the platform's [documentation infrastructure](https://docs.harperdb.io/docs); a teammate has owned it since

- Created [Harper DX Lab](https://github.com/heskew/harper-dx-lab), automated developer experience testing framework that runs AI coding agents (Claude Code) against Harper's APIs and documentation across 6 tiers of increasing complexity, diagnosing failures and classifying DX gaps with reproducible evidence
- Built [FlowSense](https://github.com/heskew/flowsense-demo), real-time supply chain monitoring demo showcasing Harper's collapsed stack architecture (database + REST + MQTT + background tasks in a single process), with React/Leaflet dashboard, MQTT-over-WebSocket live updates, and a disruption simulation engine

### Microsoft

**Senior Software Engineer** (2022 - 2025)

- Architected and led development of [learn.microsoft.com's](https://learn.microsoft.com/) Node.js-based rendering layer serving 77M monthly active users and 200M pageviews, migrating from static HTML generation to SSR for greater flexibility and tighter feature integration
- Designed distributed build and release pipeline architecture using Azure DevOps, reducing deployment cycle times while improving release reliability across global Azure regions
- Implemented multi-environment deployment strategy on Azure (App Service, CDN, Traffic Manager) supporting development, staging, and production environments with consistent configuration management
- Built internal CLI tools and developer documentation that improved team velocity and reduced new engineer onboarding time
- Led architectural improvements to video processing pipeline, reducing transcoding time while maintaining quality
- Enhanced video delivery system supporting HLS/DASH formats with improved global content delivery performance

**Senior Software Engineering Manager** (2020 - 2022)

- Continued development of rendering layer for Microsoft's developer documentation platform
- Mentored intern who won internal hackathon with server-side rendering proof-of-concept, which later influenced production architecture
- Established technical standards and review processes that improved system reliability
- Guided team's adoption of automated testing and continuous deployment practices

**Senior Software Engineer** (2019 - 2020)

- Initiated and led the development of a new rendering layer for docs.microsoft.com (now learn.microsoft.com)

### SkewTech, LLC

**Founder** (2015 - 2023)

Independent consultancy specializing in distributed systems architecture and cloud-native transformations.

### Epoch

**Senior Software Engineer** (2016 - 2018)

- Architected high-throughput payment processing services using Node.js microservices
- Implemented PCI-DSS compliant workflows with end-to-end encryption
- Built scalable infrastructure using AWS, Docker, and Kubernetes

### NearForm

**Software Architect** (2015 - 2016)

- Led strategy to modernize monolithic Java system into Node.js microservices
- Designed incremental migration path enabling gradual adoption
- Established patterns for legacy system evolution and integration

### Joy the App

**Senior Software Engineer** (2015)

Early engineer at [Joy](https://withjoy.com), Seattle-founded wedding-planning platform (website + iOS/Android apps). Joy went on to Y Combinator S16 (named a top-7 startup of its batch by TechCrunch) and has raised ~$130M to date; still active.

- Built real-time synchronization between clients using WebSockets for seamless collaborative experiences across web and mobile
- Developed scalable backend services with Firebase and Azure
- Built iOS and Android app functionality alongside the backend work

### Tagboard

**Senior Software Engineer** (2013 - 2015)

- Built real-time social data aggregation system using Node.js and MongoDB
- Implemented Redis caching strategies, optimizing performance and reducing API costs
- Implemented WebSocket connections for real-time social data updates, reducing latency for live event displays
- Early adoption of Hapi.js for reliable web services
- Unit and integration testing with Jest

### Hidden Pineapple, LLC

**Co-founder** (2010 - 2013)

Two-person company (with Erik Porter, met working on Channel 9) behind **Rowi**, a Twitter client for Windows Phone, built and run concurrently with the Microsoft day job. Also shipped a **Channel 9 Windows Phone 8 app** (browse/rate/view video for channel9.msdn.com, June 2013, per LinkedIn projects).

- Co-built and shipped Rowi from first code (Dec 2010) through public beta (Feb 2011), paid v1.0 (spring 2011, plus free Lite version), and a Windows Phone 8 rework (v3.0, Dec 2012), Live Tiles, push notifications, real-time streaming refresh, image upload
- Grew the free tier to Twitter's 100,000-user API token cap (Aug 2013); the paid app subsequently hit its own cap before the service wound down (Dec 2013)
- Consistently reviewed as the platform's best Twitter client, Windows Central called it "Windows Phone's Tweetbot" and "one of the flagship apps on the platform"; covered by MobileSyrup, Adweek, MakeUseOf; featured developer interview on Microsoft's official Windows blog (2012)

### Microsoft

**Senior Software Development Engineer** (2006 - 2012)

- **2011-2012**: Led development of the Azure developer portal and billing systems frontend using C#/.NET and ASP.NET MVC, building the self-service management experience for Azure's early commercial customers
- **2009-2011**: [Co-founded the Orchard CMS project](https://docs.orchardcore.net/projects/O1/en/latest/Documentation/Frequently-asked-questions/#what-about-oxite-arent-they-building-a-cms-application-too-how-does-oxite-relate-to-the-orchard-effort), an open-source C#/.NET content management system with significant community adoption, architecting the admin interface, UI composition engine, and extensibility model
- **2008-2009**: Led development of [Oxite](https://arstechnica.com/information-technology/2008/12/microsoft-releases-open-source-cms-oxite-to-developers/), an open-source C#/ASP.NET MVC CMS that powered Channel9 and MIX conference sites
- **2006-2008**: Created JavaScript framework for MSN properties with performance optimizations for high-traffic web properties

### University of Washington Bothell

**Web Application Developer** (2000 - 2005)

- Architected and developed web applications using Perl, MySQL, and Yellow Dog Linux
- Managed web and database server administration
- Built and maintained critical university web infrastructure

## Side Projects & Open Source

### Hone
Self-hosted personal finance tool detecting wasteful spending. Rust + React, SQLite with encryption, and local LLM integration (agentic analysis over Ollama, task-based model routing, RAG-style retrieval over transaction data).

- GitHub: [github.com/heskew/hone](https://github.com/heskew/hone)
- Site: hone.money

### Harper DX Lab
Automated developer experience testing for Harper using AI coding agents. Runs tiered assignments (CRUD → relationships → custom resources → real-time → caching → capstone) against isolated Harper instances, diagnosing failures and classifying DX improvements with reproducible evidence.

- GitHub: [github.com/heskew/harper-dx-lab](https://github.com/heskew/harper-dx-lab)

### FlowSense
Real-time supply chain command center demo built entirely on Harper's collapsed stack architecture. Single Harper instance serves as database, REST API, MQTT broker, and background execution engine, no separate middleware or message broker. React + Vite + Leaflet dashboard with live shipment tracking, disruption simulation, and MQTT-over-WebSocket updates.

- GitHub: [github.com/heskew/flowsense-demo](https://github.com/heskew/flowsense-demo)

### TPS (2026)
An office for agent teams.

Flair — memory that follows the work
CLI — hire, mail, dispatch
Bob — onboard and shell for an agent
Milton — embeddings, in-process

- Site: [tps.dev](https://tps.dev)
- GitHub: [github.com/tpsdev-ai](https://github.com/tpsdev-ai)

### what's up Dug?
Interactive terminal UI for exploring Harper databases with vi-style navigation, fuzzy-search column selection, foreign key traversal, query building with filters/sorting, and adaptive pagination. Published to npm. TypeScript/Bun.

- GitHub: [github.com/heskew/whats-up-dug](https://github.com/heskew/whats-up-dug)

## Technical Skills

### Core Expertise
- Distributed Systems Architecture
- Web Performance
- API Design
- Real-time Data Processing
- Cloud Infrastructure (AWS, Azure)
- Container Orchestration

### Languages & Runtimes
- **Primary**: Node.js/TypeScript, JavaScript
- **Proficient**: C#/.NET, Java, Go
- **Familiar**: Python, Rust

### Server Technologies
- Node.js, fastify, hapi, Express
- Redis, MongoDB, MySQL, PostgreSQL
- Linux, Windows Server

### Cloud & Infrastructure
- AWS (EC2, Lambda, S3, CloudFront, etc.)
- Azure (App Service, Functions, CDN, etc.)
- Docker, Kubernetes
- CI/CD (GitHub Actions, Azure DevOps)

### Security
- OAuth 2.0 / OpenID Connect
- Payment Systems Security, PCI-DSS
- Zero Trust Architecture

### APIs & Data
- REST

- WebSockets, Server-Sent Events

### Frontend & UI
- React, Next.js
- Server-Side Rendering
- Progressive Web Apps
- Web Performance Optimization
- Accessibility

### Leadership & Process
- Technical Strategy
- Architecture Modernization
- Team Mentorship
- Platform Design
- Technical Writing & Documentation

