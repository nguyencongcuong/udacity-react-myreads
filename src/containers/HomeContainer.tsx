import React, { useContext, useEffect, useState } from 'react';

import * as _ from 'lodash';

import Shelf from '../components/Shelf';
import { BookContext } from '../contexts/BookContext';
import HeaderContainer from './HeaderContainer';
import { ShelfI } from '../interfaces/ShelfInterface';
import { BookI } from '../interfaces/BookInterface';

const HomeContainer = () => {
	const { books } = useContext(BookContext);
	const [shelf, setShelf] = useState<ShelfI>({ read: [], currentlyReading: [], wantToRead: [] });

	useEffect(() => {
		const booksByShelf: any = _.groupBy(books, (book: BookI) => book.shelf);
		setShelf(booksByShelf);
	}, [books]);

	return (
		<div>
			<HeaderContainer/>
			
			{
				!_.isEmpty(shelf) ?
					<div className="container mx-auto">
						<Shelf title={'Currently Reading'} books={shelf.currentlyReading}/>
						<Shelf title={'Want To Read'} books={shelf.wantToRead}/>
						<Shelf title={'Read'} books={shelf.read}/>
					</div>
					: null
			}
		</div>
	);
};

export default HomeContainer;