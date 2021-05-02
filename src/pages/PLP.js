import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/Loader';
import BookCard from '../components/BookCard';
import { FETCH_BOOKS, SET_ACTIVE_BOOK } from '../store/actions';

export default function PLP() {
	const { category } = useParams();
	const dispatch = useDispatch();
	const { books, isLoading, selectedBook } = useSelector(store => store.books);
	
	useEffect(() => {
		console.log(category+' found');
		dispatch({ type: FETCH_BOOKS});
	}, [category, dispatch]);


	const quickView = (isbn) => {
		const selectedBook = books.filter(b => b.isbn13 === isbn)[0];
		dispatch({ type: SET_ACTIVE_BOOK, book: selectedBook });
	}
	
	return (
		<>
			{ selectedBook &&
				<>
				<div className="modal-backdrop fade show"></div>
			<div className="modal fade show d-block">
			  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">{ selectedBook.title }</h5>
			        <button
			        	type="button"
			        	className="btn-close"
			        	aria-label="Close"
			        	onClick={() => quickView(null)}
			        >
			        	X
			        </button>
			      </div>
			      <div className="modal-body">
				      <img 
		            className="bd-placeholder-img card-img-top"
		            alt={selectedBook.title}
		            src={selectedBook.image}
		          />
			        { selectedBook.subtitle }
			      </div>
			      <div className="modal-footer">
			        <button
			        	type="button"
			        	className="btn btn-secondary"
			        	onClick={() => quickView(null)}
			        >
			        	Close
			        </button>
			        <button
			        	type="button"
			        	className="btn btn-primary"
			        >
			        	Add to cart
			        </button>
			      </div>
			    </div>
			  </div>
			</div>
			</>}
			<section className="py-5 text-center container">
		    <div className="row py-lg-5">
		      <div className="col-lg-6 col-md-8 mx-auto">
		        <h1 className="fw-light">Books : {category}</h1>
		        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
		      </div>
		    </div>
		  </section>

		  {
				!isLoading ? 
		    <div className="container">
		      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
		        { books.map((book) => <BookCard key={book.isbn13} {...book} quickView={quickView} />) }
		      </div>
		    </div> :
				<Loader />
		  }
	  </>
	);		
}