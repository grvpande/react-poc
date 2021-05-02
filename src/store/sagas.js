import { all } from 'redux-saga/effects';

import bookSaga from './saga/books';

export default function* rootSaga() {
	yield all([
    bookSaga()
  ]);
}