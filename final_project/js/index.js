const baseURL = "https://api.edamam.com/api/recipes/v2?type=public"
var show = true;
  
function showCheckboxes() {
    var checkboxes = 
        document.getElementById("checkBoxes");

    if (show) {
        checkboxes.style.display = "block";
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}

function removeDuplicates(arr) {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
}

document.getElementById('anti_inflam').value = ["sausage", "bacon", "pepperoni", "salami", 
"rice", "white pasta", "shortening",
"lard", "margarine", "sunflower oil", "vegetable oil", "corn syrup", "avocado oil"]

/* document.getElementById('low_fodmap').value = ["artichoke", "asparagus", "cauliflower", "garlic", "peas", 
"mushrooms", "onion", "sugar snap peas", "apples", "apple juice", "cherries", "dried fruit", "mango",
  "nectarines", "peaches", "pears", "plums", "watermelon", "dairy", "soy", "legumes",
  "wheat bread", "rye bread", "barley bread", "corn syrup", "honey", "cashews", "pistachios",
"beans", "lentils", "apricot", "blackberries", "dates", "grapefruit", "leeks", "shallots", "rum"] */

document.getElementById('nightshade').value = ["banana peppers", "datil", "eggplant", "hot peppers",
"chili peppers", "jalapenos", "habaneros", "red pepper", "cayenne pepper", "paprika", "pimentos", "potatoes",
"sweet peppers", "yellow bell peppers", "red bell peppers","green bell peppers","orange bell peppers", "roasted red bell pepper", "thai peppers", "tomatillos", "garden huckleberry", "goji berries", "wolfberries", "gooseberries", 
"ground cherries", "cape gooseberries", "jerusalem cherries", "pepino", "sunberry", "wonderberries", "tamarillo", "tomatoes"]

/* document.getElementById('low_hist').value = ["cheese", "yogurt", "sour cream", "buttermilk", "kefir", "sauerkraut",
"kimchi", "pickles", "kombucha", "sausage", "salami", "wine", "beer", "champagne", "alcohol", "tempeh", "miso", "soy sauce", 
"natto", "sourdough bread", "tomatoes", "eggplant", "spinach", "sardines", "canned tuna", "canned salmon", "vinegar", 
"ketchup", "legumes", "bacon"] */

/* document.getElementById('paleo').value = ["legumes", "beans", "lentils", "peanuts", "peas", "dairy", "sugar", "salt", "potatoes", "bread", 
"rice", "pasta", "whole grains", "alcohol", "coffee", "vegetable oil", "canola oil", "sunflower oil", "gluten"]
 */
document.getElementById('dairy').value = ["dairy-free"]
document.getElementById('egg').value = ["egg-free"]
document.getElementById('gluten').value = ["gluten-free"]
document.getElementById('peanut').value = ["peanut-free"]
document.getElementById('shellfish').value = ["shellfish-free"]
document.getElementById('sesame').value = ["sesame-free"]
document.getElementById('soy').value = ["soy-free"]
document.getElementById('sulfite').value = ["sulfite-free"]
document.getElementById('tree_nut').value = ["tree-nut-free"]
document.getElementById('vegetarian').value = ["vegetarian"];
document.getElementById('vegan').value = ["vegan"];
document.getElementById('wheat').value = ["wheat-free"];
document.getElementById('low_fodmap').value = ["fodmap-free"];
document.getElementById('DASH').value = ["DASH"];
document.getElementById('low_pot').value = ["low-potassium"];
document.getElementById('low_sugar').value = ["low-sugar"];
document.getElementById('mediterranean').value = ["Mediterranean"];
document.getElementById('keto').value = ["keto-friendly"];
document.getElementById('paleo').value = ["paleo"];
document.getElementById('pescatarian').value = ["pescatarian"];


//const allergens = ["dairy", "egg", "eggs", "gluten", "peanut", "seafood", "sesame", "soy", "sulfite", "tree nut", "wheat"];
//const spec_diets = ["pescatarian", "vegetarian", "vegan", "lacto_veg", "ovo_veg"];

const health_allergens = ["dairy-free", "DASH", "egg-free", "fodmap-free", "gluten-free", "keto-friendly", 
"kidney-friendly", "kosher", "low-potassium", "low-sugar", "Mediterranean", "paleo", "peanut-free", "pescatarian", 
"sesame-free", "shellfish-free", "soy-free", "sulfite-free", "tree-nut-free", "vegan", "vegetarian", "wheat-free"];

get_sep_lists = function(){
  chose_health = [];
  let text = $('#user_input').val();
  let text_exclude = text.split(',');
  console.log(text_exclude)
  chose_health_print = [];
  var check_exclude = [];
  if (document.querySelector("#anti_inflam").checked){
    chose_health.push("low-sugar");
    chose_health_print.push("anti-inflammatory");
  }
        $.each($('input[type="checkbox"]:checked'), function(){ 
          current_val = $(this).val()
          current_val_split = current_val.split(",")  
          check_exclude = check_exclude.concat(current_val_split);
        });

  all_exclude_0 = check_exclude.concat(text_exclude);
  all_exclude = removeDuplicates(all_exclude_0);
  all_exclude = all_exclude.filter(e =>  e);
  console.log(all_exclude)

  for (item of all_exclude){
    if (health_allergens.includes(item)){
      chose_health.push(item);
      chose_health_print.push(item);
      
    }
    else{
      continue;
    }
  }
/*   if(chose_health != [""]){
    chose_health.shift();
  } */
  chose_health = chose_health.filter(e =>  e);
  chose_health_print = chose_health_print.filter(e =>  e);
  all_exclude = all_exclude.filter( function( el ) {
    return !chose_health.includes( el );
  } );

  ingreds_print = all_exclude;
  ingreds_print = ingreds_print.toString();
  ingreds_print = ingreds_print.replace(/,/g, ", ");


  chose_health_print_0 = chose_health_print;
  chose_health_print_0 = chose_health_print_0.toString();
  chose_health_print_0 = chose_health_print_0.replace(/,/g, ", ");
  
  //document.body.append("Excluded Ingredients: " + " " + all_exclude + ".  " + "Selected Diets: " + " " + chose_health);
  document.querySelector('#restrict').innerHTML = "<strong> Excluded Ingredients: </strong>" + " " + ingreds_print + "<br> <br>" + "<strong> Selected Diets: </strong>" + " " + chose_health_print_0;
  sep_groups = [all_exclude, chose_health];
  console.log(chose_health)
  //return(sep_groups);
}

for_api = function(){
  console.log(sep_groups)
  //let search_term = $('#search_term').val();
  //console.log(search_term);
  document.querySelector('#recipes').innerHTML = "";
    console.log("about to fetch!");
    current_term = "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=55761331&app_key=543aa3893099e2958b51ec7a135202fd&random=true"
    let recipe_time = $('#recipe_time').val();
    if (recipe_time != ""){
      current_term += "&time=" + recipe_time;
    }
    
    for (item of chose_health){
      if (item != ""){
        current_term += "&health=" + item
      }
      
    }
    console.log(all_exclude);
    for (item of all_exclude){
      if (item != ""){
        current_term += "&excluded=" + item
      }
      
    }

    current_term += "&dishType=Main course"

    current_term = current_term.replace(/ /g, "%20")
    console.log(current_term)
    fetch(current_term)
    .then(response => response.json())
    .then(recipes => {
      console.log(recipes)
      if (recipes.hits.length == 0){
        document.querySelector('#recipes').innerHTML = `<p>No recipes found for your selected criteria</p>`;
    }
    console.log(recipes.hits[0]["recipe"])
    for (let i = 0; i < 15; i++){
      ingred_list = []
      for (ingred of recipes.hits[i]["recipe"].ingredients){
        ingred_list.push(ingred["text"])
      }
      /* if(ingred_list != [""]){
        ingred_list.shift();
      } */
      ingred_list = ingred_list.filter(e =>  e);
      
      ingred_list = ingred_list.toString();
      ingred_list = ingred_list.replace(/,/g, ", ");

        document.querySelector('#recipes').innerHTML += `
            <section class="recipe-card">
                <img src="${recipes.hits[i]["recipe"].image}">
                <h3 id = "recipe_link"> <a href="${recipes.hits[i]["recipe"].url}" target="_blank"> ${recipes.hits[i]["recipe"].label}</a> </h3>

        </section>
        `;
    }
    })

}

/*Ingredient footer:  <div class = "recipe_ingreds">
                  ${ingred_list}
                </div> */










