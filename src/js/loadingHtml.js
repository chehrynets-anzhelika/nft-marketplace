export default async function loadingComponents(component, parent) {
  const response = await fetch(`../src/html/${component}.html`);
  const html = await response.text();
  const root = parent;
  if (component === "footer") {
    root.insertAdjacentHTML("beforeend", html);
  } else if(component === "header") {
    root.insertAdjacentHTML("afterbegin", html);
  } else {
    root.insertAdjacentHTML("beforeend", html);
  }
}
const main = document.getElementById("main");
loadingComponents("header", document.body).then(() => {
  Promise.all([
    loadingComponents("section-hero", main),
    loadingComponents("section-liveAuctions", main),
    loadingComponents("section-howItWorks", main),
    loadingComponents("section-popularCollections", main),
    loadingComponents("section-exploreCategories", main),
    loadingComponents("section-topCreators", main),
    loadingComponents("section-subscribe", main)
  ]).then(() => {
    loadingComponents("footer", document.body);
  });
});