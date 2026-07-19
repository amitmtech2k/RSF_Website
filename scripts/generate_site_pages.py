from pathlib import Path

BASE_URL = 'https://razorsharpfocus.com'
CONTACT_URL = '/#contact'
ENTITY = 'RazorSharpFocus is an Enterprise Operating Intelligence Platform that connects enterprise systems, business processes, workflows, AI, and people to improve execution, governance, compliance, operational visibility, and business outcomes.'
NAV_ITEMS = [
    ('Platform', 'platform.html'),
    ('Solutions', 'solutions.html'),
    ('Industries', 'industries.html'),
    ('Resources', 'resources.html'),
    ('Glossary', 'glossary.html'),
    ('Architecture', 'architecture.html'),
    ('FAQ', 'faq.html'),
]
FOOTER_ITEMS = [
    ('Privacy Policy', 'privacy.html'),
    ('Terms', 'terms.html'),
    ('Cookie Policy', 'cookie.html'),
]

LEGAL_PAGES = ['privacy.html', 'terms.html', 'cookie.html']

PAGE_SPEC = [
    {
        'slug': 'platform.html',
        'title': 'Platform',
        'page_heading': 'Enterprise Operating Intelligence Platform',
        'page_subhead': 'The unified layer that connects systems, workflows, AI and business execution.',
        'page_lead': 'RazorSharpFocus brings enterprise systems together in a single operating intelligence layer to drive reliable execution, governance and measurable outcomes.',
        'overview': 'Built for executive teams, operations leaders and technology architects, the RazorSharpFocus platform is the missing layer between enterprise systems and business execution.',
        'cards': [
            {'heading': 'Execution Intelligence', 'copy': 'Translate strategic intent into operational actions with real-time orchestration and outcome tracking.'},
            {'heading': 'Governance & Compliance', 'copy': 'Enforce policies, controls and approvals across workflows with audit-ready operational trails.'},
            {'heading': 'Decision Automation', 'copy': 'Use context-aware AI to recommend actions, prioritize work and reduce manual risk.'},
        ],
    },
    {
        'slug': 'solutions.html',
        'title': 'Solutions',
        'page_heading': 'Enterprise Execution Solutions',
        'page_subhead': 'Solutions designed to ensure enterprise operations run with intelligence, speed and control.',
        'page_lead': 'RazorSharpFocus delivers solutions for workflow automation, risk management, compliance monitoring and executive decision support.',
        'overview': 'Explore the enterprise solution patterns that make execution visible and outcomes predictable.',
        'cards': [
            {'heading': 'Workflow Automation', 'copy': 'Automate approval flows, handoffs and exception management across teams and systems.'},
            {'heading': 'Risk & Compliance', 'copy': 'Detect risks early and manage compliance with the same execution layer that runs operations.'},
            {'heading': 'Executive Visibility', 'copy': 'Give leadership a single source of truth for operational health, execution gaps, and outcomes.'},
        ],
    },
    {
        'slug': 'industries.html',
        'title': 'Industries',
        'page_heading': 'Industry Execution Intelligence',
        'page_subhead': 'The operating intelligence layer for regulated industries, digital services and mission-critical operations.',
        'page_lead': 'RazorSharpFocus is built to meet the execution, governance and compliance demands of banking, insurance, healthcare, government, manufacturing, retail and more.',
        'overview': 'Industry-specific execution challenges require a platform that can connect systems, enforce controls and provide visibility in real time.',
        'cards': [
            {'heading': 'Banking & Payments', 'copy': 'Improve payments, reconciliation, dispute resolution and regulatory controls across financial operations.'},
            {'heading': 'Insurance & Healthcare', 'copy': 'Manage claims, approvals and compliance workflows with end-to-end operational visibility.'},
            {'heading': 'Government & Manufacturing', 'copy': 'Coordinate service delivery, finance and production execution while reducing operational friction.'},
        ],
    },
    {
        'slug': 'resources.html',
        'title': 'Resources',
        'page_heading': 'Enterprise Resource Center',
        'page_subhead': 'Guides, case studies and reference material for operating intelligence leadership.',
        'page_lead': 'Access focused content for enterprise architects, operations leaders and digital transformation teams.',
        'overview': 'Resources that explain how the RazorSharpFocus platform supports governance, execution and AI-driven operations.',
        'cards': [
            {'heading': 'Architecture Guides', 'copy': 'Learn how operating intelligence fits into enterprise architecture and integration roadmaps.'},
            {'heading': 'Use Case Briefs', 'copy': 'See how execution intelligence is applied across finance, operations, risk and compliance.'},
            {'heading': 'Glossary & Definitions', 'copy': 'Align your team on the terminology of enterprise execution, decision intelligence, and workflow orchestration.'},
        ],
    },
    {
        'slug': 'glossary.html',
        'title': 'Glossary',
        'page_heading': 'Glossary',
        'page_subhead': 'Clear definitions for enterprise operating intelligence, execution and governance.',
        'page_lead': 'Build unified language across business and technology teams with precise definitions for key terms.',
        'overview': 'A shared glossary makes it easier for executives and architects to understand how the platform transforms execution and risk management.',
        'cards': [
            {'heading': 'Operating Intelligence', 'copy': 'The capability to connect systems, workflows, people and AI to deliver reliable enterprise execution.'},
            {'heading': 'Decision Intelligence', 'copy': 'The process of converting signals into contextual actions that improve outcomes and reduce risk.'},
            {'heading': 'Workflow Automation', 'copy': 'The orchestration layer that moves work across teams, systems and approvals with governance.'},
        ],
    },
    {
        'slug': 'architecture.html',
        'title': 'Architecture',
        'page_heading': 'Operating Intelligence Architecture',
        'page_subhead': 'The architecture that connects systems, workflows, decisions and outcomes.',
        'page_lead': 'RazorSharpFocus sits above enterprise systems and provides the execution layer needed for actionable visibility and governance.',
        'overview': 'A modern architecture for enterprise execution intelligence requires connectors, workflow orchestration, decision services and outcome monitoring.',
        'cards': [
            {'heading': 'System Integration', 'copy': 'Connect ERP, CRM, finance, HRMS, SCM, IoT and analytics systems to the operating intelligence platform.'},
            {'heading': 'Workflow Engine', 'copy': 'Coordinate tasks, approvals and handoffs through a governed workflow fabric.'},
            {'heading': 'Decision Services', 'copy': 'Apply AI and business rules to recommend actions, prioritize cases and reduce risk.'},
        ],
    },
    {
        'slug': 'faq.html',
        'title': 'FAQ',
        'page_heading': 'Frequently Asked Questions',
        'page_subhead': 'Answers to common enterprise and execution intelligence questions.',
        'page_lead': 'Get clarity on what RazorSharpFocus does, how it integrates, and why it matters for enterprise operations.',
        'overview': 'A concise FAQ for executives, IT leaders and compliance teams exploring operating intelligence.',
        'cards': [
            {'heading': 'What is operating intelligence?', 'copy': 'Operating intelligence connects systems and workflows to improve execution, oversight and outcomes.'},
            {'heading': 'Why is governance important?', 'copy': 'Governance ensures that execution follows policy, reduces risk and creates audit-ready operations.'},
            {'heading': 'Can it work with existing systems?', 'copy': 'Yes — the platform is designed to integrate with ERP, CRM, finance, HRMS, SCM and AI systems.'},
        ],
        'faq_items': [
            ('What is Operating Intelligence?', 'Operating Intelligence is the enterprise capability that connects systems, workflows and teams to improve execution, visibility and decision accuracy.'),
            ('What is Enterprise Execution?', 'Enterprise Execution is the ability to orchestrate people, processes and technology so strategic decisions translate to reliable operational outcomes.'),
            ('How is RazorSharpFocus different from ERP?', 'RazorSharpFocus is a layer above ERP and systems that manages execution, governance and real-time operations rather than back-office transaction processing.'),
            ('How does RazorSharpFocus integrate with SAP?', 'RazorSharpFocus integrates with SAP through enterprise APIs, data connectors and workflow orchestration to bring SAP data into the operating intelligence layer.'),
            ('How does it integrate with Microsoft Dynamics?', 'RazorSharpFocus integrates with Microsoft Dynamics via APIs, event streams and process orchestration to align Dynamics with execution workflows.'),
            ('What industries use RazorSharpFocus?', 'RazorSharpFocus is used in banking, payments, insurance, healthcare, manufacturing, retail, logistics, government, utilities, education and telecom.'),
            ('How does AI improve enterprise execution?', 'AI improves enterprise execution by detecting risk, recommending actions, automating workflows and providing decision intelligence at the moment of execution.'),
            ('Can RazorSharpFocus integrate with existing systems?', 'Yes. RazorSharpFocus is designed to integrate with ERP, CRM, HRMS, SCM, finance, IoT, analytics and communication systems.'),
        ],
    },
]

