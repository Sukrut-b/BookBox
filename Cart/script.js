
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];
var selectedBox = document.getElementById("selectedBox");
var booksAdded = document.getElementById("booksAdded");
var progressBar = document.getElementById("progressBar");
var quantityFields = document.getElementsByClassName("qty1");
var quantityFields2 = document.getElementsByClassName("qty2");
var quantityFields3 = document.getElementsByClassName("qty3");

var currentValue1 = 0;
var currentValue2 = 0;
var currentValue3 = 0;
var maxQuantity = 5; // Maximum quantity allowed


// Open modal when "+" button is clicked
btn.onclick = function() {
  modal.style.display = "block";
}

// Close modal when close button is clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close modal when user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Update progress bar width based on quantity
function updateProgressBar(currentValue, max) {
  var percentage = (currentValue / max) * 100;
  
  if (percentage < 100) {
    progressBar.style.width = percentage + "%";
  }

  if (percentage >= 100) {
    alert("Progress bar is full. Add a new box!");
  }
  progressValue.textContent = percentage + "%"; // Update progress value

}

// Quantity buttons
var minusButtons = document.getElementsByClassName("minus");
var plusButtons = document.getElementsByClassName("plus");

for (var i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", function() {
    var quantityField = this.nextElementSibling;
    var currentValue = parseInt(quantityField.textContent);
    if (currentValue > 0) {
      quantityField.textContent = currentValue - 1;
      // updateProgressBar(currentValue - 1, 5); // Update progress bar
    }
  });
}

for (var i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function() {
    var quantityField = this.previousElementSibling;
    var currentValue = parseInt(quantityField.textContent);
    if (currentValue < 5) { // Assuming max quantity is 5
      quantityField.textContent = currentValue + 1;
      // updateProgressBar(currentValue + 1, 5); // Update progress bar
    }
  });
}

// Handle "CONTINUE" button click
var continueBtn = document.getElementById("continueBtn");

continueBtn.onclick = function() {
  modal.style.display = "none";
}

continueBtn.addEventListener("click", function() {
  var price = 0;
  var selectedQty1 = Array.from(quantityFields).find(function(field) {
    currentValue1++;
    return field.textContent > 0;
  });
  
  var selectedQty2 = Array.from(quantityFields2).find(function(field) {
    currentValue2++;

    return field.textContent > 0;
  });

  var selectedQty3 = Array.from(quantityFields3).find(function(field) {
    currentValue3++;

    return field.textContent > 0;
  });
  var total = JSON.parse(localStorage.getItem("totalPrice"));


  if (selectedQty1) {
    selectedBox.textContent = "Odysseus Box " + " ₹ " + total;
    price = 1199;
  } else if (selectedQty2) {
    selectedBox.textContent = "Perseus Box " + " ₹ " + total;
    price = 1999;
  } else if (selectedQty3) {
    selectedBox.textContent = "Hercules Box " + " ₹ " + total;
    price = 2999;
  } else {
    selectedBox.textContent = "No box selected";
  }


  let boxLimits = {};
  if (selectedQty1) {
    boxLimits = 5;
  }
  if (selectedQty2) {
    boxLimits = 10;
  }
  if (selectedQty3) {
    boxLimits = 20;
  }

  booksAdded.textContent = "1 book added in your box.";
  modal.style.display = "none";

  localStorage.setItem("boxLimits", JSON.stringify(boxLimits));

  const priceIndex = selectedBox.textContent.indexOf("₹"); // Find the index of the currency symbol
const priceString = selectedBox.textContent.substring(priceIndex + 1).trim(); // Extract the price string and trim any extra whitespace
const pricet = parseFloat(priceString);
var qty1Element = document.querySelector(".qty1").innerText;
var qty2Element = document.querySelector(".qty2").innerText;
var qty3Element = document.querySelector(".qty3").innerText;

// Print the values of qty1, qty2, and qty3
console.log("Qty1:", qty1Element);
console.log("Qty2:", qty2Element);
console.log("Qty3:", qty3Element);
// Store the quantities array in localStorage
var quantities= [qty1Element, qty2Element, qty3Element] 
localStorage.setItem("qty", JSON.stringify(quantities));




var quantitiesList = JSON.parse(localStorage.getItem("qty"));

// Calculate the total price based on the non-zero quantity
var totalPrice = 0;
quantitiesList.forEach((qty, index) => {
  if (qty !== 0) {
    // Assuming prices are stored in an array where index 0 corresponds to qty1, index 1 to qty2, and index 2 to qty3
    var prices = [1199, 1999, 2999];
    totalPrice += qty * prices[index];
  }
}); 
localStorage.setItem("totalPrice", JSON.stringify(totalPrice));

 var temp=  localStorage.getItem("booksAdded");



  localStorage.setItem("progress", JSON.stringify((temp / boxLimits) * 100));

  location.reload();
  

});

