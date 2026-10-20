const express = require('express');
const router = express.Router();
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/booksController');

router.get('/', getBooks); 


router.post('/', createBook);
// Update
router.put('/:id', updateBook);
// Delete    
router.delete('/:id', deleteBook);  

module.exports = router;
