import React, { createContext, useEffect, useState } from 'react';
import { BookI } from '../interfaces/BookInterface';
import { getAll } from '../api/BooksAPI';

interface BookContextProps {
	children: React.ReactNode;
}

export const BookContext = createContext({
	books: [] as BookI[],
	updateBooks: (updatedBooks: BookI[]) => {
	}
});


export const BookContextProvider = ({ children }: BookContextProps) => {
	const [books, setBooks] = useState<BookI[]>([]);

	const updateBooks = (updatedBooks: BookI[]) => setBooks(updatedBooks);

	useEffect(() => {
		getAll().then(data => setBooks(data));
	}, []);

	return (
		<BookContext.Provider value={{
			books: books,
			updateBooks: updateBooks
		}}>
			{children}
		</BookContext.Provider>
	);
};