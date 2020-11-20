import React from "react"
import { graphql, Link } from "gatsby"
import BEMHelper from "react-bem-helper"
import "../scss/home.scss"

const bem = new BEMHelper('home');

const Home = ({ data }) => (
  <main {...bem()}>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.slug}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  </main>
);

export default Home;

export const query = graphql`
query IndexPage {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString:"MM DD, YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`;
