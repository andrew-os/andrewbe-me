import * as React from 'react';
import {Link} from 'gatsby';

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`, textDecoration: 'none' }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div className="header">
                <nav>
                    <ul>
                        <ListLink to="/">Home</ListLink>
                        <ListLink to="/work/">Work</ListLink>
                        <ListLink to="/projects/">Projects</ListLink>
                        <ListLink to="/podcast/">Podcasting</ListLink>
                        <ListLink to="/play/">Play</ListLink>
                        <ListLink to="/contact/">Contact</ListLink>

                    </ul>
                    
                </nav>
        </div>
    )
}