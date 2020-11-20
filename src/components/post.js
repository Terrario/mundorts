import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout/Layout"
import BEMHelper from "react-bem-helper"
import "../scss/post.scss"

const bem = new BEMHelper('post');

const Post = ({ data: { markdownRemark: post} }) => (
  <Layout>
    <article {...bem()}>
      <h1>{post.frontmatter.title}</h1>
      <main dangerouslySetInnerHTML={{ __html: post.html }}></main>
    </article>
  </Layout>
);

export default Post;

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
    }
  }
}
`;
