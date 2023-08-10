const btn = document.getElementById("post-btn")
const post = document.getElementById("post")
const widget = document.getElementById("star-widget")

btn.onclick = ()=>{
    widget.style.display= "none"
    post.style.display = "block"
    return false;
}
// btn.addEventListener("click",()=>{
//     post.classList.add("show")
// })