import React from 'react'
import {graphql, Link} from 'gatsby'
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import Accordion from '../Components/Accordion';


import './normalize.css';
import '../Components/Header.scss';
import * as styles from './Index.module.scss';




export default class WorkPage extends
React.Component{
    public render() {
        return (
        <div className={styles.Body}>
            <Header />
            <div className={styles.Container}>
                <h1>Work</h1>
                <h2>Experience: 6 years</h2>
                <p>I’ve spent the past three years working purely as a Front End Developer, in London.</p> 
                <p>This was mostly developing sites for Wordpress with the occasional static site or Single Page App.</p> <p>Previous to that I worked as a full stack developer.</p>
                <p>I have worked and developed themes with the following Content Management Systems: Wordpress, SquareSpace, Shopify, Contentful, Netlify.</p> 
                <p>I am currently focussing more on developing engineer patterns within coding, using the latest technologies.</p>
                <p>I actively subscribe to various different mediums to stay current with web and software tech and am always trying to push myself to learn new coding techniques and standards.</p> 
                <br /> 
                <p>You can view my portfolio <Link to="/projects/" className={ styles.link}>here</Link></p>
                <Accordion allowMultipleOpen>
                    <div label='Languages' isOpen>
                        <ul className="accordion__list">
                            <li>HTML5</li>
                            <li>CSS(Sass, grid, Inline, in JS)</li>
                            <li>BEM Markup</li>
                            <li>Bootstrap, Bulma, Tailwind Css</li>
                            <li>Javascript + Frameworks/libraries (ES5, ES6, React, Vue, jQuery, Svelte)</li>
                            <li>SSR (Nuxt.js, Gatsby)</li>
                            <li>Node + Express</li>
                            <li>PHP(mostly now with Twig/Timber framework)</li>
                        </ul>
                    </div>
                    <div label='Basics'>
                            <ul className="accordion__list">
                                <li>Python</li>
                                <li>MongoDB</li>
                                <li>GraphQL</li>
                            </ul>
                    </div>
                    <div label='Testing'>
                        <ul className="accordion__list">
                            <li>Jest and Mocha at entry level</li>
                        </ul>
                    </div>
                    <div label='Work Tooling'>
                        <ul className="accordion__list">
                            <li>Git</li>
                            <li>Gulp</li>
                            <li>Cli</li>
                            <li>Webpack</li>
                            <li>Babel</li>
                            <li>Bitbucket</li>
                            <li>Github</li>
                            <li>Visual Studio Code</li>
                            <li>Photoshop</li>
                            <li>Zeplin</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </Accordion>   

            <p>
                I’m always developing, improving and keen to learn in all walks of life.<br />
                Right now I’m learning: C++, French, Adobe Illustrator, Networking.
            </p>
            <p>I’m a hobbyist White Hat Hacker. I am familiar with Kali Linux / ParrotOS on a VM, The burp suite, Tor Browsing 
                as well as basic Ethical hacking techniques such as SQL injection, Brute Forcing and XSS. 
                I am actively pursuing this path, it’s so much fun!
            </p>
            <p>I have a level one in British Sign Language</p>
            
            </div>
            <Footer />
         </div>
        )
    }
}
