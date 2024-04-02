import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{ height: '100px' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Finance Tracker</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/signup" className="btn btn-light me-2">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="btn btn-light me-2">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;