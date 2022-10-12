import { BookI } from './BookInterface';

export interface ShelfI {
	read: BookI[],
	wantToRead: BookI[],
	currentlyReading: BookI[],
}