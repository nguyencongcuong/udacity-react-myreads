import React, { useContext, useState } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { SHELF_LIST } from '../constants/shelfList';
import { BookContext } from '../contexts/BookContext';
import { BookI } from '../interfaces/BookInterface';
import { update } from '../api/BooksAPI';

interface BookProps {
	book: BookI;
}

const Book = ({ book }: BookProps) => {
	const { refreshBooks } = useContext(BookContext);
	const [isShown, setIsShown] = useState(false);

	const handleShelf = (shelf: any) => {
		setIsShown(false);
		update(book, shelf).then(() => {
			refreshBooks();
		});
	};

	return (
		<React.Fragment>
			{
				book
					? <div className={'w-60 rounded shadow rounded overflow-hidden'}>
						<div className={'relative w-full'}>
							{
								<img
									src={(book.imageLinks && book.imageLinks.thumbnail) ? book.imageLinks.thumbnail : 'https://via.placeholder.com/400x600'}
									alt={book.title}
									className={'w-full'}
								/>
							}
							<div className="absolute top-5 right-5 text-white">
								<div
									className="bg-neutral-500 rounded cursor-pointer opacity-90 duration-200 hover:opacity-100"
									onClick={() => setIsShown(!isShown)}
								>
									<AiOutlineEllipsis className={'text-2xl'}/>
								</div>
							</div>

							<div className={`${isShown ? 'block' : 'hidden'} absolute top-16 right-5 bg-neutral-50 rounded text-neutral-800 text-sm mt-2 p-2`}>
								<div className="mb-4">Move to...</div>
								<div className="flex flex-col gap-2">
									{
										SHELF_LIST.map((item, index) => {
											return (
												<div
													key={index}
													className={`${book.shelf === item.key ? 'text-green-600' : 'text-gray-800'} font-bold cursor-pointer opacity-90 hover:opacity-100 duration-200`}
													onClick={() => handleShelf(item.key)}
												>
													{item.name}
												</div>
											);
										})
									}
								</div>
							</div>
						</div>
						<div className="p-4">
							<h3 className={'font-bold uppercase mb-2'}>{book.title}</h3>
							{book.authors &&
                <span className={'font-light text-neutral-600'}>{book.authors.join(', ')}</span>
							}
						</div>
					</div>
					: null
			}
		</React.Fragment>

	);
};

export default Book;