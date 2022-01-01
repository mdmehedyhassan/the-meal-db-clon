const latestMeals = document.getElementById("latest-meals");
const randomMeals = document.getElementById("random-meals");
const latestAPI = 'https://www.themealdb.com/api/json/v1/1/search.php?s=eg';
const randomAPI = 'https://www.themealdb.com/api/json/v1/1/search.php?s=de';

getAPIData(latestAPI, latestMeals);
getAPIData(randomAPI, randomMeals);
function getAPIData(API, latestRandomId) {
    fetch(API) //re //random
    .then(res => res.json())
    .then(data => latestRandomMealsHandler(data.meals, latestRandomId));
}

function latestRandomMealsHandler(meals, latestRandom) {
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

function getMealsId(id) {
    // console.log(id);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => mealDetails(data.meals[0]))
}

function mealDetails(meal) {
    console.log(meal)
    const mealDetails = document.getElementById('meal-details');
    const getTags = meal.strTags + ', all tags';
    const tagsName = getTags.split(',');
    mealDetails.innerHTML = `
        <div class="col-md-4 text-center">
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb} "/>
            <div id="tags-name-div" class="d-flex justify-content-center mt-3"> 
            
            </div>
        </div>
        <div class="col-md-8">
            <div id="div-ingredient" class="row">
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient1}.png" />
                    <h5>${meal.strMeasure1}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient2}.png" />
                    <h5>${meal.strMeasure2}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient3}.png" />
                    <h5>${meal.strMeasure3}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient4}.png" />
                    <h5>${meal.strMeasure4}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient5}.png" />
                    <h5>${meal.strMeasure5}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient6}.png" />
                    <h5>${meal.strMeasure6}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient7}.png" />
                    <h5>${meal.strMeasure7}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient8}.png" />
                    <h5>${meal.strMeasure8}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient9}.png" />
                    <h5>${meal.strMeasure9}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient10}.png" />
                    <h5>${meal.strMeasure10}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient11}.png" />
                    <h5>${meal.strMeasure11}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient12}.png" />
                    <h5>${meal.strMeasure12}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient13}.png" />
                    <h5>${meal.strMeasure13}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient14}.png" />
                    <h5>${meal.strMeasure14}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient15}.png" />
                    <h5>${meal.strMeasure15}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient16}.png" />
                    <h5>${meal.strMeasure16}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient17}.png" />
                    <h5>${meal.strMeasure17}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient18}.png" />
                    <h5>${meal.strMeasure18}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient19}.png" />
                    <h5>${meal.strMeasure19}</h5>
                </div>
                <div class="col-md-4 col-6 text-center">
                    <img src="https://www.themealdb.com/images/ingredients/${meal.strIngredient20}.png" alt='' />
                    <h5>${meal.strMeasure20}</h5>
                </div>
        </div> 
    `;
    for (let i = 0; i < tagsName.length; i++) {
        const element = tagsName[i];
        const newSpanTag = document.createElement('p');
        if (element != 'null') {
            newSpanTag.innerHTML = `
            <span class="box-shadow-style">${element}</span>
        `
        }
        document.getElementById('tags-name-div').appendChild(newSpanTag);
    }
}
