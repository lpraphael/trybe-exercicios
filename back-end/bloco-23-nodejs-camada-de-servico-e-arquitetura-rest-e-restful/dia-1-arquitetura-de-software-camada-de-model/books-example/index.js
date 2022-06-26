const express = require('express')
const app = express()
const port = 3000

const book = require('./models/Book')

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await book.getByAuthorId(author_id)
  : await book.getAll();

  res.status(200).json(books);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))