continueBtn.onclick = function() {
  modal.style.display = "none";
}



//Cart update


// function updateProgressBar1() {
//   const storedProgress = parseInt(localStorage.getItem("progress")) || 0; // Retrieve stored progress or default to 0
//   const incrementAmount = 20; // Increment amount for each update
//   const newProgress = storedProgress + incrementAmount; // Calculate new progress value

//   if (newProgress <= 100) { // Ensure progress doesn't exceed 100%
//     progressBar.style.width = newProgress + "%"; // Update progress bar width
//     progressValue.textContent = newProgress + "%"; // Update progress value text

//     // Store the updated progress in localStorage
//     localStorage.setItem("progress", newProgress);
//   } else {
//     alert("Progress bar is full. Add a new box!"); // Notify if progress reaches 100%
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  

});

function updateProgressBar1() {
  const storedProgress = parseInt(localStorage.getItem("progress")) || 0; // Retrieve stored progress or default to 0
  const boxLimit = parseInt(localStorage.getItem("boxLimits")) || 0 ; 
  console.log(boxLimit)// Retrieve box limit from localStorage or default to 5
  const incrementAmount = (100 / boxLimit); // Calculate the increment amount based on box limit
  const newProgress = storedProgress + incrementAmount; // Calculate new progress value

  if (newProgress <= 100) { // Ensure progress doesn't exceed 100%
    progressBar.style.width = newProgress + "%"; // Update progress bar width
    progressValue.textContent = newProgress + "%"; // Update progress value text

    // Store the updated progress in localStorage
    localStorage.setItem("progress", newProgress);
  } else {
    alert("Progress bar is full. Add a new box!"); // Notify if progress reaches 100%
  }
  
}


const productItemsList = document.getElementById("productItemsList");

let parsedData = JSON.parse(localStorage.getItem("data")) || [];

