import api from "../../api/api";
var scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 800,
});

// const fetchng = () => {
//   const news = document.querySelectorAll("#card-hedding");
//   fetch(
//     "http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-18&sortBy=publishedAt&apiKey=abd7d5f237c84c04823e6b69ce0242f3"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       data.articles.map(
//         (article) => console.log(article)
//        (news.innerHTML = `<h5 class="text-left card-title">${article.title}</h5>`)
//        );
//     });
// };

// function fetching() {
//   const news = document.querySelectorAll("#card-hedding");
//   // promise chala
//   fetch(
//     "http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-18&sortBy=publishedAt&apiKey=abd7d5f237c84c04823e6b69ce0242f3"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       let template = `<div>
//         ${data.articles
//           .map(
//             (article) => `<div class="col-4">
//             <h5 class="text-left card-title">${article.title}</h5>
//         </div>`
//           )
//           .join("")}
//       </div>`;
//       news.innerHTML = template;
//     });
// }

// window.addEventListener("DOMContentLoaded", (event) => {
//   fetching();
// });
// const icon = document.getElementById("icon");
// const search = document.getElementById("search");
// const disply = () => {
//   search.style.display = "block";
// };
// icon.addEventListener("click", (e) => {
//   e.preventDefault;
//   disply();
// });
// const NewsApi = () => {
//   let newscard = document.getElementById("card-heading");
//   api().then((data) => {
//     let newstitle = `<div class="row text-center">
//     ${data.articles
//       .map(
//         (article) =>
//           `<div class="col-4">
//       <div class="card" style="width: 18rem;">
//       <img
//         class="card-img-top"
//         src=${article.urlToImage}
//         alt="Card image cap"
//       />
//       <div class="card-body " >
//         <h1>${article.author}</h1>
//         <p class="card-text text-left">
//           ftftiftyftyruddrd
//           </p>
//           <div class="links d-flex justify-content-between">
//             <a href="#" class="">Date</a>
//             <a href="#" class="">Read More</a>
//           </div>
//       </div>
//     </div>
//    </div>`
//       )
//       .join("")}
//   </div>`;
//     newscard.innerHTML = newstitle;
//   });
// };

// window.addEventListener("DOMContentLoaded", (event) => {
//   NewsApi();
// });
