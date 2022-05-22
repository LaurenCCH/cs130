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
"white rice", "white pasta", "shortening", "sugar (need to figure out only high amounts)",
"lard", "margarine", "sunflower oil", "vegetable oil", "corn syrup", "avocado oil"]

document.getElementById('low_fodmap').value = ["artichoke", "asparagus", "cauliflower", "garlic", "peas", 
"mushrooms", "onion", "sugar snap peas", "apples", "apple juice", "cherries", "dried fruit", "mango",
  "nectarines", "peaches", "pears", "plums", "watermelon", "dairy", "soy", "legumes",
  "wheat bread", "rye bread", "barley bread", "corn syrup", "honey", "cashews", "pistachios",
"beans", "lentils", "apricot", "blackberries", "dates", "grapefruit", "leeks", "shallots", "rum"]

document.getElementById('nightshade').value = ["banana peppers", "datil", "eggplant", "hot peppers",
"chili peppers", "jalapenos", "habaneros", "red pepper", "cayenne pepper", "paprika", "pimentos", "potatoes",
"sweet peppers", "bell peppers", "thai peppers", "tomatillos", "garden huckleberry", "goji berries", "wolfberries", "gooseberries", 
"ground cherries", "cape gooseberries", "jerusalem cherries", "pepino", "sunberry", "wonderberries", "tamarillo", "tomatoes"]

document.getElementById('low_hist').value = ["cheese", "yogurt", "sour cream", "buttermilk", "kefir", "sauerkraut",
"kimchi", "pickles", "kombucha", "sausage", "salami", "wine", "beer", "champagne", "alcohol", "tempeh", "miso", "soy sauce", 
"natto", "sourdough bread", "tomatoes", "eggplant", "spinach", "sardines", "canned tuna", "canned salmon", "vinegar", 
"ketchup", "legumes", "bacon"]

document.getElementById('paleo').value = ["legumes", "beans", "lentils", "peanuts", "peas", "dairy", "sugar", "salt", "potatoes", "bread", 
"rice", "pasta", "whole grains", "alcohol", "coffee", "vegetable oil", "canola oil", "sunflower oil", "gluten"]

document.getElementById('dairy').value = ["dairy"]
document.getElementById('egg').value = ["egg"]
document.getElementById('gluten').value = ["gluten"]
document.getElementById('peanut').value = ["peanut"]
document.getElementById('seafood').value = ["seafood"]
document.getElementById('sesame').value = ["sesame"]
document.getElementById('soy').value = ["soy"]
document.getElementById('sulfite').value = ["sulfite"]
document.getElementById('tree_nut').value = ["tree nut"]
document.getElementById('vegetarian').value = ["vegetarian"];
document.getElementById('vegan').value = ["vegan"];
document.getElementById('wheat').value = ["wheat"];

const allergens = ["dairy", "egg", "eggs", "gluten", "peanut", "seafood", "sesame", "soy", "sulfite", "tree nut", "wheat"];
const spec_diets = ["pescatarian", "vegetarian", "vegan", "lacto_veg", "ovo_veg"];

const chose_aller = [""];
const chose_spec_diets = [""];

get_sep_lists = function(){
  let text = $('#user_input').val();
  let text_exclude = text.split(',');

  var check_exclude = [];
        $.each($('input[type="checkbox"]:checked'), function(){ 
          current_val = $(this).val()
          current_val_split = current_val.split(",")      
          check_exclude = check_exclude.concat(current_val_split);
        });

  all_exclude_0 = check_exclude.concat(text_exclude);
  all_exclude = removeDuplicates(all_exclude_0);
  

  for (item of all_exclude){
    if (allergens.includes(item)){
      chose_aller.push(item);
      
    }
    else if (spec_diets.includes(item)){
      chose_spec_diets.push(item);
    }
    else{
      continue;
    }
  }
  if(chose_aller != [""]){
    chose_aller.shift();
  }
  if(chose_spec_diets != [""]){
    chose_spec_diets.shift();
  }

  all_exclude = all_exclude.filter( function( el ) {
    return !chose_aller.includes( el );
  } );

  all_exclude = all_exclude.filter( function( el ) {
    return !chose_spec_diets.includes( el );
  } );

  ingreds = all_exclude.concat(chose_aller);
  
  document.body.append("Excluded Ingredients: " + " " + ingreds + ".  " + "Selected Animal Product-Related Diets: " + " " + chose_spec_diets);

  sep_groups = [all_exclude, chose_aller, chose_spec_diets];
  //return(sep_groups);
}

for_api = function(){
  console.log(sep_groups)
}

//const three_groups = get_sep_lists.call();
//console.log(three_groups);









