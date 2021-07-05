const html = document.querySelector("html");
if(localStorage.getItem('theme')=="dark"){
    html.classList.add("dark");
    localStorage.setItem("theme", "dark")
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#374151");
}