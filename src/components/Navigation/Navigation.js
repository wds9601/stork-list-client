import React from 'react';
import { Link, Switch } from 'react-router-dom';
// import { Button } from 'reactstrap';

const Navigation = () => {
    let links = (
        <span>
            <button className="btn btn-primary">
                <Link to='/Login'>Log In</Link>
            </button>
            <button className="btn btn-primary">
                <Link to='/Register'>Sign Up</Link>
            </button>
        </span>
    );

	return (
		<nav className="navbar" >
            <div className="logo">
                <p>Logo Here</p>
            </div>
            {links}
		</nav>
	);
};

export default Navigation;
