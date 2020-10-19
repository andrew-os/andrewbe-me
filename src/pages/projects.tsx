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
                <h2>Experience: 6 years</h2>
                <p>Having worked as a Frontend developer for numerous years I have worked on 100's of websites.</p>
                <p>These are websites I’ve built and worked on recently that showcase different designs, features and coding methods:</p>
                <ul className={styles.listUnstyled}>
                    <li>
                        <a className={styles.link} href="https://andrewbe-nuxt.netlify.app/" target="_blank">This website in Nuxt</a>
                    </li>
                    <li>
                        <a className={styles.link} href="https://punchdrunk.org.uk" target="_blank">Punchdrunk</a>
                    </li>
                    <li>
                        <a className={styles.link} href="https://edgenyc.com/" target="_blank">Edge New York</a>
                    </li>
                    <li>
                        <a className={styles.link} href="https://www.lumiere-festival.com/" target="_blank">Lumiere</a>
                    </li>
                    <li>
                        <a className={styles.link} href="https://pg.nybg.org/#/" target="_blank">New York Perennial Garden</a> (Vue app)
                    </li>
                    <li>
                        <a className={styles.link} href="https://www.fairfield.co.uk/" target="_blank">Fairfield Halls</a>
                    </li>
                    <li>
                        <a className={styles.link} href="https://www.harrypottertheplay.com/" target="_blank">Harrypotter - us/uk/au/de</a>
                    </li>
                    <li>
                        <a href="https://www.theviewfromtheshard.com/" className={styles.link} target="_blank">The View from The Shard</a> (Vue components inc.)
                    </li>
                    <li>
                        <a className={styles.link} href="http://skatepal.co.uk/" target="_blank">Skatepal</a>
                    </li>

                    <li>
                        <a className={styles.link} href="https://eightwire.uk/services/websites/" target="_blank">Eightwire</a>
                    </li>
                    <li>
                        <a className={styles.link} href="https://lockleyconcrete.co.uk/" target="_blank">Lockley Concrete</a>
                    </li>
                    <li>
                       <a className={styles.link} href="https://thecoachapproach.co.uk/" target="_blank"> Coach Approach</a>
                    </li>
                </ul>
                <h3>Javascript projects:</h3>
                <p><a href="https://github-battle-80226.firebaseapp.com/" target="_blank" className={styles.link}>Github Battle App</a>, <a href="https://reactulator-js.herokuapp.com/" className={styles.link} target="_blank">Reactulator</a> in development here on my <a href="https://github.com/andrew-os" className={styles.link} target="_blank">github</a> </p>
                <p>This site <a href="/" className={styles.link}>andrewbe.me</a> uses GraphQL, React, Gatsby and Typescript (gotta be proud of yourself!)</p>
                <p>You can see various projects and apps I work on in my freetime on my <a href="https://github.com/andrew-os" className={styles.link} target="_blank">github</a></p>
            </div>
            
         <Footer />
         </div>
        )
    }
}