BASE_TEMPLATE = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title><<PAGE_TITLE>> | RazorSharpFocus | Enterprise Operating Intelligence Platform</title>
<meta name="description" content="<<META_DESCRIPTION>>"/>
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="RazorSharpFocus"/>
<meta property="og:locale" content="en_US"/>
<meta property="og:title" content="<<PAGE_TITLE>> | RazorSharpFocus | Enterprise Operating Intelligence Platform"/>
<meta property="og:description" content="<<META_DESCRIPTION>>"/>
<meta property="og:url" content="<<PAGE_URL>>"/>
<meta property="og:image" content="https://razorsharpfocus.com/img/og-image.svg"/>
<meta property="og:image:alt" content="RazorSharpFocus Enterprise Operating Intelligence Platform"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:site" content="@RazorSharpFocus"/>
<meta name="twitter:creator" content="@RazorSharpFocus"/>
<meta name="twitter:title" content="<<PAGE_TITLE>> | RazorSharpFocus | Enterprise Operating Intelligence Platform"/>
<meta name="twitter:description" content="<<META_DESCRIPTION>>"/>
<meta name="twitter:image" content="https://razorsharpfocus.com/img/og-image.svg"/>
<meta name="twitter:image:alt" content="RazorSharpFocus Enterprise Operating Intelligence Platform"/>
<link rel="canonical" href="<<PAGE_URL>>"/>
<link rel="alternate" hreflang="en" href="<<PAGE_URL>>"/>
<link rel="manifest" href="/manifest.json"/>
<meta name="theme-color" content="#0a1b40"/>
<link rel="icon" type="image/svg+xml" href="favicon.svg"/>
<link rel="alternate icon" href="favicon.svg"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="styles.css"/>
<script type="application/ld+json"><<JSON_LD>></script>
</head>
<body>
<a href="#main-content" class="skip-link">Skip to main content</a>
<header id="header">
  <div class="header-inner">
    <a href="/" class="logo"><img src="img/logo-rsf.jpeg" alt="RazorSharpFocus logo" class="logo-img"/>RazorSharpFocus</a>
    <nav class="nav" id="main-nav" aria-label="Main navigation"><<NAV_LINKS>><a href="<<CONTACT_URL>>" class="nav-cta">Talk to Enterprise</a></nav>
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>
  </div>
