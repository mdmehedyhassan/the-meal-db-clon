const latestMeals = document.getElementById("latest-meals");
const randomMeals = document.getElementById("random-meals");
const latestAPI = 'https://www.themealdb.com/api/json/v1/1/search.php?s=eg';
const randomAPI = 'https://www.themealdb.com/api/json/v1/1/search.php?s=de';

getAPIData(latestAPI, latestMeals);
getAPIData(randomAPI, randomMeals);
function getAPIData(API, latestRandomId) {
    fetch(API) //re //random
        .then(res => res.json())
        .then(data => mealsShowHandler(data.meals, latestRandomId));
}

function mealsShowHandler(meals, latestRandom) {
    // console.log(meals, latestRandom);
    meals.map(meal => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', "p-2");
        newDiv.innerHTML = `
            <div onclick="getMealsId('${meal.idMeal}')" class="box-shadow-style text-center h-100">
                <img src="${meal.strMealThumb}" alt="" />
                <h4 class="p-3">${meal.strMeal}</h4>
            </div>
        `;
        latestRandom.appendChild(newDiv);
    });
}


// search handler

const searchHandler = () => {
    document.getElementById('meals-searching').innerHTML = '';
    displayNoneBlock('meals-searching-display');
    const mealsSearching = document.getElementById('meals-searching');
    const searchInput = document.getElementById('search-input').value;
    const searchInputAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    getAPIData(searchInputAPI, mealsSearching);
};

function browseCountry(e) {
    document.getElementById('meals-searching').innerHTML = '';
    displayNoneBlock('meals-searching-display');
    const mealsSearching = document.getElementById('meals-searching');
    const countriesSearchingAPI = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.target.alt}`
    getAPIData(countriesSearchingAPI, mealsSearching);
};


function browseByName(e) {
    document.getElementById('meals-searching').innerHTML = '';
    displayNoneBlock('meals-searching-display');
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (let i = 0; i < alphabet.length; i++) {
        const element = alphabet[i];
        if (element == e.target.innerText) {
            const mealsSearching = document.getElementById('meals-searching');
            const alphabetSearchingAPI = `https://www.themealdb.com/api/json/v1/1/search.php?f=${element}`
            getAPIData(alphabetSearchingAPI, mealsSearching);
        }
    }
};

function displayNoneBlock(displayId){
    document.getElementById('sorry-display').style.display = 'none';
    document.getElementById('home-section-display').style.display = 'none';
    document.getElementById('api-section-display').style.display = 'none';
    document.getElementById('categories-display').style.display = 'none';
    document.getElementById('countries-display').style.display = 'none';
    document.getElementById('ingredients-display').style.display = 'none';
    document.getElementById('meals-searching-display').style.display = 'none';
    document.getElementById('meal-details-display').style.display = 'none';

    document.getElementById(displayId).style.display = 'block';
};

// meal id check and show 
function getMealsId(id) {
    // console.log(id);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => mealDetails(data.meals[0]))
}

function mealDetails(meal) {
    displayNoneBlock('meal-details-display');
    // console.log(meal)
    const mealDetails = document.getElementById('meal-details');
    mealDetails.innerHTML = `
        <div class="col-md-4 text-center">
            <img src="${meal.strMealThumb} "/>
            <h2 class="m-3 text-info">${meal.strMeal}</h2>
            <h5><span style="font-size:12px">Category:</span> <span onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal.strCategory}')" class="box-shadow-style p-1">${meal.strCategory}</span> </h5>
            <h5 class="mt-3"><span style="font-size:12px">Made by:</span> <span onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?a=${meal.strArea}')" class="box-shadow-style p-1">${meal.strArea}</span> </h5>
            <p style="text-align:justify">${meal.strInstructions}</p>
        </div>
        <div class="col-md-8">
            <div id="div-ingredient" class="row">
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient1}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient1}.png" />
                        <h5>${meal.strMeasure1}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient2}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient2}.png" />
                        <h5>${meal.strMeasure2}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient3}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient3}.png" />
                        <h5>${meal.strMeasure3}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient4}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient4}.png" />
                        <h5>${meal.strMeasure4}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient5}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient5}.png" />
                        <h5>${meal.strMeasure5}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient6}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient6}.png" />
                        <h5>${meal.strMeasure6}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient7}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient7}.png" />
                        <h5>${meal.strMeasure7}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient8}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient8}.png" />
                        <h5>${meal.strMeasure8}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient9}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient9}.png" />
                        <h5>${meal.strMeasure9}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient10}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient10}.png" />
                        <h5>${meal.strMeasure10}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient11}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient11}.png" />
                        <h5>${meal.strMeasure11}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient12}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient12}.png" />
                        <h5>${meal.strMeasure12}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient13}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient13}.png" />
                        <h5>${meal.strMeasure13}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient14}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient14}.png" />
                        <h5>${meal.strMeasure14}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient15}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient15}.png" />
                        <h5>${meal.strMeasure15}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient16}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient16}.png" />
                        <h5>${meal.strMeasure16}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient17}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient17}.png" />
                        <h5>${meal.strMeasure17}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient18}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient18}.png" />
                        <h5>${meal.strMeasure18}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient19}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient19}.png" />
                        <h5>${meal.strMeasure19}</h5>
                    </div>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal.strIngredient20}')" class="box-shadow-style">
                        <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient20}.png" />
                        <h5>${meal.strMeasure20}</h5>
                    </div>
                </div>
                
        </div> 
    `;
}

