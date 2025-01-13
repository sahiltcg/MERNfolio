function showSidebar(){
    let sidebar = document.querySelector(".sidebar")
    let hide = document.querySelector(".hide")
    sidebar.style.display = "flex"
    hide.style.display = "block"
}

function hideSidebar() {
    let sidebar = document.querySelector(".sidebar")
    let hide = document.querySelector(".hide")
    sidebar.style.display = "none"
    hide.style.display = "none"
}