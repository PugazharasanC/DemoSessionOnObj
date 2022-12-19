


let arr = [
    {
        "id" : 5,
        "name" : "Mobile",
        "price" : 15000
    },{
        "id" : 2,
        "name" : "Camera",
        "price" : 45000
    },{
        "id" : 3,
        "name" : "Headphones - TWS",
        "price" : 5000
    },{
        "id" : 4,
        "name" : "Projector",
        "price" : 15000
    },{
        "id" : 1,
        "name" : "Mobile",
        "price" : 150000
    },{
        "id" : 6,
        "name" : "Laptop",
        "price" : 75000
    },
]


// Sort based on price desc, and id asc


// 5,6,2,1,4,3

console.log(arr.sort((a,b)=> b.price - a.price || a.id-b.id))