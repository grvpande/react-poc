import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<>	
			<header className="blog-header py-3">
			    <div className="row flex-nowrap justify-content-between align-items-center">
			      <div className="col-4">
			        <Link to="/" className="blog-header-logo text-dark">Book Store</Link>
			      </div>
			      <div className="col-4 d-flex justify-content-end align-items-center">
			      	<div className="dropdown">
							  <button className="btn btn-unstyled dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Cart (0)
							  </button>
							  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							    <a className="dropdown-item" href="#">Action</a>
							    <a className="dropdown-item" href="#">Another action</a>
							    <a className="dropdown-item" href="#">Something else here</a>
							  </div>
							</div>
			        <Link className="btn btn-sm btn-outline-secondary" to="/">Sign up</Link>
			      </div>
			    </div>
			  </header>
			<div className="nav-scroller py-1 mb-2">
		    <nav className="nav d-flex justify-content-between">
		      <Link className="p-2 text-muted" to="/books/technology">Technology</Link>
		      <Link className="p-2 text-muted" to="/books/design">Design</Link>
		      <Link className="p-2 text-muted" to="/books/culture">Culture</Link>
		      <Link className="p-2 text-muted" to="/books/business">Business</Link>
		      <Link className="p-2 text-muted" to="/books/politics">Politics</Link>
		      <Link className="p-2 text-muted" to="/books/science">Science</Link>
		      <Link className="p-2 text-muted" to="/books/health">Health</Link>
		      <Link className="p-2 text-muted" to="/books/style">Style</Link>
		      <Link className="p-2 text-muted" to="/books/travel">Travel</Link>
		    </nav>
		  </div>
		</>  
	);
}