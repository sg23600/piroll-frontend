var button = document.getElementById("load")
var click = 0
var here = document.getElementsByClassName("here")

button.addEventListener("click", (e) => {
  click += 1
  if (click % 2 === 1) {
    button.innerHTML = "Show less"
    for (var i = 0; i < 4; i++) {
      here[i].classList.remove("view")
    }
  } else {
    button.innerHTML = "Load more work"
    for (var i = 0; i < 4; i++) {
      here[i].classList.add("view")
    }
  }
})

var slide = document.getElementsByClassName("sq")
var text = document.getElementById("text")
var author = document.getElementById("author")

var removeAll = () => {
  slide[0].src = "img/inactive.png"
  slide[1].src = "img/inactive.png"
  slide[2].src = "img/inactive.png"
}

slide[0].addEventListener("click", (e) => {
  removeAll()
  slide[0].src = "img/active.png"
  text.innerHTML =
    '"Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap."'
  author.innerHTML = "MICHAEL HOPKINS"
})

slide[1].addEventListener("click", (e) => {
  removeAll()
  slide[1].src = "img/active.png"
  text.innerHTML =
    "“I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.”"
  author.innerHTML = "HERBERT BAYARD SWOPE"
})

slide[2].addEventListener("click", (e) => {
  removeAll()
  slide[2].src = "img/active.png"
  text.innerHTML =
    "“It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.”"
  author.innerHTML = "LEONARDO DA VINCI"
})
