import React from 'react';
import {graphql} from 'gatsby'

import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';


import './normalize.css';
import '../Components/Header.scss';
import * as styles from './Index.module.scss';

export default class PlayPage extends
React.Component{
    public render(){
        return (
            <div className={styles.Body}>
            <Header />
            <div className={styles.Container}>
            <h1>Play</h1>
                <p>When I’m not at a desk I like to be outside as much as possible.
                I love exploring the world around me, be it the city or the countryside. </p>
                <p>
                    I try to travel as much as possible, I spent a few years travelling across Asia down to Australia and back through Europe. Understanding new cultures is great and my favourite thing is to try as many of the different foods as I can and to walk around local supermarkets looking at all the products I’ve never seen and heard of.
                </p>
                <p>
                    I’m a keen Skateboarder and Surfer. Through these I have met incredible people around the world that I’m so proud to call my friends.                     
                </p>

                <p>
                    I volunteer when I can. I spent two months in the West Bank of Palestine teaching children to skateboard with Skatepal. In London I was a Home Reading Volunteer with Doorstep library, this was reading books with children who's English might have been falling behind for whatever reason, because reading is great.
                </p>
                <p>
                
                </p>
            
            </div>
            
            <Footer />
            </div>
        )
    }
}