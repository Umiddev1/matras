let elList = document.querySelector('.statistics__list');
let arr = [
  {num:7, title:"yillik tajriba"},
  {num:"10k+", title:"mamnun mijozlar"},
  {num:10, title:"yillik kafolat"},
  {num:3, title:"kunda yetkazish"},
]

arr.map((data) => {
  elList.innerHTML += `<li class="statis__item col-lg-3 col-md-3 col-sm-3 col-xs-6 center-xs">
  <h4 class="statis__num">${data.num}</h4><p class="statis__title">${data.title}</p>
  </li>`
})