function allCategories(){
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => showAllCategories(data.categories))
};

function showAllCategories(categories){
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = '';
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        console.log(category)
        const newDiv = document.createElement('div');
        newDiv.classList.add("col-lg-3", "col-md-4", 'col-6');
        newDiv.innerHTML = `
            <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}')" class="m-2 p-2 text-center box-shadow-style">
                <img src="${category.strCategoryThumb}" />
                <h5>${category.strCategory}</h5>
            </div>
        `
        categoriesDiv.appendChild(newDiv);
    };
    displayNoneBlock('categories-display');
}

function allCountries(){
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then(res => res.json())
    .then(data => showAllCountries(data.meals))
}

function showAllCountries(countries){
    const countriesDiv = document.getElementById('countries');
    countriesDiv.innerHTML = '';
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        console.log(country)
        const newDiv = document.createElement('div');
        newDiv.classList.add("col-lg-3", "col-md-4", 'col-6');
        newDiv.innerHTML = `
            <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.strArea}')" class="m-2 p-2 text-center box-shadow-style">
                <img src="images/country/${country.strArea}.png" />
                <h5>${country.strArea}</h5>
            </div>
        `
        countriesDiv.appendChild(newDiv);
    };
    displayNoneBlock('countries-display');
}

function allIngredients(){
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then(res => res.json())
    .then(data => showAllIngredients(data.meals))
}

function showAllIngredients(ingredients){
    const ingredientsDiv = document.getElementById('ingredients');
    ingredientsDiv.innerHTML ="";
    for (let i = 0; i < ingredients.length; i++) {
        const ingredient = ingredients[i];
        console.log(ingredient)
        const newDiv = document.createElement('div');
        newDiv.classList.add("col-lg-2", "col-md-3", 'col-sm-4', 'col-6');
        newDiv.innerHTML = `
            <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.strIngredient}')" class="m-2 p-2 text-center box-shadow-style">
                <img src="https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png" />
                <h5>${ingredient.strIngredient}</h5>
            </div>
        `
        ingredientsDiv.appendChild(newDiv);
    };
    displayNoneBlock('ingredients-display');
}



function categoryCountryIngredientToSearch(category) {
    document.getElementById('meals-searching').innerHTML = '';
    displayNoneBlock('meals-searching-display');
    const mealsSearching = document.getElementById('meals-searching');
    const categoryToSearchAPI = category;
    getAPIData(categoryToSearchAPI, mealsSearching);
};

const popularCategoryArray =  [
    {
        img: "https://www.themealdb.com/images/ingredients/Chicken.png",
        name: "Chicken"
    },
    {
        img: "https://www.themealdb.com/images/ingredients/Lamb.png",
        name: "Lamb"
    },
    {
        img: "https://www.themealdb.com/images/ingredients/Beef.png",
        name: "Beef"
    },
    {
        img: "https://www.themealdb.com/images/ingredients/Pork.png",
        name: "Pork"
    }
];

const popularCategory = document.getElementById('popular-category');
for (let i = 0; i < popularCategoryArray.length; i++) {
    const element = popularCategoryArray[i];
    const newDiv = document.createElement('div');
    newDiv.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'p-2')
    newDiv.innerHTML =`
        <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?c=${element.name}')" class="box-shadow-style">
            <img src="${element.img}" alt="">
            <h3 class="text-center">${element.name}</h3>
        </div>
    `
    popularCategory.appendChild(newDiv);
}

const popularIngredientsArray =  [
    {
        img: "https://www.themealdb.com/images/ingredients/White Fish.png",
        name: "White Fish"
    },
    {
        img: "https://www.themealdb.com/images/ingredients/Salmon.png",
        name: "Salmon"
    },
    {
        img: "https://www.themealdb.com/images/ingredients/Fresh Basil.png",
        name: "Fresh Basil"
    },
    {
        img: "https://www.themealdb.com/images/ingredients/Tomatoes.png",
        name: "Tomatoes"
    }
];

const ingredientsCategory = document.getElementById('popular-ingredients');
for (let i = 0; i < popularIngredientsArray.length; i++) {
    const element = popularIngredientsArray[i];
    const newDiv = document.createElement('div');
    newDiv.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'p-2')
    newDiv.innerHTML =`
        <div onclick="categoryCountryIngredientToSearch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${element.name}')" class="box-shadow-style">
            <img src="${element.img}" alt="">
            <h3 class="text-center">${element.name}</h3>
        </div>
    `
    ingredientsCategory.appendChild(newDiv);
}
