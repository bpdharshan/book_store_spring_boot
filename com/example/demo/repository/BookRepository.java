package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
	List<Book> findBycategoryName(String categoryName);
	
	@Query("select distinct b.categoryName from Book b")
	List<String> findCategories();
	
	@Query("select b from Book b where b.bookName like '%:searchtext%'")
	List<Book> searchBooks(String searchtext);
}
