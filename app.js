const loadData = (searchMeal)=>{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMeal(data.meals));
}

//display meals 
 
const displayMeal = meals =>{
  console.log(meals)
  //container section 
  const mealcontainer = document.getElementById("meal-container");
  mealcontainer.innerText =""
  // for each every element set 
  meals.forEach(meal =>{
    // create div 
    console.log(meal)
    // create the div element 
    const mealDiv = document.createElement("div")
    mealDiv.classList.add("col")
    // set the div  element 
    mealDiv.innerHTML = `
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions}</p>
    </div> 
  </div>
    `
    mealcontainer.appendChild(mealDiv)
  })

}
 // search meal food item using input buttton 

 const searchMeal = () =>{
    const searchInput = document.getElementById("searchInput").value;
    loadData(searchInput)
 }




loadData('rice')