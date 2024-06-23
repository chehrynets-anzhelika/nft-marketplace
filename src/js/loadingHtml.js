export default async function loadingComponents(component, parent) {
  try {
  const response = await fetch(`../src/html/${component}.html`);
  const html = await response.text();
  const root = parent;
  if (component === "footer") {
    root.insertAdjacentHTML("afterend", html);
  } else if(component === "header") {
    root.insertAdjacentHTML("afterbegin", html);
  } else {
    root.insertAdjacentHTML("beforeend", html);
  }
  } catch(e) {
    console.log(e);
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
    loadingComponents("footer", main);
  }).catch((e) => console.log(e));
});