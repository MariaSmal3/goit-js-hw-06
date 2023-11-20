// Number of categories: 3
const categories = document.querySelectorAll(".item");
console.log("Number of categories: " + categories.length);

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
const titlesArray = document.querySelectorAll("h2");
titlesArray.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});
