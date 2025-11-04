 // Define URLs for different tools
const baseURLs = {
    tom: "https://pages-maestro.dhs.gov/tabular-ontology-maker-f8dd9f/",
    axiolotl: "https://pages-maestro.dhs.gov/axiolotl-632ca4/"
  };
  
  // Define a mapping for page-specific images
  const pageImages = {
    default: "images/colt-07.png", // Default logo
    dsq: "images/dsq-ferret-logo.svg", // DSQ Ferret logo
    visualLynx: "images/visual-lynx-logo.svg" // Visual Lynx logo
  };
  
  // Determine the current page context (you can use a more robust method if needed)
  const currentPage = document.body.getAttribute('data-page') || 'default'; // Use a `data-page` attribute on the body tag to specify the page context
  
  // Select the appropriate image for the header
  const headerImageSrc = pageImages[currentPage] || pageImages.default;
  
  // Define the header content dynamically
  const headerContent = ` 
    <header class="cbp-header">
      <div class="container">
        <div class="row">
          <div class="twelve columns cbp-header-container">
            <!-- Main site logo/title, linking to index.html -->
            <a href="index.html" class="cbp-header-logo">
              <img src="images/cbp-header-logo.svg" alt="CBP Logo" style="height: 65px; margin-right: 20px; vertical-align: middle;">
              COLT
            </a>

            <!-- Navigation -->
            <nav class="cbp-header-nav" aria-label="Main navigation">
              <ul>
                <li><a href="ontology-catalog.html">Ontology Catalog</a></li>
                <li><a href="dsq.html">DSQ Ferret</a></li>
                <li><a href="duplicate-resolver.html">Duplicate Resolver</a></li>
                <li><a href="curation-status-changer.html">Curation Status Management</a></li>
                <li><a href="${baseURLs.tom}index.html" target="_blank">Tabular Ontology Maker</a></li>
                <li><a href="linked-data-transformer.html">Linked-Data Transformer</a></li>
                <li><a href="visualizer.html">Visual Lynx</a></li>
                <li style="float:right"><button id="theme-toggle">Toggle Dark Mode</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <div class="page-banner">
        <img src="${headerImageSrc}" width="175" alt="Page-Specific Logo" class="banner-logo">
        <h1 id="pageTitle"></h1>
    </div>
  `;
  
  // Insert the header content into the placeholder
  document.getElementById('header-placeholder').innerHTML = headerContent;
  
  // Populate the <h1 id="pageTitle"> with the content from <title>
  document.getElementById('pageTitle').textContent = document.title;
  
  // Function to handle responsive navigation bar
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  // Toggle Dark mode
  (function applyInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (savedTheme === 'dark-mode' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark-mode'); // Apply to html element for better inheritance
    } else {
      document.documentElement.classList.remove('dark-mode'); // Apply to html element
    }
  })();
  
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const isNowDark = document.documentElement.classList.toggle('dark-mode'); // Toggle on html element
    localStorage.setItem('theme', isNowDark ? 'dark-mode' : 'light');
    console.info("Dark mode toggled:", document.documentElement.classList.contains('dark-mode'));
  });  