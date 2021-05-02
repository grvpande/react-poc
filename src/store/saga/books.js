import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_BOOKS, FETCH_BOOKS_SUCCESS, SET_LOADER_TRUE, SET_LOADER_FALSE, SET_ACTIVE_BOOK, SET_ACTIVE_BOOK_SUCCESS } from '../actions';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* fetchBook() {
	yield put({ type: SET_LOADER_TRUE});
	yield delay(1000);
	const books = yield call(axios.get, '/api/books');
	yield put({ type: FETCH_BOOKS_SUCCESS, books: books.data.books});
	yield put({ type: SET_LOADER_FALSE});
}

/* It could be a direct action as well */
function* setActiveBook(action) {
	yield put({
		type: SET_ACTIVE_BOOK_SUCCESS,
		book: action.book
	})
}


export default function* bookSaga() {
	yield takeLatest(FETCH_BOOKS, fetchBook);
	yield takeLatest(SET_ACTIVE_BOOK, setActiveBook);
}