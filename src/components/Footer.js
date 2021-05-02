const gotoHeader = () => window.scrollTo(0,0);


export default function Footer() {
	return (
		<footer className="blog-footer">
		  <p>&copy; 2021 Book Store</p>
		  <p>
		    <button className="btn btn-unstyled" onClick={gotoHeader}>Back to top</button>
		  </p>
		</footer>
	);
}