</header>
<main>
<section id="hero" role="main">
  <div class="hero-wrap" id="main-content">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-text">
          <span class="section-label"><<PAGE_TITLE>></span>
          <h1 class="hero-h1"><<PAGE_HEADING>></h1>
          <p class="hero-tagline"><<PAGE_SUBHEAD>></p>
          <p class="hero-sub"><<PAGE_LEAD>></p>
          <div class="hero-ctas">
            <a href="<<CONTACT_URL>>" class="btn btn-primary">Book a briefing</a>
            <a href="resources.html" class="btn btn-outline-dark">Explore resources</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-ui">
            <div class="hui-bar">
              <div class="hui-dot"></div><div class="hui-dot"></div><div class="hui-dot"></div>
              <span class="hui-bar-title">RazorSharpFocus Platform</span>
            </div>
            <div class="hui-body">
              <div class="hui-header">
                <span class="hui-title">Execution Intelligence</span>
                <span class="hui-badge">Enterprise</span>
              </div>
              <div class="hui-stats">
                <div class="hui-stat"><div class="hui-stat-n">7</div><div class="hui-stat-l">Core domains</div></div>
                <div class="hui-stat"><div class="hui-stat-n">4x</div><div class="hui-stat-l">Decision velocity</div></div>
                <div class="hui-stat"><div class="hui-stat-n">98%</div><div class="hui-stat-l">Visibility coverage</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="overview">
  <div class="container">
    <div class="section-head">
      <span class="section-label">Overview</span>
      <h2>What this capability means for enterprise execution</h2>
      <p><<OVERVIEW>></p>
    </div>
    <div class="card-grid">
      <<CARDS>>
    </div>
  </div>
</section>
<section id="architecture">
  <div class="container">
    <div class="section-head">
      <span class="section-label">Architecture</span>
      <h2>Enterprise architecture for execution intelligence</h2>
      <p><<ARCHITECTURE_TEXT>></p>
    </div>
    <div class="arch-diagram">
      <div class="arch-diagram-row"><span>ERP</span><span>CRM</span><span>HRMS</span><span>SCM</span><span>Finance</span><span>IoT</span><span>AI</span></div>
      <div class="arch-diagram-flow">↓</div>
      <div class="arch-diagram-row"><span>RazorSharpFocus Platform</span></div>
      <div class="arch-diagram-flow">↓</div>
      <div class="arch-diagram-row"><span>Workflow Engine</span><span>Decision Intelligence</span><span>Execution Intelligence</span><span>Operational Visibility</span></div>
      <div class="arch-diagram-flow">↓</div>
      <div class="arch-diagram-row"><span>Business Outcomes</span></div>
    </div>
  </div>
