// Включаем тёмную тему
if(localStorage.getItem('theme')=="dark"){
    document.querySelector("html").classList.add("dark");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#374151");
  }