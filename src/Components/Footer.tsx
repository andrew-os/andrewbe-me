import * as React from 'react';
import './Footer.scss'

let socialItems=['linkedin', 'github', 'spotify']

let socialLinks = {
    linkedin: 'https://www.linkedin.com/in/asleigh/',
    github: 'https://github.com/andrew-os'
}
export const Footer: React.StatelessComponent<{}> = () => {
    return (
        <div className="footer">
                <p>&copy; andrewbeme </p>
                <ul className="social-nav">
                    <li><a href={socialLinks.linkedin} target="_blank">linkedin</a></li>
                    <li ><a href={socialLinks.github} target="_blank">github</a></li> 
                </ul>
        </div>
    )
}