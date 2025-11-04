// Define URLs for different tools
const baseURLs = {
    tom: "https://pages-maestro.dhs.gov/tabular-ontology-maker-f8dd9f/",
    axiolotl: "https://pages-maestro.dhs.gov/axiolotl-632ca4/",
};

// Define the header content dynamically using the cbp.css structure
const headerContent = `
<header class="cbp-header">
  <div class="container">
    <div class="row">
      <div class="twelve columns cbp-header-container">
        <a href="index.html" class="cbp-header-logo">COLT</a>
        <nav class="cbp-header-nav" aria-label="Main navigation">
          <ul>
            <li><a href="ontology-catalog.html">Ontology Catalog</a></li>
            <li><a href="dsq.html">DSQ Ferret</a></li>
            <li><a href="duplicate-resolver.html">Duplicate Resolver</a></li>
            <li><a href="${baseURLs.tom}index.html" target="_blank">Tabular Ontology Maker</a></li>
            <li><a href="visualizer.html">Visual Lynx</a></li>
            <li><button id="theme-toggle" class="button button-small">Toggle Dark Mode</button></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
`;
  
  // Insert the header content into the placeholder
  document.getElementById('header-placeholder').innerHTML = headerContent;
  
  // Populate the <h1 id="pageTitle"> with the content from <title>
  document.getElementById('pageTitle').textContent = document.title;
  
  // Toggle Dark mode
  (function applyInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (savedTheme === 'dark-mode' || (!savedTheme && prefersDark)) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  })();
  
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const isNowDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isNowDark ? 'dark-mode' : 'light');
    console.info("Dark mode toggled:", document.body.classList.contains('dark-mode'));
  });  