const uuidv4 = require('uuid').v4;
const { DateTime } = require('luxon');

const products = [
    {
        "id": uuidv4(),
        "name": "Basketball",
        "image": "basketball-image.jpg",
        "description": "An official size basketball for both indoor and outdoor play.",
        "price": 29.99,
        "quantity": 30,
        "onStock": true,
        "category": "Sports"
    },
    {
        "id": uuidv4(),
        "name": "Football",
        "image": "football-image.jpg",
        "description": "A standard football for casual matches and practice.",
        "price": 19.99,
        "quantity": 25,
        "onStock": true,
        "category": "Sports"
    },
    {
        "id": uuidv4(),
        "name": "Running Shoes",
        "image": "running-shoes-image.jpg",
        "description": "Comfortable running shoes for your active lifestyle.",
        "price": 49.99,
        "quantity": 50,
        "onStock": true,
        "category": "Sports"
    },
    {
        "id": uuidv4(),
        "name": "Smartphone",
        "image": "smartphone-image.jpg",
        "description": "A high-end smartphone with advanced features and performance.",
        "price": 599.99,
        "quantity": 15,
        "onStock": true,
        "category": "Mobile phones"
    },
    {
        "id": uuidv4(),
        "name": "Laptop",
        "image": "laptop-image.jpg",
        "description": "A powerful laptop for work and entertainment.",
        "price": 899.99,
        "quantity": 10,
        "onStock": true,
        "category": "Mobile phones"
    },
    {
        "id": uuidv4(),
        "name": "T-Shirt",
        "image": "t-shirt-image.jpg",
        "description": "A comfortable and stylish t-shirt for everyday wear.",
        "price": 14.99,
        "quantity": 100,
        "onStock": true,
        "category": "Clothing"
    },
    {
        "id": uuidv4(),
        "name": "Jeans",
        "image": "jeans-image.jpg",
        "description": "Classic denim jeans for a timeless look.",
        "price": 34.99,
        "quantity": 75,
        "onStock": true,
        "category": "Clothing"
    },
    {
        "id": uuidv4(),
        "name": "Sofa",
        "image": "sofa-image.jpg",
        "description": "A comfortable and stylish sofa for your living room.",
        "price": 499.99,
        "quantity": 5,
        "onStock": true,
        "category": "Furniture"
    },
    {
        "id": uuidv4(),
        "name": "Dining Table",
        "image": "dining-table-image.jpg",
        "description": "A sturdy dining table for family gatherings and meals.",
        "price": 299.99,
        "quantity": 10,
        "onStock": true,
        "category": "Furniture"
    },
    {
        "id": uuidv4(),
        "name": "Hiking Boots",
        "image": "hiking-boots-image.jpg",
        "description": "Durable hiking boots for outdoor adventures and treks.",
        "price": 79.99,
        "quantity": 20,
        "onStock": true,
        "category": "Sports"
    },
    {
        "id": uuidv4(),
        "name": "Tablet",
        "image": "tablet-image.jpg",
        "description": "A versatile tablet for work and entertainment on the go.",
        "price": 349.99,
        "quantity": 30,
        "onStock": true,
        "category": "Mobile phones"
    },
    {
        "id": uuidv4(),
        "name": "Dress",
        "image": "dress-image.jpg",
        "description": "An elegant dress for special occasions and formal events.",
        "price": 59.99,
        "quantity": 10,
        "onStock": true,
        "category": "Clothing"
    },
    {
        "id": uuidv4(),
        "name": "Coffee Table",
        "image": "coffee-table-image.jpg",
        "description": "A stylish coffee table for your living room decor.",
        "price": 129.99,
        "quantity": 15,
        "onStock": true,
        "category": "Furniture"
    },
    {
        "id": uuidv4(),
        "name": "Cycling Helmet",
        "image": "cycling-helmet-image.jpg",
        "description": "A safe and comfortable helmet for cycling",
        "price": 39.99,
        "quantity": 40,
        "onStock": true,
        "category": "Sports"
    },
    {
        "id": uuidv4(),
        "name": "Desk Chair",
        "image": "desk-chair-image.jpg",
        "description": "An ergonomic desk chair for comfortable work and study.",
        "price": 149.99,
        "quantity": 20,
        "onStock": true,
        "category": "Furniture"
    },
    {
        "id": uuidv4(),
        "name": "Fitness Tracker",
        "image": "fitness-tracker-image.jpg",
        "description": "A fitness tracker to monitor your health and activity.",
        "price": 79.99,
        "quantity": 30,
        "onStock": true,
        "category": "Mobile phones"
    },
    {
        "id": uuidv4(),
        "name": "Winter Jacket",
        "image": "winter-jacket-image.jpg",
        "description": "A warm and stylish winter jacket for cold weather.",
        "price": 69.99,
        "quantity": 25,
        "onStock": true,
        "category": "Clothing"
    },
    {
        "id": uuidv4(),
        "name": "Coffee Maker",
        "image": "coffee-maker-image.jpg",
        "description": "A coffee maker to brew your favorite morning coffee.",
        "price": 49.99,
        "quantity": 20,
        "onStock": true,
        "category": "Furniture"
    }
];

