document.addEventListener("DOMContentLoaded", function() {
  // HTML code for the navigation
  var navigationHTML = `
    <div id="nav-container">
      <nav id="navbar">
        <ul id="main-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="docs.html">Docs</a></li>
          <li><a href="notes.html">Notes</a></li>
          <li><a href="projects.html">Projects</a></li>
        </ul>
        <ul id="icon-links">
          <li><a href="https://www.linkedin.com/in/alvarezaa" target="_blank"><img src="assets/LinkedInLogo.svg" alt="LinkedIn" class="social-icon"></a></li>
          <li><a href="https://ucsb.joinhandshake.com/stu/users/11788499" target="_blank"><img src="assets/HandshakeLogo.svg" alt="Handshake" class="social-icon"></a></li>
        </ul>
      </nav>
    </div>
  `;

  // Locate the element where you want to insert the navigation
  var navbarContainer = document.getElementById('nav-container');
  
  // Insert the navigation HTML
  if (navbarContainer) {
    navbarContainer.innerHTML = navigationHTML;
  }
});

