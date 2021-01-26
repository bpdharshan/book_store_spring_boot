package com.example.demo.controller;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Book;
import com.example.demo.repository.BookRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("/")
public class BookController {
	
	@Autowired
	private BookRepository bookRepository;
	
	
	@PostMapping("/api/addbooks")
	public boolean addbooks(@RequestBody Book book) {
		Book savedBook = bookRepository.save(book);
		return savedBook.getBookid() != 0L ? true : false;
	}
	
	@GetMapping("/api/books")
	public List<Book> getBooks() {
		return bookRepository.findAll();
	}
	
	
	@GetMapping("/api/books/category")
	public List<Book> getBooksByCategory(@RequestParam String category) {
		System.out.println(category);
		return bookRepository.findBycategoryName(category);
	}
	
	@GetMapping("/api/books/{id}")
	public Book getBooksyId(@PathVariable("id") long bookid) {
		return bookRepository.findById(bookid).orElse(null);
	}
	
	@PostMapping("/api/books")
	public boolean updateBook(@RequestBody Book book) {
		
		Book bookTopdate = bookRepository.getOne(book.getBookid());
		bookTopdate.setBookName(book.getBookName());
		bookTopdate.setBookPrice(book.getBookPrice());
		bookTopdate.setDescription(book.getDescription());
		bookTopdate.setAuthor(book.getAuthor());
		bookTopdate.setCategoryName(book.getCategoryName());
		Book updatedBook = bookRepository.save(bookTopdate);
		return updatedBook.getBookid() == book.getBookid() ? true : false;
	}
	
	@PostMapping("/api/deletebooks/{id}")
	public boolean deletebooks(@PathVariable("id") long bookid) {
		if(bookRepository.existsById(bookid)) {
			bookRepository.deleteById(bookid);
			return true;
		}
		return false;
	}
	
	@GetMapping("/api/categories")
	public List<String> getBooksyCategory() {
		return bookRepository.findCategories();
	}
	
	@GetMapping("/api/books/search")
	public List<Book> searchBooks(@RequestParam String searchtext){
		return bookRepository.searchBooks(searchtext);
	}
	
}
