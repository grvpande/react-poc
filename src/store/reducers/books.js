import { FETCH_BOOKS_SUCCESS, SET_LOADER_TRUE, SET_LOADER_FALSE, SET_ACTIVE_BOOK_SUCCESS } from '../actions';

const initialStore = {
	books: [],
	isLoading: false,
	selectedBook: null
}

export default function reducers(store = initialStore, action) {
	switch(action.type) {
		case SET_LOADER_TRUE:
			return {
				...store,
				isLoading: true
			}
		case SET_LOADER_FALSE:
			return {
				...store, 
				isLoading: false
			}

		case FETCH_BOOKS_SUCCESS:
			return {
				...store,
				books: action.books
			}
		case SET_ACTIVE_BOOK_SUCCESS: 
			return {
				...store,
				selectedBook: action.book
			}
		default:
			return store;
	}
}