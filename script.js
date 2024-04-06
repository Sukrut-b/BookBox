import books from "./DataBase/Data.js";

// new books section

const newBooksCarouselItem1 = document.getElementById("newBooksCarouselItem1");
const newBooksCarouselItem2 = document.getElementById("newBooksCarouselItem2");
const newBooksCarouselItem3 = document.getElementById("newBooksCarouselItem3");

const newestBookFiltred1 = books().filter(book => book.date <= 4);
const newestBookFiltred2 = books().filter(book => book.date <= 8 && book.date > 4);
const newestBookFiltred3 = books().filter(book => book.date <= 12 && book.date > 8);

function cartCreator(book) {
    return `<div class="bookCon col-lg-3 col-sm-6">
        <div class="thumb-wrapper">
            <div class="img-box">
                <img src="${book.cover}" class="img-fluid" alt="book img">
            </div>
            <div class="thumb-content">
                <h4 class="book-name">${book.name}</h4>
                    ${book.stars}
              
                <button class="btn addToCart-btn btn-outline-danger"> Add to Cart <i class="bi bi-bag"></i></button>
            </div>
        </div>
    </div>`
}


{/* <p class="item-price"><strike>${book.lastPrice || ""}</strike><b>₹${book.price}</b></p> */}

newestBookFiltred1.forEach(book => {
    newBooksCarouselItem1.innerHTML += (cartCreator(book));
})

newestBookFiltred2.forEach(book => {
    newBooksCarouselItem2.innerHTML += (cartCreator(book));
})

newestBookFiltred3.forEach(book => {
    newBooksCarouselItem3.innerHTML += (cartCreator(book));
})



let parsedData = JSON.parse(localStorage.getItem("data")) || [];
let categoriesCount = {}; // Object to store category counts

// Loop through parsedData to count category occurrences
parsedData.forEach((item) => {
  item.category.forEach((category) => {
    categoriesCount[category] = (categoriesCount[category] || 0) + 1;
  });
});

// Find the max count and corresponding category
let maxCategoryCount = 0;
let maxCategory = "";
for (const category in categoriesCount) {
  if (categoriesCount.hasOwnProperty(category)) {
    if (categoriesCount[category] > maxCategoryCount) {
      maxCategoryCount = categoriesCount[category];
      maxCategory = category;
    }
  }
}

console.log(`Max category count: ${maxCategoryCount}`);
console.log(`Max category: ${maxCategory}`);



// reccommended books
const reccommended1 = document.getElementById("recommendedbooks1");
const reccommended2 = document.getElementById("recommendedbooks2");
const reccommended3 = document.getElementById("recommendedbooks3");

const recommendedBooks = books().filter((book) => {
    return book.categorie.includes(maxCategory);
  });
  console.log("recommended books"+recommendedBooks)
recommendedBooks.slice(0,4).forEach(book => {
    reccommended1.innerHTML += (cartCreator(book));
})

recommendedBooks.slice(4,8).forEach(book => {
    reccommended2.innerHTML += (cartCreator(book));
})

recommendedBooks.slice(8,12).forEach(book => {
    reccommended3.innerHTML += (cartCreator(book));
})




// best books section

const bestBooksCarouselItem1 = document.getElementById("bestBooksCarouselItem1");
const bestBooksCarouselItem2 = document.getElementById("bestBooksCarouselItem2");
const bestBooksCarouselItem3 = document.getElementById("bestBooksCarouselItem3");

const sortedBooksPerRate = books().sort(function (a, b) {
    let rateA = a.rating,
      rateB = b.rating;
    return rateB - rateA;
  });

const slicedSortedBooksPerRate1 = sortedBooksPerRate.slice(0, 4);
const slicedSortedBooksPerRate2 = sortedBooksPerRate.slice(4, 8);
const slicedSortedBooksPerRate3 = sortedBooksPerRate.slice(8, 12);

slicedSortedBooksPerRate1.forEach(book => {
    bestBooksCarouselItem1.innerHTML += (cartCreator(book));
})

slicedSortedBooksPerRate2.forEach(book => {
    bestBooksCarouselItem2.innerHTML += (cartCreator(book));
})

slicedSortedBooksPerRate3.forEach(book => {
    bestBooksCarouselItem3.innerHTML += (cartCreator(book));
})


// best deals section

const bestDealsCarouselItem1 = document.getElementById("bestDealsCarouselItem1");
const bestDealsCarouselItem2 = document.getElementById("bestDealsCarouselItem2");
const bestDealsCarouselItem3 = document.getElementById("bestDealsCarouselItem3");

const dealedBooks = books().filter(book => book.deal);

dealedBooks.slice(0,4).forEach(book => {
    bestDealsCarouselItem1.innerHTML += (cartCreator(book));
})

dealedBooks.slice(4,8).forEach(book => {
    bestDealsCarouselItem2.innerHTML += (cartCreator(book));
})

dealedBooks.slice(8,12).forEach(book => {
    bestDealsCarouselItem3.innerHTML += (cartCreator(book));
})


// best of philosophy section

const bestOfPhilosophyCarouselItem1 = document.getElementById("bestOfPhilosophyCarouselItem1");
const bestOfPhilosophyCarouselItem2 = document.getElementById("bestOfPhilosophyCarouselItem2");

const philosophyBooks = books().filter(book => book.categorie.includes("philosophy"));

philosophyBooks.slice(0,4).forEach(book => {
    bestOfPhilosophyCarouselItem1.innerHTML += (cartCreator(book));
})

philosophyBooks.slice(4,8).forEach(book => {
    bestOfPhilosophyCarouselItem2.innerHTML += (cartCreator(book));
})


// best of self development section

const bestSelfDevCarouselItem1 = document.getElementById("bestSelfDevCarouselItem1");
const bestSelfDevCarouselItem2 = document.getElementById("bestSelfDevCarouselItem2");
const bestSelfDevCarouselItem3 = document.getElementById("bestSelfDevCarouselItem3");

const selfDevBooks = books().filter(book => book.categorie.includes("self-dev"));

selfDevBooks.slice(0,3).forEach(book => {
    bestSelfDevCarouselItem1.innerHTML += (cartCreator(book));
})

selfDevBooks.slice(3,6).forEach(book => {
    bestSelfDevCarouselItem2.innerHTML += (cartCreator(book));
})

selfDevBooks.slice(6,9).forEach(book => {
    bestSelfDevCarouselItem3.innerHTML += (cartCreator(book));
})

// best of novels section

const bestNovelsCarouselItem1 = document.getElementById("bestNovelsCarouselItem1");
const bestNovelsCarouselItem2 = document.getElementById("bestNovelsCarouselItem2");
const bestNovelsCarouselItem3 = document.getElementById("bestNovelsCarouselItem3");

const novels = books().filter(book => book.categorie.includes("novel"));
const sortednovelsPerRate = novels.sort(function (a, b) {
    let rateA = a.rating,
      rateB = b.rating;
    return rateB - rateA;
  });

sortednovelsPerRate.slice(0,4).forEach(book => {
    bestNovelsCarouselItem1.innerHTML += (cartCreator(book));
})

sortednovelsPerRate.slice(4,8).forEach(book => {
    bestNovelsCarouselItem2.innerHTML += (cartCreator(book));
})

sortednovelsPerRate.slice(8,12).forEach(book => {
    bestNovelsCarouselItem3.innerHTML += (cartCreator(book));
})

// Get all the button elements by its class
var addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

// Add a click event listener to the button

addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Item added to cart!");
    });
});


// Go to top button 
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
