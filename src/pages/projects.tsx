import React from 'react'
import {graphql} from 'gatsby'
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';


import './normalize.css';
import '../Components/Header.scss';
import * as styles from './Index.module.scss';




export default class ProjectsPage extends
React.Component{
    public render() {
        return (
        <div className={styles.Body}>
        <Header />
            <div className={styles.Container}>
                <h1>Projects</h1>
                <h3>These are sites I’ve built and worked on recently:</h3>
                <ul className={styles.listUnstyled}>
                    <li>
                        <a className={styles.link} href="https://www.lumiere-festival.com/" target="_blank">Lumiere</a>
                    </li>
                    <li>Perennial Garden Vue app for Hawaii arts instalation (in development)</li>
                    <li>
                        <a className={styles.link} href="https://www.fairfield.co.uk/" target="_blank">Fairfield Halls</a>
                    </li>
                    <li>Snozone (not live)</li>
                    <li>Harrypotter - 
                        <a className={styles.link} href="https://www.harrypottertheplay.com/uk/" target="_blank">us</a>, 
                        <a className={styles.link} href="https://www.harrypottertheplay.com/us/" target="_blank">uk</a>,
                        <a className={styles.link} href="https://www.harrypottertheplay.com/au/" target="_blank">au</a>,
                        <a className={styles.link} href="https://www.harry-potter-theater.de/" target="_blank">de</a>
                    </li>
                    <li>Ny empire</li>
                    <li>
                        <a href="https://www.theviewfromtheshard.com/" className={styles.link} target="_blank">The View from The Shard</a>
                    </li>
                    <li>Skatepal</li>
                    <li>FreeMovement Skateboarding</li>
                    <li>Eightwire</li>
                    <li>Lockley Concrete</li>
                    <li>Coach Approach</li>
                </ul>
                <h3>Javascript projects:</h3>
                <p>WesBos, Tyler, Andrew Mead projects</p>
            <p>This site andrewbe.me uses GraphQL, React, Gatsby and Typescript (gotta be proud of yourself!)
                You can see various projects and apps I work on in my freetime on my <a href="https://github.com">github</a></p>
            </div>
         <Footer />
         </div>
        )
    }
}
