import * as React from 'react';
import './Footer.scss'

let socialItems=['linkedin', 'github', 'spotify']
export const Footer: React.StatelessComponent<{}> = () => {
    return (
        <div className="footer">
                <p>&copy; andrewbeme </p>
                <ul className="social-nav">
                    {
                        socialItems.map( (social) => {
                            return <li>{social}</li>
                        })
                    }
                </ul>
        </div>
    )
}