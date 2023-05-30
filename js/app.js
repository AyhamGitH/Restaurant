'use strict';

let firstId = 1000;

function Food(foodName, foodType, price) {
    this.id = 1000;
    this.Name = foodName;
    this.Type = foodType;
    this.price = price;
    this.unique = function () {
        this.id = firstId++
    };
    this.unique();
}

Food.prototype.RenderData = function () {
        let Table = document.getElementById("table");
    
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td1.textContent = `${this.id}`;
        td2.textContent = `${this.Name}`;
        td3.textContent = `${this.Type}`;
        td4.textContent = `${this.price}`;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        Table.appendChild(tr);
}

let saveValues = document.getElementById("food");

function handler(e) {
    e.preventDefault();
    let foodName = e.target.foodName.value;
    let foodType = e.target.foodType.value;
    let price = e.target.price.value;

    let newFood = new Food(foodName, foodType, price);
    newFood.RenderData(newFood);
};

saveValues.addEventListener('submit', handler)