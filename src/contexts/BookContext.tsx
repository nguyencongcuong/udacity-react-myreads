import React, { createContext, useEffect, useState } from 'react';
import { BookI } from '../interfaces/BookInterface';
import { getAll } from '../api/BooksAPI';

interface BookContextProps {
	children: React.ReactNode;
}

export const BookContext = createContext({
	books: [] as BookI[],
	refreshBooks: () => {
	}
});


export const BookContextProvider = ({ children }: BookContextProps) => {
	const [books, setBooks] = useState<BookI[]>([]);

	const refreshBooks = () => getAll().then(books => setBooks(books));

	useEffect(() => {
		refreshBooks();
	}, []);

	return (
		<BookContext.Provider value={{
			books: books,
			refreshBooks: refreshBooks
		}}>
			{children}
		</BookContext.Provider>
	);
};