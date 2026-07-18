package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;
    private String libraryName;

    // Constructor Injection
    public BookService(String libraryName) {
        this.libraryName = libraryName;
        System.out.println("Constructor Injection Successful");
        System.out.println("Library Name : " + libraryName);
    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Setter Injection Successful");
    }

    public void displayService() {
        System.out.println("BookService Bean Initialized");
        bookRepository.displayRepository();
    }
}