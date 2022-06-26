const express = require('express')
const app = express()
const port = 3000

const Book = require('./models/Book')

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const book = await Book.getById(id)
  console.log(book)

  if(!book) return res.status(404).json({ message: 'not Found' });

  return res.status(200).json(book);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))