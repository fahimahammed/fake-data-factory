const fs = require("fs");

const { db } = require('./db');

const { products, categories, reviews } = db;


const jsonToString = (jsonData) => {
    return JSON.stringify(jsonData);
}

const saveToJsonFile = (fileName, data) => {
    try {
        fs.writeFileSync(`./data/${fileName}`, jsonToString(data));
    }
    catch (err) {
        console.error(err);
    }
};

const relation = (products, categories) => {
    products.map(product => {
        categories.forEach(category => {
            if (category.name === product.category) {
                product.category = category.id;
            }
        })
    })
};

relation(products, categories);

saveToJsonFile("products-with-category.json", products);
saveToJsonFile("categories.json", categories);
saveToJsonFile("reviews.json", reviews);

db.products.forEach(product => {
    delete product.category;
});

saveToJsonFile("products.json", products);
