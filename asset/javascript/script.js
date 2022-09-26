const rightBtn = document.getElementById("rightBtn")

rightBtn.addEventListener("click",() => {
    let stroy = document.getElementById("story")
    stroy.scrollBy(30,0)
    // stroy.style.transitionDuration = "500ms"
})