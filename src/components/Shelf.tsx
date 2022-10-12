import React from 'react';

import Book from './Book';
import { BookI } from '../interfaces/BookInterface';

interface ShelfProps {
	title: string,
	books: BookI[],
}

const Shelf = ({ title, books }: ShelfProps) => {
	return (
		<React.Fragment>
			{
				books && books.length ?
					<div className={'mb-24'}>
						<div className="font-bold uppercase text-2xl mb-2">{title}</div>
						<div className="h-1 bg-gray-200 mb-16"></div>
						<div className="flex gap-8">
							{
								books.map((book, index) => <Book key={index} book={book}/>)
							}
						</div>
					</div>
					: null
			}
		</React.Fragment>
	);
};

export default Shelf;