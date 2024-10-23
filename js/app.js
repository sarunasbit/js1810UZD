
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

function consoleLogCategoryName(category){
    console.log("<-----CATEGORY------>")
    console.log(category.category.toUpperCase())
    console.log("<------------------->")
}

//New books marking
function runAllBooks(){
    
    //Mark books ant display
    function markNewBooks(key) {
        for(let book of key){
            for(let item in book){
                if(item === 'publishing_year' && book[item] >= 2020){
                    console.log(`${item}: ${book[item]} #NEW BOOK`)
                    continue
                }
             console.log(item + ": " + book[item])     
            }
        console.log('--------------------------------')
        }
    }

    //run loop 
    for(let category of inventory){
        consoleLogCategoryName(category)
        for(let key in category){
            if(key === 'books'){
                 markNewBooks(category[key]);
            }
        }
    }

}
//Show Price, Quantity price....
function runInventoryValue(){
    //Book quantity price
    function bookQuantityValue(book){
        return book.price * book.quantity;
    }
    //Category value
    function booksCategoryValue(category){
        let sumOfCategoryValue = 0;
        for(let book of category.books){
            sumOfCategoryValue += bookQuantityValue(book);
        }
        return sumOfCategoryValue;
    }
    //Inventory value
    function booksInventoryValue(inventory){
    let sumOfInventoryValue = 0;
        for(let category of inventory){
            sumOfInventoryValue += booksCategoryValue(category);
        }
    return sumOfInventoryValue;
    }

    
    //Loop to get prices and display
    for(let category of inventory) {
        consoleLogCategoryName(category)
            for(let book of category.books){
                console.log("For the book: " + book.title)
                console.log(`Price: ${book.price} EUR`)
                console.log("Quantity: " + book.quantity)
                console.log(`Total value: ${book.price} * ${book.quantity} = ${bookQuantityValue(book).toFixed(2)} EUR`)
                console.log("------------------------")
            }
        console.log(`Total sum of category: ${booksCategoryValue(category).toFixed(2)} EUR` )
        console.log("<<------------->>")
        
    }
    console.log(`Total sum of inventory: ${booksInventoryValue(inventory).toFixed(2)} EUR`)
}

//Templates for console output
function templateConsoleLog(book){
    console.log(`Book title: ${book.title}`)
    console.log(`Book ISBN: ${book.ISBN}`)
    console.log(`Book publishing year: ${book.publishing_year}`)
    console.log(`Book pages: ${book.pages}`)
    console.log(`Book quantity: ${book.quantity}`)
    console.log(`Book price: ${book.price}`)
    console.log("----------------------")
}

//Filter books by Category, Pages, Title 
function filterBooksByCategoryPages(inventory, filterByInput) {
    
    function templateConsoleLog(book){
        console.log(`Book title: ${book.title}`)
        console.log(`Book ISBN: ${book.ISBN}`)
        console.log(`Book publishing year: ${book.publishing_year}`)
        console.log(`Book pages: ${book.pages}`)
        console.log(`Book quantity: ${book.quantity}`)
        console.log(`Book price: ${book.price}`)
        console.log("----------------------")
    };
    //Filter and check if category #filterByInput
    function categoryFilterOnly(category) {
        for(let book of category.books){
            templateConsoleLog(book)
        }
    };
    //Filters and checks by title and pages first If Titles, second If Pages
    function pagesAndTitleFilterOnly (category){
        for(let book of category.books){
            if(book.title === filterByInput){
                templateConsoleLog(book)   
            }
            if(book.pages === filterByInput){
                console.log(`Category: ${category.category}`)
                templateConsoleLog(book)
                
            }
        }
    }
    //Loop for to start filter 
    for(let category of inventory){
        if(category.category === filterByInput){
            console.log(`Category: ${category.category}`)
            categoryFilterOnly(category)
        }else {
            pagesAndTitleFilterOnly(category)
        }  
    };
}


//Book prices max or min values "min" or "max"
function minOrMaxBookPrice(inventory, value){
    if(value === "min"){
        const prices = inventory.flatMap(category => category.books.map(book => book.price));
        return console.log(Math.min(...prices))
    }else if(value === "max"){
        const prices = inventory.flatMap(category => category.books.map(book => book.price));
        return console.log(Math.max(...prices))
    }
}
//Price sort
function sortBooksAsc(inventory){
    for(let category of inventory){
        category.books.sort((a,b)=> a.price-b.price)

        for(let book of category.books){
            console.log(`Categories ${category.category}`)
            templateConsoleLog(book)
        }
    }
}
//Price sort
function sortBooksDesc(inventory){
    for(let category of inventory){
        category.books.sort((a,b)=> b.price-a.price)
        for(let book of category.books){
            console.log(`Categories ${category.category}`)
            templateConsoleLog(book)
        }
    }
}

//Title sort
function sortBooksByTitleAsc(inventory){
    for(let category of inventory){
        category.books.sort((a,b)=> a.title<b.title)

        for(let book of category.books){
            console.log(`Categories ${category.category}`)
            templateConsoleLog(book)
        }
    }
}
//Title sort
function sortBooksByTitleDesc(inventory){
    for(let category of inventory){
        category.books.sort((a,b)=> a.title>b.title)
        for(let book of category.books){
            console.log(`Categories ${category.category}`)
            templateConsoleLog(book)
        }
    }
}


// runAllBooks()
// runInventoryValue()





// filterBooksByCategoryPages(inventory, "Fantastika")
// filterBooksByCategoryPages(inventory, 280)
// runInventoryValue()
// runAllBooks()
// minOrMaxBookPrice(inventory, "min")

// sortBooksAsc(inventory);
// sortBooksDesc(inventory);

// sortBooksByTitleDesc(inventory)
// sortBooksByTitleAsc(inventory)

















