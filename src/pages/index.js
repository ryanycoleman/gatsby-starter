import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import ipad from '../assets/images/ipad.png';
import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';

import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = ({ }) => {

// data.allMarkdownRemark.nodes.html

  const data = useStaticQuery(graphql`
    query {
      notion(title: {eq: "About us"}) {
        properties {
          Description {
            value
          }
          Title {
            value
          }
        }
      }
      markdownRemark(frontmatter: {Title: {eq: "About Us"}}) {
        html
      }
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
      allNotion {
        edges {
          node {
            markdownString
            title
          }
        }
      }
    }
  `)


  return (
    <Layout>
      <Header />

      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              {config.subHeading}
            </h2>
            <Scroll type="id" element="about">
              <a href="#about" className="btn btn-primary">
                About
              </a>
            </Scroll>
          </div>
        </div>
      </header>
      

      {/* <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            {data.allNotion.edges.map (({ node }) => (
              <div className="col-lg-8 mx-auto">
                <h2 className="text-white mb-4">{node}</h2>
                <p className="text-white-50">
                  <p>Hello</p>
                </p>
              </div>
            ))}
          </div>
          <img src={ipad} className="img-fluid" alt="" />
        </div>
      </section>    */}

      {/* <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">{data.notion.properties.Title.value}</h2>
              <p className="text-white-50">
                {data.notion.properties.Description.value}
              </p>
            </div>
          </div>
          <img src={ipad} className="img-fluid" alt="" />
        </div>
      </section> */}

      <section id="projects" className="projects-section bg-light">
        <div className="container">
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
              <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>{data.notion.properties.Title.value}</h4>
                <p className="text-black-50 mb-0">
                  {data.notion.properties.Description.value}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img className="img-fluid" src={demoImage1} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Misty</h4>
                    <p className="mb-0 text-white-50">
                    <div
                      className="blog-post-content"
                      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                    />
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {data.allMarkdownRemark.edges.map (({ node }) => (
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
              <img className="img-fluid" src={demoImage2} alt="" />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">{node.frontmatter.title}</h4>
                    <p className="mb-0 text-white-50">
                      <div
                        className="notion-content"
                        dangerouslySetInnerHTML={{ __html: node.html }}
                      />
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
          {/* <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
              <img className="img-fluid" src={demoImage2} alt="" />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">Mountains</h4>
                    <p className="mb-0 text-white-50">
                      Another example of a project with its respective
                      description. These sections work well responsively as well,
                      try this theme on a small screen!
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <Subscribe />

      <SocialLinks />
      <Footer />
    </Layout>
)};

// export const query = graphql`
//   query {
//     notion(title: {eq: "About us"}) {
//       properties {
//         Description {
//           value
//         }
//         Title {
//           value
//         }
//       }
//     }
//   }
// `

export default IndexPage;
