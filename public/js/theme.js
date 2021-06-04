const html = document.querySelector("html");
if(localStorage.getItem('theme')=="dark"){
    html.classList.add("dark");
    localStorage.setItem("theme", "dark")
}