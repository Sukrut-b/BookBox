// send data to cart section
import books from "../DataBase/Data.js";


let dataState = JSON.parse(localStorage.getItem("data")) || [];

if (localStorage.getItem("data") == null){
  dataState = [];
}

function findBookByName(array, name) {
  console.log(name)
  console.log("Complete: "+array)
  for (let i = 0; i < array.length; i++) {
    if (array[i].name == name) {
console.log("Data"+array[i]);
      return array[i];
    }
  }
  return null; // Return null if no matching object is found
}



window.addEventListener("click", (el) => {
  if (el.target.innerText === "Add to Cart ") {
    const bookName = el.target.parentElement.parentElement.children[1].children[0].innerText;
    const book = books().filter((book) => book.name === bookName);
    console.log(book);

    let data = {
      cover: el.target.parentElement.parentElement.children[0].children[0].src,
      name: bookName,
      value: Math.random() * 10e60,
      lastprice: (() => {
        if (el.target.parentElement.parentElement.children[1].children[2].children[0].innerText) {
          return el.target.parentElement.parentElement.children[1].children[2].children[0].innerText;
        }
      })(),
      category: book ? book[0].categorie : "Uncategorized" // Add category here
    };

    dataState.push(data);
    console.log(data);
    localStorage.setItem("data", JSON.stringify(dataState));

    Swal.fire({
      icon: "success", 
      target : document.getElementById('form-modal'),
      title: "Added to Cart!",
      text: `${data.name} has been added to your cart.`,
      showConfirmButton: false, // Remove the OK button
      timer: 10000, 
      position: "top",// Auto close the alert after 2 seconds
    });
  }
});


// added to cart , alert section

// window.addEventListener("click", (el) => {
//   if (el.target.innerText === "Add to Cart "){
//     // alert(`${el.target.parentElement.children[0].innerText} Added to cart!`);
//     Swal.fire({
//       icon: "success", 
//       title: "Added to Cart!",
//       text: `${el.target.parentElement.children[0].innerText} has been added to your cart.`,
//       showConfirmButton: false, // Remove the OK button
//       timer: 2000, // Auto close the alert after 2 seconds
//     });
    
// }});



// bi-list section

const biList = document.querySelector(".bi-list");
const secondNavbarBiListClicked  = document.querySelector(".second-navbar-bi-list-clicked");
const closeListBtn  = document.querySelector(".close-list-btn");

biList.addEventListener("click", () => {
  secondNavbarBiListClicked.style.top = "0rem";
})

closeListBtn.addEventListener("click", () => {
  secondNavbarBiListClicked.style.top = "-40rem";
  setTimeout(() => {
    location.reload();
  }, 500);
})