if (parsedData) {
  parsedData.forEach((product, number) => {
    const cartCard = `<tr>
        <td scope="row">
          <div class="d-flex align-items-center">
            <img
              src="${product.cover}"
              class="img-fluid rounded-3"
              style="width: 120px"
              alt="Book"
            />
            <div class="flex-column ms-4">
              <p class="mb-2 d-none d-sm-inline-block">${product.name}</p>
            </div>
          </div>
        </td>
        </td>
        <td id="myAdderTd" class="align-middle">
        <button id="adderBtn" type="button" class="btn border-0 ms-4 mt-1 btn-outline-danger btn-sm" data-mdb-toggle="tooltip"
        title="Duplicate item">
        <i class="bi bi-plus-lg"></i>
        </button>
      </td>
          <td id="myTd" class="align-middle">
          <button id="deleterBtn" type="button" class="btn ms-4 mt-1 btn-outline-danger btn-sm" data-mdb-toggle="tooltip"
          title="Remove item">
          <i class="bi bi-trash"></i>
        <div class="d-none">${product.value}</div>
          </button>
        </td>
        <td class="align-middle"><button class="addToBoxBtn ">Add to box</button></td>
        </tr>
        `;


          // <td class="align-middle">
        // <strike class="text-secondary">${product.lastprice || ""}</strike>
        // <p class="mb-0" style="font-weight: 500">$${product.price}</p>
        //   </td>
    productItemsList.innerHTML += cartCard;

    const deleterBtn = document.querySelectorAll("#deleterBtn");
    deleterBtn.forEach((el) => {
      el.addEventListener("click", () => {
        const elementValue =
          el.parentElement.parentElement.children[2].children[0].children[1].innerHTML;
        const filtredElementByValue = parsedData.filter(
          (item) => item.value != elementValue
        );
        localStorage.setItem("data", JSON.stringify(filtredElementByValue));
        location.reload();
      });
    });

    const adderBtn = document.querySelectorAll("#adderBtn");
    adderBtn.forEach((el) => {
      el.addEventListener("click", () => {
        let data = {
          cover:
            el.parentElement.parentElement.children[0].children[0].children[0]
              .src,
          name: el.parentElement.parentElement.children[0].children[0]
            .children[1].innerText,

          price:
            el.parentElement.parentElement.children[2].children[1].innerText.slice(
              1
            ),
          value: Math.random() * 10e60,

          lastprice: (() => {
            if (el.parentElement.parentElement.innerText) {
              return el.parentElement.parentElement.children[2].children[0]
                .innerText;
            }
          })(),
        };
        console.log(data.value);
        parsedData.push(data);
        localStorage.setItem("data", JSON.stringify(parsedData));
        location.reload();
      });
    });

    const addToBoxBtns = document.querySelectorAll('.addToBoxBtn');
    addToBoxBtns.forEach((el) => {
      el.addEventListener("click", () => {
        const elementValue =
          el.parentElement.parentElement.children[2].children[0].children[1].innerHTML;
        const filtredElementByValue = parsedData.filter(
          (item) => item.value != elementValue
        );
        

        localStorage.setItem("data", JSON.stringify(filtredElementByValue));
        updateProgressBar1(); // Update progress bar
        const storedProgress = localStorage.getItem("progress");

        const booksSelected = Math.floor(storedProgress / 10); // Calculate the number of books selected
        localStorage.setItem("booksAdded", booksSelected);
      
        booksAdded.textContent = `${booksSelected} book(s) added in your box.`;
        location.reload();
      });
    });


    document.addEventListener("DOMContentLoaded", () => {
      const storedProgress = localStorage.getItem("progress");
      if (storedProgress) {
        progressBar.style.width = storedProgress + "%"; // Update progress bar
        progressValue.textContent = storedProgress + "%"; // Update progress value
      }
     
    });

  });
}

// Add event listener for "load" event after reloading the page
window.addEventListener("load", () => {
  var te=  localStorage.getItem("boxLimits" );
  if(te=="" || te==null){
    localStorage.setItem('progress', JSON.stringify(0));
  }

  updateProgressBarFromLocalStorage(); // Update progress bar based on stored progress
  setBoxLimitMessage();
  const storedBooksAdded = localStorage.getItem("booksAdded"); // Retrieve booksAdded value from localStorage
  if (storedBooksAdded) {
    booksAdded.textContent = storedBooksAdded + " books added to box"; // Update booksAdded message if a value is found in localStorage
  }
  var selectedBox = document.getElementById("selectedBox");
  console.log(selectedBox.innerText)
  var boxImage = document.getElementById("boxImage");
  var filledBoxImage1 = document.getElementById("filledBoxImage1");
  var filledBoxImage2 = document.getElementById("filledBoxImage2");
  var filledBoxImage3 = document.getElementById("filledBoxImage3");


  if (selectedBox.innerText.includes("No box selected")) {
    localStorage.setItem('progress', 0);
    boxImage.style.display = "inline"; // Hide the empty box image
    filledBoxImage1.style.display = "none"; // Show the filled box image
    filledBoxImage2.style.display = "none"; // Show the filled box image

    filledBoxImage3.style.display = "none"; // Show the filled box image

  }else if(selectedBox.innerText.includes("Odysseus Box")){
    boxImage.style.display = "none"; // Hide the empty box image
    filledBoxImage1.style.display = "inline"; // Show the filled box image
    filledBoxImage2.style.display = "none"; // Show the filled box image

    filledBoxImage3.style.display = "none"; // Show the filled box image

  }
  else if(selectedBox.innerText.includes("Perseus Box")){
    boxImage.style.display = "none"; // Hide the empty box image
    filledBoxImage1.style.display = "none"; // Show the filled box image
    filledBoxImage2.style.display = "inline"; // Show the filled box image

    filledBoxImage3.style.display = "none"; // Show the filled box image

  }
  else if(selectedBox.innerText.includes("Hercules Box")){
    boxImage.style.display = "none"; // Hide the empty box image
    filledBoxImage1.style.display = "none"; // Show the filled box image
    filledBoxImage2.style.display = "none"; // Show the filled box image

    filledBoxImage3.style.display = "inline"; // Show the filled box image

  }
  else{
    boxImage.style.display = "none"; // Hide the empty box image
    filledBoxImage1.style.display = "none"; // Show the filled box image
    filledBoxImage2.style.display = "none"; // Show the filled box image

    filledBoxImage3.style.display = "inline"; // Show the filled box image
  }
});



