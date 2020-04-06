import React from 'react'
import {graphql} from 'gatsby'
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';


import './normalize.css';
import '../Components/Header.scss';
import * as styles from './Index.module.scss';


interface IndexPageProps {
    data:{
        site:{
            siteMetadata: {
                title: string;
                description: string;
            }
        }
    }
}

export const indexPageQuery = graphql`
    query IndexPageQuery{
        site {
            siteMetadata{
                title
                description
            }
        }
    }
`

export default class IndexPage extends
React.Component<IndexPageProps, {}>{
    public render() {
        return (
        <div className={styles.Body}>
        <Header />
            <div className={styles.Container}>
                <h1>Hello :)</h1>
                <p>
                    My name is Andrew
                </p>
                <p>
                    I’m a web developer of 5 years
                </p>
                <p>
                    I like to code, hack and adventure life away
                </p>   

                <div>
                    <p>Current location: <span style={{borderBottom: "3px solid #D65858"}}>Hawea, NZ</span></p>    
                </div> 
            
            </div>
         <Footer />
         </div>
        )
    }
}
