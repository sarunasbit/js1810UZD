
const inventory = [
    {
        "category": "Informacinės technologijos",
        "books": [
            {
                "title": "Mastering JavaScript",
                "ISBN": "IT-50101",
                "publishing_year": 2022,
                "pages": 320,
                "quantity": 14,
                "price": 34.99
            },
            {
                "title": "Python for Data Science",
                "ISBN": "IT-50102",
                "publishing_year": 2023,
                "pages": 410,
                "quantity": 20,
                "price": 45.50,
                "new_book": true
            },
            {
                "title": "Web Development Essentials",
                "ISBN": "IT-50103",
                "publishing_year": 2021,
                "pages": 280,
                "quantity": 8,
                "price": 27.99
            },
            {
                "title": "Introduction to Machine Learning",
                "ISBN": "IT-50104",
                "publishing_year": 2020,
                "pages": 350,
                "quantity": 12,
                "price": 39.99
            },
            {
                "title": "Cloud Computing Concepts",
                "ISBN": "IT-50105",
                "publishing_year": 2023,
                "pages": 300,
                "quantity": 5,
                "price": 42.00,
                "new_book": true
            }
        ]
    },
    {
        "category": "Fantastika",
        "books": [
            {
                "title": "The Enchanted Forest",
                "ISBN": "FA-10101",
                "publishing_year": 2020,
                "pages": 300,
                "quantity": 15,
                "price": 19.99
            },
            {
                "title": "Dragon's Quest",
                "ISBN": "FA-10102",
                "publishing_year": 2018,
                "pages": 450,
                "quantity": 8,
                "price": 29.99
            },
            {
                "title": "Mystic Lands",
                "ISBN": "FA-10103",
                "publishing_year": 2022,
                "pages": 320,
                "quantity": 20,
                "price": 24.99
            },
            {
                "title": "The Lost City",
                "ISBN": "FA-10104",
                "publishing_year": 2017,
                "pages": 280,
                "quantity": 5,
                "price": 14.99
            },
            {
                "title": "Journey of the Gods",
                "ISBN": "FA-10105",
                "publishing_year": 2021,
                "pages": 380,
                "quantity": 10,
                "price": 22.99
            }
        ]
    },
    {
        "category": "Historical Fiction",
        "books": [
            {
                "title": "The Roman Empire",
                "ISBN": "HF-20201",
                "publishing_year": 2019,
                "pages": 340,
                "quantity": 7,
                "price": 18.50
            },
            {
                "title": "Warriors of Time",
                "ISBN": "HF-20202",
                "publishing_year": 2016,
                "pages": 410,
                "quantity": 9,
                "price": 27.99
            },
            {
                "title": "The Golden Age",
                "ISBN": "HF-20203",
                "publishing_year": 2023,
                "pages": 290,
                "quantity": 12,
                "price": 21.50
            },
            {
                "title": "The Great Conqueror",
                "ISBN": "HF-20204",
                "publishing_year": 2018,
                "pages": 360,
                "quantity": 4,
                "price": 25.00
            },
            {
                "title": "Echoes of the Past",
                "ISBN": "HF-20205",
                "publishing_year": 2020,
                "pages": 310,
                "quantity": 11,
                "price": 19.75
            }
        ]
    },
    {
        "category": "Science Fiction",
        "books": [
            {
                "title": "Space Odyssey",
                "ISBN": "SF-30301",
                "publishing_year": 2021,
                "pages": 500,
                "quantity": 6,
                "price": 30.00
            },
            {
                "title": "Galaxy of the Lost",
                "ISBN": "SF-30302",
                "publishing_year": 2019,
                "pages": 450,
                "quantity": 14,
                "price": 24.99
            },
            {
                "title": "Artificial Dawn",
                "ISBN": "SF-30303",
                "publishing_year": 2020,
                "pages": 340,
                "quantity": 18,
                "price": 22.50
            },
            {
                "title": "Planetary Wars",
                "ISBN": "SF-30304",
                "publishing_year": 2017,
                "pages": 400,
                "quantity": 8,
                "price": 27.50
            },
            {
                "title": "The Quantum Code",
                "ISBN": "SF-30305",
                "publishing_year": 2022,
                "pages": 380,
                "quantity": 10,
                "price": 25.00
            }
        ]
    },
    {
        "category": "Mystery & Thriller",
        "books": [
            {
                "title": "The Midnight Murder",
                "ISBN": "MT-40401",
                "publishing_year": 2018,
                "pages": 270,
                "quantity": 12,
                "price": 15.99
            },
            {
                "title": "Hidden Secrets",
                "ISBN": "MT-40402",
                "publishing_year": 2020,
                "pages": 320,
                "quantity": 16,
                "price": 19.99
            },
            {
                "title": "The Last Witness",
                "ISBN": "MT-40403",
                "publishing_year": 2019,
                "pages": 380,
                "quantity": 9,
                "price": 22.50
            },
            {
                "title": "Into the Shadows",
                "ISBN": "MT-40404",
                "publishing_year": 2021,
                "pages": 310,
                "quantity": 14,
                "price": 18.75
            },
            {
                "title": "Chasing the Truth",
                "ISBN": "MT-40405",
                "publishing_year": 2017,
                "pages": 290,
                "quantity": 7,
                "price": 16.99
            }
        ]
    }
]

function consoleLogCategoryName(categorys){
    console.log("<-----CATEGORY------>")
    console.log(categorys.category.toUpperCase())
    console.log("<------------------->")
}

function markNewBooks(key) {
    for(let books of key){
        for(let item in books){
            if(item === 'publishing_year' && books[item] >= 2020){
                console.log(`${item}: ${books[item]} #NEW BOOK`)
                continue
            }
         console.log(item + ": " + books[item])     
        }
    console.log('--------------------------------')
    }
}



//New books marking
function runBooks(){
    for(let categorys of inventory){
        consoleLogCategoryName(categorys)
        for(let key in categorys){
            if(key === 'books'){
                markNewBooks(categorys[key]);
            }
        }
    }
}


function bookQuantityValue(book){
    return book.price * book.quantity;
}



function inventoryValue(){
    let sumOfInventory = 0;

    for(let categorys of inventory) {
        let sumOfCategory = 0;
        consoleLogCategoryName(categorys)
            for(let book of categorys.books){
                console.log("For the book: " + book.title)
                console.log(`Price: ${book.price} EUR`)
                console.log("Quantity: " + book.quantity)
                const sumOfBooks = bookQuantityValue(book);
                console.log(`Total value: ${book.price} * ${book.quantity} = ${sumOfBooks.toFixed(2)} EUR`)
                sumOfCategory += sumOfBooks;
                console.log("------------------------")
            }
        sumOfInventory += sumOfCategory;
        console.log(`Total sum of category: ${sumOfCategory.toFixed(2)} EUR` )
        console.log("<<------------->>")
    }
    console.log(`Inventory value: ${sumOfInventory.toFixed(2)} EUR`)

}

runBooks();

inventoryValue();

























