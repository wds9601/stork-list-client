import React, { Button } from 'react';
import { Link, Switch } from 'react-router-dom';

const Navigation = () => {
    let links = (
        <span>
            <li>
                <Link to='/Login'>Log In</Link>
            </li>
            <li>
                <Link to='/Register'>Sign Up</Link>
            </li>
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
