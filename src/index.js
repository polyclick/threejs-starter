import App from './app/App'

// Favicon
const favicon = document.createElement(`link`)
favicon.setAttribute(`rel`, `icon`)
favicon.setAttribute(`href`, `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>`)
document.head.appendChild(favicon)

// Title
document.title = `Three.js Starter`

// Remove margins
document.body.style.margin = 0

// Start app
new App()