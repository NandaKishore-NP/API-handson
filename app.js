const { log } = require("console");
const express = require("express");
const fs = require("fs");
const app = express();


let books = [
  { id: 1, title: 'Book 1', author: 'KIran Raj', category: 'Comic', date: '5/12/1997', language:'Hindi'},
  { id: 2, title: 'Book 2', author: 'Longside', category: 'Horror' , date: '3/02/2000', language:'Kannada' },
  { id: 3, title: 'Book 3', author: 'Pushalraj', category: 'Story' , date: '24/10/1960', language:'Malyalam'},
  { id: 4, title: 'Book 4', author: 'Deepak', category: 'Comic', date: '14/06/2003', language:'Tamil' },
  { id: 5, title: 'Book 5', author: 'Akshan', category: 'Comic', date: '22/12/1986', language:'Telugu' },
  { id: 6, title: 'Book 6', author: 'Nandakishore', category: 'Adventure', date: '13/02/1998', language:'Kannada' },
  { id: 7, title: 'Book 7', author: 'Madeshwar', category: 'Moral', date: '13/02/1966',  language:'Hindi' },
  { id: 8, title: 'Book 8', author: 'Aravind rao', category: 'Poetry', date: '21/08/2007', language:'Bengali' },
  { id: 9, title: 'Book 9', author: 'Shakesphere', category: 'Novel', date: '30/06/2004',language:'English' }
];

// Middleware to parse JSON bodies
app.use(express.json());

/** GET  ***/
app.get('/api/books', (req, res) => {
  res.json(books);
});
 app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  res.json(book);});

  
// Start the server
app.listen(7987, () => {
  console.log("Server is running on port 7987");
})
