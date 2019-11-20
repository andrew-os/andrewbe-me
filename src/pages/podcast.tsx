import React from 'react';
import {graphql} from 'gatsby'

import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';

import SEO from "../components/Seo"



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
            <SEO title="Andrew Sleigh Podcast Consulting" />
            <Header />
            <div className={styles.Container}>
                <h1>Hello Podcasting</h1>
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