const categories = [
    {
        "id": uuidv4(),
        "name": "Sports"
    },
    {
        "id": uuidv4(),
        "name": "Mobile phones"
    },
    {
        "id": uuidv4(),
        "name": "Clothing"
    },
    {
        "id": uuidv4(),
        "name": "Furniture"
    }
];


const reviews = [
    {
        "id": uuidv4(),
        "review": "Great basketball for playing with friends!",
        "rating": 4.5,
        "date": DateTime.local().minus({ days: 7 }).toISO(),
        "productId": products[0].id
    },
    {
        "id": uuidv4(),
        "review": "The football is of good quality and lasts long.",
        "rating": 4.0,
        "date": DateTime.local().minus({ days: 5 }).toISO(),
        "productId": products[1].id
    },
    {
        "id": uuidv4(),
        "review": "Comfortable running shoes. Highly recommended!",
        "rating": 5.0,
        "date": DateTime.local().minus({ days: 10 }).toISO(),
        "productId": products[2].id
    },
    {
        "id": uuidv4(),
        "review": "This smartphone is outstanding! Great camera.",
        "rating": 5.0,
        "date": DateTime.local().minus({ days: 15 }).toISO(),
        "productId": products[3].id
    },
    {
        "id": uuidv4(),
        "review": "Excellent laptop for work and gaming.",
        "rating": 4.5,
        "date": DateTime.local().minus({ days: 12 }).toISO(),
        "productId": products[4].id
    },
    {
        "id": uuidv4(),
        "review": "Comfy t-shirt, perfect for everyday wear.",
        "rating": 4.0,
        "date": DateTime.local().minus({ days: 9 }).toISO(),
        "productId": products[5].id
    },
    {
        "id": uuidv4(),
        "review": "Classic jeans, good fit, and stylish!",
        "rating": 4.0,
        "date": DateTime.local().minus({ days: 8 }).toISO(),
        "productId": products[6].id
    },
    {
        "id": uuidv4(),
        "review": "The sofa is elegant and comfortable.",
        "rating": 4.5,
        "date": DateTime.local().minus({ days: 25 }).toISO(),
        "productId": products[7].id
    },
    {
        "id": uuidv4(),
        "review": "The dining table is sturdy and looks great.",
        "rating": 4.0,
        "date": DateTime.local().minus({ days: 22 }).toISO(),
        "productId": products[8].id
    },
    {
        "id": uuidv4(),
        "review": "Hiking boots are perfect for rough terrains.",
        "rating": 4.5,
        "date": DateTime.local().minus({ days: 30 }).toISO(),
        "productId": products[9].id
    },
    {
        "id": uuidv4(),
        "review": "Tablet is fast and user-friendly. Love it!",
        "rating": 5.0,
        "date": DateTime.local().minus({ days: 35 }).toISO(),
        "productId": products[10].id
    },
    {
        "id": uuidv4(),
        "review": "Elegant dress for special occasions.",
        "rating": 4.0,
        "date": DateTime.local().minus({ days: 10 }).toISO(),
        "productId": products[11].id
    },
    {
        "id": uuidv4(),
        "review": "The coffee table complements our decor nicely.",
        "rating": 4.5,
        "date": DateTime.local().minus({ days: 20 }).toISO(),
        "productId": products[12].id
    },
    {
        "id": uuidv4(),
        "review": "Comfortable cycling helmet for long rides.",
        "rating": 4.0,
        "date": DateTime.local().minus({ days: 18 }).toISO(),
        "productId": products[13].id
    },
    {
        "id": uuidv4(),
        "review": "Ergonomic desk chair for productive work.",
        "rating": 5.0,
        "date": DateTime.local().minus({ days: 22 }).toISO(),
        "productId": products[14].id
    },
    {
        "id": uuidv4(),
        "review": "The fitness tracker is accurate and useful.",
        "rating": 4.5,
        "date": DateTime.local().minus({ days: 25 }).toISO(),
        "productId": products[15].id
    },
    {
        "id": uuidv4(),
        "review": "Warm and stylish winter jacket. Love it!",
        "rating": 5.0,
        "date": DateTime.local().minus({ days: 20 }).toISO(),
        "productId": products[16].id
    },
    {
        "id": uuidv4(),
        "review": "Great coffee maker for my daily brew.",
        "rating": 4.0,
        "date": DateTime.local().minus({ days: 15 }).toISO(),
        "productId": products[17].id
    },
    {
        "id": uuidv4(),
        "review": "Good quality products for your store. I would recommend them!",
        "rating": 5.0,
        "date": DateTime.local().minus({ days: 5 }).toISO(),
        "productId": products[17].id
    },
    {
        "id": uuidv4(),
        "review": "Satisfied with my purchase. Will buy again!",
        "rating": 4.5,
        "date": DateTime.local().minus({ days: 3 }).toISO(),
        "productId": products[13].id
    }
];



exports.db = {
    products,
    categories,
    reviews
};