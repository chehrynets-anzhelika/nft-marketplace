export default function loadingComponents(component) {
    fetch(`../src/html/${component}.html`).then(response => response.text())
    .then(html => {
      const root = document.body;
      root.insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
      console.error('Error loading the component:', error);
    });
}
loadingComponents("footer");
loadingComponents("section-subscribe");
loadingComponents("section-topCreators");
loadingComponents("section-exploreCategories");
loadingComponents("section-popularCollections");
loadingComponents("section-howItWorks");
loadingComponents("section-liveAuctions");
loadingComponents("section-hero");
loadingComponents("header");
