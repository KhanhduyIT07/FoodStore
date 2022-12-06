const _$ = document.querySelector.bind(document);
const _$$ = document.querySelectorAll.bind(document);

//https://63848a373fa7acb14ff7ce36.mockapi.io/food_list

const menuList = _$("#menu-list");
const btnSeeMore = _$("#btn-see-more");
const feedBack = _$("#feed-back");

function renderStars(array) {
     const groupStars = _$$(".group");

     groupStars.forEach((groupStar, index) => {
          Array.prototype.slice
               .call(groupStar.children)
               .slice(0, array[index].rate)
               .forEach((star) => star.classList.add("checked"));
     });
}
function getFoodAPI() {
     fetch("https://63848a373fa7acb14ff7ce36.mockapi.io/food_list")
          .then((res) => res.json())
          .then((data) => {
               renderMenuFoods(data);
          });
}
getFoodAPI();
function renderMenuFoods(array) {
     menuList.innerHTML = array
          .map(
               (object) => `
               <div class="menu__content">
               <img src="${object.image}" alt="" class="menu__img">
               <h3 class="menu__name product-title">${object.foodName}</h3>
               <span class="menu__detail">${object.description}</span>
               <span class="menu__preci">$${object.price}</span>
               <!--  ddaay-->
               <i class='bx bx-plus add-cart'></i>
               <!-- sao -->
               <div class="group">
                   <span class="fa fa-star"></span>
                   <span class="fa fa-star"></span>
                   <span class="fa fa-star"></span>
                   <span class="fa fa-star"></span>
                   <span class="fa fa-star"></span>
               </div>
           </div>
          `
          )
          .join("");

     renderStars(array);
     ready()
}


btnSeeMore.addEventListener("click", (e) => {
     e.preventDefault();

     btnSeeMore.innerText = "See Less";
     menuList.classList.toggle("show");

     if (!menuList.classList.contains("show")) {
          btnSeeMore.innerText = "See More";
          menuList.scrollIntoView({
               behavior: "smooth",
               block: "start",
          });
     }
});

// Slide
function renderFeedBack(array) {
     feedBack.innerHTML = array
          .map(
               (object) => `
  <div class="slide-item">
  <div class="feedback-content">
    <img class="user-avt" alt="" src="${object.avatar}" />
    <p class="user-feedback">
      ${object.comment}
    </p>
    <div class="user-rate">
      <span class="fa-solid fa-star"></span>
      <span class="fa-solid fa-star"></span>
      <span class="fa-solid fa-star"></span>
      <span class="fa-solid fa-star"></span>
      <span class="fa-solid fa-star"></span>
    </div>
  </div>
  <div class="user-info">
    <h2 class="user-name">${object.userName}</h2>
    <p class="user-job">${object.job}</p>
  </div>
</div>
  `
          )
          .join("");

     renderUserRates(array);
}

function renderStars(array) {
     const groupStars = _$$(".group");

     groupStars.forEach((groupStar, index) => {
          Array.prototype.slice
               .call(groupStar.children)
               .slice(0, array[index].rate)
               .forEach((star) => star.classList.add("checked"));
     });
}

function renderUserRates(array) {
     const userRates = _$$(".user-rate");

     userRates.forEach((userRate, index) => {
          Array.prototype.slice
               .call(userRate.children)
               .slice(0, array[index].rate)
               .forEach((star) => star.classList.add("checked"));
     });
}

function getFeedbackAPI() {
     fetch("https://63848a373fa7acb14ff7ce36.mockapi.io/feed_back")
          .then((res) => res.json())
          .then((data) => {
               renderFeedBack(data);

               $(document).ready(function () {
                    $(".slider-container").slick({
                         autoplay: true,
                         autoplaySpeed: 1500,
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         infinite: true,
                         arrows: true,
                         draggable: true,
                         prevArrow: `<span class="fa-solid fa-angle-left"></span>`,
                         nextArrow: `<span class="fa-solid fa-angle-right"></span>`,
                         dots: false,
                    });
               });
          });
}

getFeedbackAPI();