function setBoxLimitMessage() {
  var total = JSON.parse(localStorage.getItem("totalPrice"));

  const boxLimits = JSON.parse(localStorage.getItem("boxLimits")) || 0;
  if(boxLimits == 0){
    selectedBox.textContent = "No box selected";
  }else if(boxLimits==5){
    selectedBox.textContent = "Odysseus Box " + " ₹ " + total ;

  }
  else if(boxLimits==10){
    selectedBox.textContent = "Perseus Box " + " ₹ " + total ;

  }
  else if(boxLimits==20){
    selectedBox.textContent = "Hercules Box " + " ₹ " + total ;

  }
 
}



function updateProgressBarFromLocalStorage() {
  const storedProgress = localStorage.getItem("progress");
  if (storedProgress) {
    progressBar.style.width = storedProgress + "%"; // Update progress bar width
    progressValue.textContent = storedProgress + "%"; // Update progress value text
  }
}

// proceed to pay modal section

const modalBody = document.querySelector(".modal-body");
let totalPrice = 0;

parsedData.forEach((product) => {
  const productBody1 = `<div class="d-flex justify-content-between align-items-center py-3 pe-4">
  <div class="">
    <div class="d-flex align-items-center">
      <img
        src="${product.cover}"
        class="img-fluid rounded-3"
        style="width: 120px"
        alt="Book"
      />
      <div class="flex-column ms-4">
        <p class="mb-2 d-none d-sm-inline fs-10">${product.name}</p>
      </div>
    </div>
  </div>
  <div class="align-middle">
  </div>
  <div class="align-middle">
  <strike class="text-secondary">${product.lastprice || ""}</strike>
  <p class="mb-0" style="font-weight: 500">$${product.price}</p>
    </div>
    </div>`;
  modalBody.innerHTML += productBody1;
  totalPrice += Math.round(Number(product.price) * 100) / 100;
});

const modalBody2 = document.querySelector(".modal-body-2");

function modalBody2Creator() {

  
  totalPrice = localStorage.getItem('totalPrice')
  const productBody2 = ` <div class="mb-5">
<div class="form-floating">
  <input type="number" class="form-control border border-danger border-opacity-25" id="form3Examplea2" placeholder="v">
  <label class="form-label" for="form3Examplea2">Enter your discount code (for e.g. Enter a number(1,70))</label>
</div>
</div>
<div class="d-flex justify-content-between">
<h5 class="text-uppercase">Total price : </h5>
<h5>₹${totalPrice}</h5>
</div>`;

  modalBody2.innerHTML = productBody2;
}

modalBody2Creator();

// discount code process


const formControlDiscount = document.querySelector(".form-control");

formControlDiscount.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const discountNum = formControlDiscount.value;
    if (discountNum <= 70 && discountNum >= 1) {
      setTimeout(() => {
        totalPrice -= (totalPrice * discountNum) / 100;
        modalBody2Creator();
      }, 500);
    }
  }
});
