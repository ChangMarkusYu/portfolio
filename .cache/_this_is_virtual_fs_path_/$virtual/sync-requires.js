
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/cyu/Documents/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-about-me-js": preferDefault(require("/home/cyu/Documents/portfolio/src/pages/AboutMe.js")),
  "component---src-pages-index-js": preferDefault(require("/home/cyu/Documents/portfolio/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/home/cyu/Documents/portfolio/src/pages/Projects.js"))
}

