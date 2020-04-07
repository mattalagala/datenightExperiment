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

       axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            .then(function (response) {
//This is where I left off, just realized there was drinks Category instead of just Drink Name.
//So maybe add two selections                 
                let drinkResponse = response.data.drinks
                console.log(drinkResponse, 'this is drinks by name')

                drinkResponse.forEach(function (el) {
                    let drinkName = el.strCategory
                    $('#drinkSelector').append(`<option value='${drinkName}'>${drinkName}</option>`)
                    console.log(drinkName)
                })

            })
    
    $('#drinkSelector').change(function (evt) {

        // const defaultOpt = $('#areaSelector').find('.default')
        // $('#areaSelector').val(defaultOpt.val())

        let drinkSearch = $('#drinkSelector').val()

        console.log(drinkSearch, 'This is drinkSearch')
                
        renderDrinkTitle(drinkSearch)

        function renderDrinkTitle (drink){
            
            $('#drinkTitleContainer').html('')

            $('#drinkTitleContainer').append(`
                    <div class="col-sm-12" id='genSearchTitle'>
                        <p id='searchTitle'>NICE! Here are some ${drink} to choose from!</p>
                    </div>
            `)
        
        }
    
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + drinkSearch)
            .then(function (response) {
            
            let drinks = response.data.drinks

            console.log(response.data, "this is the Response")
            console.log(drinks, "this is the DRINKS")
            renderDrinks(drinks)
            return drinks
            })

        evt.preventDefault()
    })

    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(function (response) {
            
            let catResponse = response.data.categories
            console.log(catResponse, 'this is categories')

            catResponse.forEach(function (el) {
                let categories = el.strCategory
                $('#categorySelector').append(`<option value='${categories}'>${categories}</option>`)
                console.log(el.strCategory)
            })

        })

        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list.php')
        .then(function (response) {
            
            let areaResponse = response.data.meals
            console.log(areaResponse, 'this is area')

            areaResponse.forEach(function (el) {
                let area = el.strArea
                $('#areaSelector').append(`<option value='${area}'>${area}</option>`)
                console.log(el.strArea)
            })

        })

            //Function to capture value of 'foodSearch' field
    $('#categorySelector').on('change', function (evt) {

        const defaultOpt = $('#areaSelector').find('.default')
        $('#areaSelector').val(defaultOpt.val())
       
        let categoryVal = this.value
                        
        renderMealTitle(categoryVal)

        function renderMealTitle (title){
           
            $('#mealTitleContainer').html('')

            $('#mealTitleContainer').append(`
                    <div class="col-sm-12" id='genSearchTitle'>
                        <p id='searchTitle'>Great Choice! Here are some ${title} meals to choose from!</p>
                    </div>
            `)
        
        }
        
        console.log(categoryVal, " is what I typed in to Lets Eat Search")

        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categoryVal)
        .then(function (response) {
            console.log(response, "this is RESPONNNSEEE")
        
            var meals = response.data.meals

            console.log(response.data, "this is the Response")
            // console.log(meals.length, "this is the MEALS")
            renderMeals(meals)
            
            return meals
                
        })
        evt.preventDefault()
    })

    $('#areaSelector').on('change', function (evt) {

        const defaultOpt = $('#categorySelector').find('.default')
        $('#categorySelector').val(defaultOpt.val())

        let areaSelectorVal = this.value
        
        console.log(areaSelectorVal)
                    
        renderMealTitle(areaSelectorVal)

        function renderMealTitle (title){
            
            $('#mealTitleContainer').html('')

            $('#mealTitleContainer').append(`
                    <div class="col-sm-12" id='genSearchTitle'>
                        <p id='searchTitle'>Great Choice! Here are some ${title} meals to choose from!</p>
                    </div>
            `)
        
        }
        
        console.log(areaSelectorVal, " is what I typed in to Lets Eat Search")

        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + areaSelectorVal)
            .then(function (response) {
                console.log(response, "this is RESPONNNSEEE")
            
                var meals = response.data.meals
                console.log(response.data, "this is the Response")
                renderMeals(meals)
                return meals
                
            })
        evt.preventDefault()
    })

})
    
        
                    
