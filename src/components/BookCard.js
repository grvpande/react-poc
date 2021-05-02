export default function BookCard(props) {
  const { title, subtitle, price, image, isbn13, quickView } = props;

	return (
    <div className="col mb-4">
      <div className="card rounded-3 shadow-sm h-100">
        <div className="card-header py-3">
          <img 
            className="bd-placeholder-img card-img-top"
            alt={title}
            src={image}
            style={{maxHeight: '170px', objectFit: 'cover'}}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {title}
          </h5>
          <h6 className="card-text">
            { subtitle }
          </h6>

          <button
            type="button"
            className="w-100 btn btn-lg btn-primary mt-3 mb-3"
            
          >
            See details
          </button>
          <button
            type="button"
            className="w-100 btn btn-lg btn-outline-primary"
            onClick={() => quickView(isbn13)}
          >
            Quick view
          </button>
        </div>
      </div>
    </div>
	);
}