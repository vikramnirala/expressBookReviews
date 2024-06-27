const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const axios = require('axios');




// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  const getBooks = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(books)
    },3000)
  });
  getBooks.then(
    (books) => {
      return res.status(200).json(books);
    }, 
    (error) => {
      return res.status(404).json({message: "No books found"});
    }
  )
  
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  
  const getBook = new Promise((resolve,reject) => {
    setTimeout(() => {
      const booksArr = Object.values(books);
      const filteredBook = booksArr.filter((book) => book.isbn === req.params.isbn)
      resolve(filteredBook[0])
    },3000)
  });
  getBook.then(
    (filteredBook) => {
      return res.status(200).json(filteredBook);
    }, 
    (error) => {
      return res.status(404).json({message: "No book found"});
    }
  )
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const getBook = new Promise((resolve,reject) => {
    setTimeout(() => {
      const booksArr = Object.values(books);
      const filteredBook = booksArr.filter((book) => book.author === req.params.author)
      resolve(filteredBook[0])
    },3000)
  });
  getBook.then(
    (filteredBook) => {
      return res.status(200).json(filteredBook);
    }, 
    (error) => {
      return res.status(404).json({message: "No book found"});
    }
  )
  
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const getBook = new Promise((resolve,reject) => {
    setTimeout(() => {
      const booksArr = Object.values(books);
      const filteredBook = booksArr.filter((book) => book.title === req.params.title)
      resolve(filteredBook[0])
    },3000)
  });
  getBook.then(
    (filteredBook) => {
      return res.status(200).json(filteredBook);
    }, 
    (error) => {
      return res.status(404).json({message: "No book found"});
    }
  )
  
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const booksArr = Object.values(books);
  const filteredBook = booksArr.filter((book) => book.isbn === req.params.isbn)
  return res.status(200).json(filteredBook[0].reviews);
});

module.exports.general = public_users;
