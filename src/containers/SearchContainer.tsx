import React, { useEffect, useState } from 'react';
import HeaderContainer from './HeaderContainer';
import { BookI } from '../interfaces/BookInterface';
import Book from '../components/Book';
import { search } from '../api/BooksAPI';

const SearchContainer = () => {
	const [keywords, setKeywords] = useState<string>('');
	const [searchedBooks, setSearchedBooks] = useState<BookI[]>([]);

	// Just a very simple search function
	const searchBooks = (): void => {
		search(keywords).then(res => {
			if (res.length) {
				setSearchedBooks(res);
			} else if (res.error) {
				setSearchedBooks([]);
			}
		});
	};

	useEffect(() => {
		if (keywords) {
			searchBooks();
		}
	}, [keywords]);

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
				<div className="text-2xl font-bold my-8">{keywords ? 'Search Results' : ''}</div>
				<div className="flex flex-wrap gap-8">
					{
						searchedBooks.length ? searchedBooks.map((book, index) => <Book key={index} book={book}/>) : null
					}

					{
						(!searchedBooks.length && keywords) ? <div>There is no book match with keyword: <em>{keywords}</em></div> : null
					}
				</div>

			</div>
		</div>
	);
};

export default SearchContainer;