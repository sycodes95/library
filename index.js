let myLibrary = [];





let form = document.querySelector('form');
form.style.display = 'none';
//hides form from html until it is activated by clicking 'Add book'

/*
function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}
*/

class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
//object constructor


document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('submit').addEventListener('click', addBookToLibrary);
    
})



const addBookToLibrary = (ev) => {
    ev.preventDefault();


    


    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    //creates variables for each input text field values
    
    let createBook = new Book(title, author, pages, read)
    //creates new object with the Book function using the values submitted on the form


    myLibrary.push(createBook);
    //pushes new *object* into myLibrary (array)

    document.querySelector('form').reset();
    //resets form input text fields

    

    let bookContainer = document.querySelector('.bookContainer');
    bookContainer.innerHTML = "";

    let bookCount = 0;

    myLibrary.forEach(book => {
        bookCount++;

        book.count = bookCount - 1;
        
        let bookCard = document.createElement('div');
        bookCard.classList.add(`bookCard${bookCount}`)
        bookContainer.appendChild(bookCard);

        let bookTitle = document.createElement('div');
        bookTitle.classList.add('bookTitle');
        bookCard.appendChild(bookTitle);
        bookTitle.textContent = `${book.title}`;

        let bookAuthor = document.createElement('div');
        bookAuthor.classList.add('bookAuthor');
        bookCard.appendChild(bookAuthor);
        bookAuthor.textContent = `${book.author}`;

        let bookPages = document.createElement('div');
        bookPages.classList.add('bookPages');
        bookCard.appendChild(bookPages);
        bookPages.textContent = `${book.pages}`;

        let bookRead = document.createElement('div');
        bookRead.classList.add('bookRead');
        bookCard.appendChild(bookRead);
        if (book.read == true) {
            bookRead.textContent = 'Read';

        } else if (book.read == false) {
            bookRead.textContent = 'Not Read';
        }
        

        let readButton = document.createElement('button');
        readButton.classList.add('readButton');
        readButton.setAttribute('id', `read${bookCount}`)
        bookCard.appendChild(readButton);
        readButton.textContent = 'read?';

        readButton.addEventListener('click', ()=> {
            if (book.read == true) {
                book.read = false;
                bookRead.textContent = 'Not Read'
            } else if (book.read == false) {
                book.read = true;
                bookRead.textContent = 'Read'
            }
        })
        

        

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.setAttribute('id', `remove${bookCount}`)
        bookCard.appendChild(removeButton);
        removeButton.textContent = 'remove';
        
        document.querySelector(`#remove${bookCount}`).addEventListener('click', ()=> {
            myLibrary.splice(book.count, 1);
            let deleteCard = removeButton.parentNode;
            deleteCard.remove();
            
        })

        
        

        
        


        
        
    });

    
    
}




/*document.querySelector('.removeButton').addEventListener('click', (evt)=>{
    let card = evt.target.parent;
    console.log(card)
    
}) */

document.getElementById('addBook').addEventListener('click', ()=>{
    form.style.display = 'block';
    
})
//activates form when 'add book' is clicked'
        
        

        
        
    
        
    


    

    















    
    
    

