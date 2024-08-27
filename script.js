const navmenuBtn = document.querySelector("#uparwalapage nav #navmenu");
const navlist = document.querySelector("nav > ul#navlist");
const midPage = document.getElementById("midpage");

navmenuBtn.addEventListener("click", () => {
  navlist.classList.toggle("popNavlist");
  midPage.classList.toggle("popNavListOn");
})
