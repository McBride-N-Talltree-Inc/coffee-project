"use strict"

function renderCoffee(coffee) {
    var html = '<div class="row col-6 coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    if (selectedRoast==="all"){
        filteredCoffees=[...coffees];
    }

    div.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffeeNames(e) {
    //e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee,i) {
        if ((coffee.roast === selectedRoast || selectedRoast=== "all")&& coffee.name[0].toLowerCase()===coffeeSearch.value[0].toLowerCase()){
            if ((coffee.roast === selectedRoast || selectedRoast==="all")&& coffee.name.toLowerCase().indexOf(coffeeSearch.value.toLowerCase()) !== -1) {
                filteredCoffees.push(coffee);
            }
        }

    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

function addedCoffee(name, roast) {
    //name.preventDefault(); // don't submit the form, we just want to update the data
    var html = '<div class="row col-6 coffee">';
    html += '<h1>' + name + '</h1>';
    html += '<p>' + roast + '</p>';
    html += '</div>';
    div.innerHTML+=html
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.forms.coffeeFilterSearch.TextInput
var input = document.querySelector(".form-select")
var search = document.querySelector(".form-control")

var userRoastSelection = document.querySelector('#userRoastSelection').value;
var coffeeSubmit = document.querySelector('#submitCoffee');

div.innerHTML = renderCoffees(coffees);

//submitButton.addEventListener('click', searchCoffeeNames);
input.addEventListener("change", function(){
    roastSelection=document.querySelector('#roast-selection');
    updateCoffees()
});

search.addEventListener("input", function() {
    searchCoffeeNames()
});

coffeeSubmit.addEventListener("click", function() {
    var name = document.forms.addCoffee.TextInput.value
    addedCoffee(name, userRoastSelection)
})
