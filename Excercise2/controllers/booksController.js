
const Book = require('../models/Book');

// UPDATE 
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      req.body,
      { new: true } 
    );
    if (!updatedBook) {
      return res.status(404).send('Book not found in this database');
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(500).send('Server error');
  }
};



// get
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// create a New
exports.createBook = async (req, res) => {
    try {
        const newBook = new Book(req.body); 
        const saved = await newBook.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// DELETE 
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send('Book not found');
    }
    res.send(`Book with id ${id} deleted`);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
