
"use strict"

import './style.scss'

window.addEventListener("DOMContentLoaded", get);

const endpoint = "https://foobar-vas.herokuapp.com/";

const lastId = null;

function get() {
  fetch(endpoint, {
      method: "get",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
  }) 
  .then((e) => e.json())
  .then(addOrder);
  //setInterval(get, 5000);
  }


  function addOrder(data) {
    //init
    //emty object to insert the data 
    const sold = {
    };

    let queue = data.queue;
    
    //everytime we recieve new data
    const newOrders = queue.filter(order => order.id > lastId)
    lastId = queue[queue.length-1].id
    
    newOrders.array.forEach(order=> {
      order.order.forEach(beer=> {
        sold[beer]++
      })
    });  
  }





//match images med navne fra json

//udregn nr. 1, nr. 2 og nr. 3 ud fra sold-objektet 

//klon til html templates
//if nr. 1 klon til template 1, else if nr. 2 klon til template 2, else if nr 3. klon til template 3 

//gør barene dynamiske 