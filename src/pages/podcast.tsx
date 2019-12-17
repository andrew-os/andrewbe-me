import React from 'react';
import {graphql} from 'gatsby'

import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';

// import SEO from "../components/Seo"



import './normalize.css';
import '../Components/Header.scss';
import * as styles from './Index.module.scss';

interface Props {
    data: {
      allMarkdownRemark: any
      site: {
        siteMetadata: {
          title: string
        }
      }
    }
  }

  const PodcastPage = ({ data }: Props) => {
    
  
    return (
        <div className={styles.Body}>
           
            <Header />
            <div className={styles.Container}>
                <h1>Hello Podcasting</h1>

                <p>Combining a love for Radio, Film and Podcast with a BSc in Audio and Acoustics, I co-host and produce a weekly movie podcast</p>
                <p>We have hundreds of listeners globally and have a great time doing it - <a href="https://linktr.ee/syncslatesix" target="_blank" className={styles.link}>@syncslatesix</a> </p>

                <p>Having started this from the ground up ourselves, I would like to offer help to any other small business or person looking to have a Podcast</p>
                <p>
                  I can offer information and help with:
                    <ul>
                      <li>Online Hosting</li>
                      <li>Cross platform distrubtion</li>
                      <li>Audio Editing, Mixing and Mastering</li>
                      <li>Software needed</li>
                      <li>Equipment for any budget</li>
                      <li>Recording techniques</li>
                    </ul>
                </p>
            </div>
            <Footer/>
        </div>

    )
  }

  export default PodcastPage

  export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `