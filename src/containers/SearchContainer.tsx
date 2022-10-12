import React, { useContext, useEffect, useState } from 'react';
import HeaderContainer from './HeaderContainer';
import { BookContext } from '../contexts/BookContext';
import { BookI } from '../interfaces/BookInterface';
import Book from '../components/Book';

const SearchContainer = () => {
	const { books } = useContext(BookContext);
	const [keywords, setKeywords] = useState<string>('');
	const [searchedBooks, setSearchedBooks] = useState<BookI[]>(books);

	// Just a very simple search function
	const search = (books: BookI[]): void => {
		const result = books.filter((book) => book.title.includes(keywords) || book.authors.includes(keywords));
		setSearchedBooks(result);
	};

	useEffect(() => {
		search(books);
		console.log('searching...');
	}, [keywords, books]);

	return (
		<div>
			<HeaderContainer/>

			<div className="container mx-auto">

				{/*Search Input*/}
				<input
					type="text"
					value={keywords}
					onChange={(event) => setKeywords(event.target.value)}
					placeholder={'Search books...'}
					className={'border-2 rounded w-full my-16 p-4'}
				/>

				{/*Search Results*/}
				<div className="text-2xl font-bold my-8">{keywords ? 'Search Results' : 'All Books'}</div>
				<div className="flex flex-wrap gap-8">
					{
						(searchedBooks && searchedBooks.length)
							? searchedBooks.map((book, index) => <Book key={index} book={book}/>)
							: null
					}
				</div>

			</div>
		</div>
	);
};

export default SearchContainer;