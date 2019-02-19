import React from 'react'
import {graphql} from 'gatsby'
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';


import './normalize.css';
import '../Components/Header.scss';
import Accordion from '../Components/Accordion';
import * as styles from './Index.module.scss';




export default class AccordionPage extends
React.Component{
    public render() {
        return (
        <div className={styles.Body}>
        <Header />
            <div className={styles.Container}>
                <Accordion allowMultipleOpen>
                    <div label='Languages' isOpen>
                        <ul>
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
                            <ul>
                                <li>Vue</li>
                                <li>Python</li>
                                <li>MongoDB</li>
                                <li>GraphQL</li>
                            </ul>
                    </div>
                    <div label='Testing'>
                        <ul>
                            <li>Jest, Mocha at entry level</li>
                        </ul>
                    </div>
                    <div label='Work Tooling'>
                        <ul>
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
            </div>
         <Footer />
         </div>
        )
    }
}
