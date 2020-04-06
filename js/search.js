$(document).ready(function (evt) {

    console.log('Document Loaded')
    
    

    // Renders meals and clears previous meals
    function renderMeals (items) {

                console.log(items, "renderMeals funct started")
                
                $('#mealContainer').html('')
               
                
                items.map( function buildSingleMeal (currentMeal) { 
            
                $('#mealContainer').append(`

                        <div class="col-sm-3" id='container'>
                            <div class="card" >
                                <div class="card-body">
                                    <img class="card-img-top" src="${currentMeal.strMealThumb}" alt="Card image cap">
                                    <h5 class="card-title">${currentMeal.strMeal}</h5>
                                    <p class="card-text">${currentMeal.idMeal}</p>
                                <div>
                            </div>
                        </div>
                    `)

                console.log(currentMeal)
                
                })
    }

    function renderDrinks (drinks) {

                console.log(drinks, "renderMeals funct started")
                
                $('#drinkContainer').html('')
                
                drinks.map( function buildSingleDrink (currentDrink) { 
                
                    $('#drinkContainer').append(`
                        
                        <div class="col-sm-3" id='container'>
                            <div class="card" >
                                <div class="card-body">
                                    <img class="card-img-top" src="${currentDrink.strDrinkThumb}" alt="Card image cap">
                                    <h5 class="card-title">${currentDrink.strDrink}</h5>
                                    <p class="card-text">${currentDrink.idDrink}</p>
                                <div>
                            </div>
                        </div>
                    `)

                console.log(currentDrink)
                    
                })

            }
    

    $('#drinkSearchForm').on('submit', function (evt) {

        let drinkSearch = ($('#drinkSearch').val()).toUpperCase()
        
        renderDrinkTitle(drinkSearch)

        function renderDrinkTitle (drink){
            console.log(renderDrinkTitle, 'FIRED')
            $('#drinkTitleContainer').html('')

            $('#drinkTitleContainer').append(`
                    <div class="col-sm-12" id='genSearchTitle'>
                        <p id='searchTitle'>NICE! Here are some ${drink} to choose from!</p>
                    </div>
            `)
        
        }
    
        console.log(drinkSearch, " is what I typed in to Lets Drink Search")

        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + drinkSearch)
        .then(function (response) {
        
        let drinks = response.data.drinks

        console.log(response.data, "this is the Response")
        console.log(drinks, "this is the DRINKS")
        renderDrinks(drinks)
        return drinks
        // var results = response.data.Search
        // console.log('here is the response from the OMDB API:')
        // console.log(results)
        // renderMovies(results)
        // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        // return results


        })
        evt.preventDefault()
    })

            //Function to capture value of 'foodSearch' field
    $('#foodSearchForm').on('submit', function (evt) {

        let foodSearch = ($('#foodSearch').val()).toUpperCase()
        
        renderMealTitle(foodSearch)

        function renderMealTitle (title){
            console.log(renderMealTitle, 'FIRED')
            $('#mealTitleContainer').html('')

            $('#mealTitleContainer').append(`
                    <div class="col-sm-12" id='genSearchTitle'>
                        <p id='searchTitle'>Great Choice! Here are some ${title} meals to choose from!</p>
                    </div>
            `)
        
        }
        
        console.log(foodSearch, " is what I typed in to Lets Eat Search")

        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + foodSearch)
        .then(function (response) {
        
        
        var meals = response.data.meals

        console.log(response.data, "this is the Response")
        console.log(meals.length, "this is the MEALS")
        renderMeals(meals)
        
        
        return meals
        // var results = response.data.Search
        // console.log('here is the response from the OMDB API:')
        // console.log(results)
        // renderMovies(results)
        // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        // return results
        
        })
        evt.preventDefault()
    })

            //  $('#drinkSearchForm').on('submit', function (evt) {

            //     let drinkSearch = $('#drinkSearch').val()
            
            //     console.log(drinkSearch, " is what I typed in to Lets Drink Search")

            //     axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + drinkSearch)
            //     .then(function (response) {
                
            //     var drinks = response.data.drinks

            //     console.log(response.data, "this is the Response")
            //     console.log(drinks, "this is the DRINKS")
            //     renderDrinks(drinks)
            //     return drinks
            //     // var results = response.data.Search
            //     // console.log('here is the response from the OMDB API:')
            //     // console.log(results)
            //     // renderMovies(results)
            //     // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            //     // return results


            //     })
            //     evt.preventDefault()
            // })

                    

            // axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + foodSearchString)
            // .then(function (response) {
            // console.log(response.data, "Category Response")
            // })
        
            // axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + foodSearch)
            // .then(function (response) {

            //     console.log(response.data, "this is the Response")
            //     // var results = response.data.Search
            //     // console.log('here is the response from the OMDB API:')
            //     // console.log(results)
            //     // renderMovies(results)
            //     // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            //     // return results
            // })
            
    
    
    
})
    
        
                    
