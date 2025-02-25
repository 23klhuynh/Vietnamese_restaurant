import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>PAGE NOT FOUND</h2>
      <Link to="/" className="not-found-btn">HOME</Link>
    </div>
  );
}

export default NotFound;
