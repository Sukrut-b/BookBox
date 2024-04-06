// send data to cart section
import books from './books.js'; // Assuming the file path is correct


let dataState = JSON.parse(localStorage.getItem("data")) || [];

if (localStorage.getItem("data") == null){
  dataState = [];
}




window.addEventListener("click", (el) => {
  if (el.target.innerText === "Add to Cart ") {
    const bookName = el.target.parentElement.parentElement.children[1].children[0].innerText;
    const book = books.find((book) => book.name === bookName);

    let data = {
      cover: el.target.parentElement.parentElement.children[0].children[0].src,
      name: bookName,
      price: el.target.parentElement.parentElement.children[1].children[2].children[1].innerText.slice(1),
      value: Math.random() * 10e60,
      lastprice: (() => {
        if (el.target.parentElement.parentElement.children[1].children[2].children[0].innerText) {
          return el.target.parentElement.parentElement.children[1].children[2].children[0].innerText;
        }
      })(),
      category: book ? book.category : "Uncategorized" // Add category here
    };

    dataState.push(data);
    console.log(data);
    localStorage.setItem("data", JSON.stringify(dataState));
  }
});


// added to cart , alert section

window.addEventListener("click", (el) => {
  if (el.target.innerText === "Add to Cart "){
    // alert(`${el.target.parentElement.children[0].innerText} Added to cart!`);
    Swal.fire({
      icon: "success", 
      title: "Added to Cart!",
      text: `${el.target.parentElement.children[0].innerText} has been added to your cart.`,
      showConfirmButton: false, // Remove the OK button
      timer: 2000, // Auto close the alert after 2 seconds
    });
    
}});



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

