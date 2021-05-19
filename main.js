
"use strict"

import './style.scss'

window.addEventListener("DOMContentLoaded", get);
setInterval(get, 5000);

const endpoint = "https://foobar-vas.herokuapp.com/";

let lastId = -1;
const sold = {};

function get() {
  fetch(endpoint, {
      method: "get",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
  }) 
  .then((e) => e.json())
  .then(addOrder);

}


function addOrder(data) {
  //init
  //emty object to insert the data 
  let queue = data.queue;

  //everytime we recieve new data
  const newQueue = queue.filter(order => order.id > lastId)

  if(queue.length > 0){
    lastId = queue[queue.length-1].id
  }
  
  newQueue.forEach(queue => {
    queue.order.forEach(beer => {
      if(sold[beer] === undefined){
        sold[beer] = 1;
      }else{
        sold[beer]++;
      }
    })
  });  

  let sortedQueue = sortSold();
  updateRank(sortedQueue);
}

function sortSold(){
  let sortable = [];

  for(let beer in sold){
    sortable.push([beer, sold[beer]])
  }

  sortable.sort((a,b) => {
    let aAmount = a[1];
    let bAmount = b[1];
    return bAmount - aAmount;
  });

  return sortable;
}

function updateRank(sortedSoldBeers){
 if (sortedSoldBeers.length >= 1) {
   let name1 = sortedSoldBeers[0][0];
   let amount1 = sortedSoldBeers[0][1];
   console.log(name1, amount1);

   //append name1 and amount2 to templates
 }

 console.log(sortedSoldBeers);
}


//udregn nr. 1, nr. 2 og nr. 3 ud fra sold-objektet 

//klon til html templates
//if nr. 1 klon til template 1, else if nr. 2 klon til template 2, else if nr 3. klon til template 3 

//gør barene dynamiske 

//match images med navne fra json
