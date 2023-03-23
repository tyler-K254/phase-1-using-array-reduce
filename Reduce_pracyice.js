// const products = [
//   { name: 'Shampoo', price: 4.99 },
//   { name: 'Donuts', price: 7.99 },
//   { name: 'Cookies', price: 6.49 },
//   { name: 'Bath Gel', price: 13.99 }
// ];

// function getTptalAmoundForProducts(products){
//     let totalPrice = 0;
//     for (const product of products){
//         totalPrice += product.price
//     }
//     return totalPrice
// }


// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];

//   function ourReduce(arr, reducer, init){
//     let accum = init;
//     for(const element of arr){
//         accum = reducer(accum,element);
//     }
//     return accum;
//   }

//   function couponCounter(totalAmount, Location) {
//     return totalAmount + location.amount;
//   }

let books = [

{

title: 'Eloquent JavaScript'
,price: 16.00,
inventory: 5

,title: 'JavaScript: The Good Parts'
,price: 10.50,
inventory: 30

,title: 'Learn JavaScript VISUALLY',
price: 25.00,
inventory: 2 

,title: 'You don\'t know js',
price: 60.00,
inventory: 8

,title: 'JavaScript: The Definitive Guide'
,price: 18.95,
inventory: 0
}
]

const reducer = (accumulator, item) => {
  console.log(accumulator, item)
  let total = item.price*item.inventory
  return accumulator += total
}

let total = books.reduce(reducer,0)