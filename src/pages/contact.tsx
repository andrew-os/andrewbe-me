import React from 'react';
import {graphql} from 'gatsby';

import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';


import './normalize.css';
import '../Components/Header.scss';
import * as styles from './Index.module.scss';

export default class ContactPage extends
    React.Component{
        public render() {
            return(
                <div className={styles.Body}>
                <Header />
                <div className={styles.Container}>
                <h1>Contact</h1>
                <p>
                    Its best to contact me on email.<br/>
                    Email me at -  <a href="mailto:andrew.sleighweb@gmail.com" className={styles.link}>andrew.sleighweb@gmail.com</a><br/>
                    I am on my emails through the Mon - Fri week and will usually respond within 24hours.
                </p>
                </div>
                <Footer />
                </div>
            )
        }
    }