import { Link } from 'react-router-dom';

export default function Error() {
	return (
	 <div className="jumbotron">
	  <h1 className="display-4">Page Not Found!</h1>
	  <Link className="btn btn-primary btn-lg" to="/" role="button">Go back</Link>
	</div>
	);
}