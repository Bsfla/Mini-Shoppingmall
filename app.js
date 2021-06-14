const btn = document.querySelectorAll(".btn");
const item = document.querySelectorAll(".item")
const logo = document.querySelector(".logo")

logo.addEventListener("click", showMainView);

btn.forEach((el) => {
    el.addEventListener("click", itemView);
})

function showMainView() {
    item.forEach((el) => el.classList.remove('deactive'));
}

function itemView(e) {
    console.log(e.target.parentNode);
    const clothcolorbtn = e.target.parentNode.classList[1];
    console.log(clothcolorbtn);
    item.forEach((el) => {
       if (el.classList.contains(clothcolorbtn)) el.classList.remove('deactive');
      else el.classList.add('deactive');
    })
}