import React from 'react'
import {graphql} from 'gatsby'
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
                <h3>Experience: 5 years.</h3>
                <p>I’ve spent the past two years working purely as a Front End Developer.</p>  
                <p>Previous to that I worked as a full stack developer.</p> 
                <p>I mostly develop sites for Wordpress with the occasional static site or Single Page App.</p>
                 <p>I am currently focussing more on getting away from the Wordpress work flow and developing a more engineer way of coding.</p>
                 <Accordion allowMultipleOpen>
                    <div label='Languages' isOpen>
                        <ul className="accordion__list">
                            <li>HTML5</li>
                            <li>CSS(Sass, grid, Inline, in JS)</li>
                            <li>Bootstrap, Bulma</li>
                            <li>Javascript (Vanilla ES5, ES6,)</li>
                            <li>Jquery</li>
                            <li>React</li>
                            <li>Node + Express</li>
                            <li>PHP(mostly now with Twig/Timber framework)</li>
                        </ul>
                    </div>
                    <div label='Basics'>
                            <ul className="accordion__list">
                                <li>Vue</li>
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
                            <li>Webpack(basic)</li>
                            <li>Babel(basic)</li>
                            <li>Bitbucket</li>
                            <li>Github</li>
                            <li>Visual Studio Code</li>
                            <li>Photoshop</li>
                            <li>Zeplin</li>
                            <li>Sketch</li>
                        </ul>
                    </div>
                </Accordion>   

            <p>

                I’m always developing, improving and keen to learn in all walks of life.<br />
                Right now I’m learning: Node.js, Typescript, React.
            </p>
            <p>I’m a hobbyist White Hat Hacker. I am familiar with Kali Linux on a VM, The burp suite, Tor Browsing 
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
