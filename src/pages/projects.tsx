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
                <h3>These are sites I’ve built and worked on worked on recently:</h3>
                <ul>
                    <li>Lumiere</li>
                    <li>Perennial Garden Vue app for Hawaii arts instalation (in development)</li>
                    <li>Snozone</li>
                    <li>Harrypotter - us, uk, au</li>
                    <li>Ny empire</li>
                    <li>The shard</li>
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