</section>
<section id="faq">
  <div class="container">
    <div class="section-head">
      <span class="section-label">FAQ</span>
      <h2>Frequently asked questions</h2>
      <p>Common questions answered in clear enterprise language.</p>
    </div>
    <div class="faq-grid">
      <<FAQ_ITEMS>>
    </div>
  </div>
</section>
</main>
<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="fg-brand">
        <div class="fg-logo"><img src="img/logo-rsf.jpeg" alt="RazorSharpFocus logo" class="footer-logo"/>RazorSharpFocus</div>
        <p class="fg-tagline"><<ENTITY>></p>
      </div>
      <div class="fg-col">
        <div class="fg-col-title">Explore</div>
        <<NAV_LINKS>>
      </div>
      <div class="fg-col">
        <div class="fg-col-title">Legal</div>
        <<FOOTER_LINKS>>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="fb-left-block">
        <div class="fb-left">© 2026 RazorSharpFocus Intelligence Private Limited. Registered in Delhi, India. All rights reserved.</div>
        <div class="fb-contact"><a href="mailto:amit@razorsharpfocus.com">amit@razorsharpfocus.com</a></div>
      </div>
      <div class="fb-tag">The Missing Layer Between Enterprise Systems and Business Execution</div>
    </div>
  </div>
</footer>
<script>
const mainNav = document.getElementById('main-nav');
const navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));
</script>
</body>
</html>
'''

FAQ_ITEMS_DEFAULT = [
    ('What is Operating Intelligence?', 'Operating Intelligence is the enterprise capability that connects systems, workflows and teams to improve execution, visibility and decision accuracy.'),
    ('What is Enterprise Execution?', 'Enterprise Execution is the ability to orchestrate people, processes and technology so strategic decisions translate to reliable operational outcomes.'),
    ('How is RazorSharpFocus different from ERP?', 'RazorSharpFocus is a layer above ERP and systems that manages execution, governance and real-time operations rather than back-office transaction processing.'),
    ('How does RazorSharpFocus integrate with SAP?', 'RazorSharpFocus integrates with SAP through enterprise APIs, data connectors and workflow orchestration to bring SAP data into the operating intelligence layer.'),
    ('How does it integrate with Microsoft Dynamics?', 'RazorSharpFocus integrates with Microsoft Dynamics via APIs, event streams and process orchestration to align Dynamics with execution workflows.'),
    ('What industries use RazorSharpFocus?', 'RazorSharpFocus is used in banking, payments, insurance, healthcare, manufacturing, retail, logistics, government, utilities, education and telecom.'),
    ('How does AI improve enterprise execution?', 'AI improves enterprise execution by detecting risk, recommending actions, automating workflows and providing decision intelligence at the moment of execution.'),
    ('Can RazorSharpFocus integrate with existing systems?', 'Yes. RazorSharpFocus is designed to integrate with ERP, CRM, HRMS, SCM, finance, IoT, analytics and communication systems.'),
]


def build_nav():
    return ''.join([f'<a href="{href}">{label}</a>' for label, href in NAV_ITEMS])


def build_footer():
    nav_links = ''.join([f'<a href="{href}" class="fg-link">{label}</a>' for label, href in NAV_ITEMS])
    footer_links = ''.join([f'<a href="{href}" class="fg-link">{label}</a>' for label, href in FOOTER_ITEMS])
    return nav_links, footer_links


def build_json_ld(title, description, page_url):
    return '{"@context": "https://schema.org", "@graph": [' + ','.join([
        '{"@type":"Organization","name":"RazorSharpFocus","url":"' + BASE_URL + '","logo":"' + BASE_URL + '/img/logo-rsf.jpeg","sameAs":["https://www.linkedin.com/company/razorsharpfocus"],"description":"' + ENTITY + '","foundingDate":"2026","founder":{"@type":"Person","name":"Amit Kumar Tyagi","jobTitle":"Founder","url":"' + BASE_URL + '#founder"},"contactPoint":[{"@type":"ContactPoint","contactType":"sales","email":"amit@razorsharpfocus.com","url":"mailto:amit@razorsharpfocus.com"}] }',
        '{"@type":"WebSite","name":"RazorSharpFocus","url":"' + BASE_URL + '","potentialAction":{"@type":"SearchAction","target":"' + BASE_URL + '/?s={search_term_string}","query-input":"required name=search_term_string"}}',
        '{"@type":"WebPage","name":"' + title + '","description":"' + description + '","url":"' + page_url + '","inLanguage":"en-US","isPartOf":{"@type":"WebSite","name":"RazorSharpFocus","url":"' + BASE_URL + '"},"breadcrumb":{"@id":"' + page_url + '#breadcrumb"}}',
        '{"@type":"BreadcrumbList","@id":"' + page_url + '#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"' + BASE_URL + '/"},{"@type":"ListItem","position":2,"name":"' + title + '","item":"' + page_url + '"}]}'
    ]) + ']}'


def render_card_grid(cards):
    return ''.join([f'<div class="card"><h3>{card["heading"]}</h3><p>{card["copy"]}</p></div>' for card in cards])


def render_faq_items(faq_items):
    return ''.join([f'<div class="faq-item"><h3>{question}</h3><p>{answer}</p></div>' for question, answer in faq_items])


def create_page(spec, nav_html, footer_html):
    faq_items = spec.get('faq_items', FAQ_ITEMS_DEFAULT)
    page_url = f"{BASE_URL}/{spec['slug']}"
    json_ld = build_json_ld(spec['title'] + ' | RazorSharpFocus | Enterprise Operating Intelligence Platform', spec['page_subhead'], page_url)
    card_html = render_card_grid(spec['cards'])
    faq_html = render_faq_items(faq_items)
    return BASE_TEMPLATE.replace('<<PAGE_TITLE>>', spec['title']) \
        .replace('<<META_DESCRIPTION>>', spec['page_subhead']) \
        .replace('<<PAGE_URL>>', page_url) \
        .replace('<<CONTACT_URL>>', CONTACT_URL) \
        .replace('<<PAGE_HEADING>>', spec['page_heading']) \
        .replace('<<PAGE_SUBHEAD>>', spec['page_subhead']) \
        .replace('<<PAGE_LEAD>>', spec['page_lead']) \
        .replace('<<OVERVIEW>>', spec['overview']) \
        .replace('<<CARDS>>', card_html) \
        .replace('<<ARCHITECTURE_TEXT>>', spec['overview']) \
        .replace('<<FAQ_ITEMS>>', faq_html) \
        .replace('<<JSON_LD>>', json_ld) \
        .replace('<<NAV_LINKS>>', nav_html) \
        .replace('<<FOOTER_LINKS>>', footer_html) \
        .replace('<<ENTITY>>', ENTITY)


def main():
    nav_html = build_nav()
    nav_links, footer_links = build_footer()
    created = []
    for spec in PAGE_SPEC:
        output = create_page(spec, nav_html, footer_links)
        Path(spec['slug']).write_text(output, encoding='utf-8')
        created.append(spec['slug'])
    sitemap_entries = ['<url><loc>' + BASE_URL + '/</loc><changefreq>weekly</changefreq><priority>1.00</priority></url>']
    for slug in created:
        sitemap_entries.append(f'<url><loc>{BASE_URL}/{slug}</loc><changefreq>monthly</changefreq><priority>0.80</priority></url>')
    for slug in LEGAL_PAGES:
        sitemap_entries.append(f'<url><loc>{BASE_URL}/{slug}</loc><changefreq>yearly</changefreq><priority>0.30</priority></url>')
    Path('sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(sitemap_entries) + '\n</urlset>', encoding='utf-8')
    rss_items = [
        '<item>',
        '<title>Why Enterprise Operating Intelligence Matters</title>',
        '<link>' + BASE_URL + '/resources.html</link>',
        '<description>Frameworks for execution intelligence and decision-driven operations.</description>',
        '<pubDate>Sat, 19 Jul 2026 12:00:00 GMT</pubDate>',
        '</item>',
    ]
    Path('rss.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n<title>RazorSharpFocus Resources</title>\n<link>' + BASE_URL + '/resources.html</link>\n<description>Latest enterprise operating intelligence insights.</description>\n<language>en-us</language>\n<lastBuildDate>Sat, 19 Jul 2026 12:00:00 GMT</lastBuildDate>\n' + '\n'.join(rss_items) + '\n</channel>\n</rss>', encoding='utf-8')
    print('Created pages:', ', '.join(created))


if __name__ == '__main__':
    main()
