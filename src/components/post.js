import React from "react"
import { graphql } from "gatsby"
import BEMHelper from "react-bem-helper"
import "../scss/post.scss"

const bem = new BEMHelper('post');

const Post = ({ data: { markdownRemark: post} }) => (
  <article {...bem()}>
    <h1>{post.frontmatter.title}</h1>
    <main dangerouslySetInnerHTML={{ __html: post.html }}></main>
  </article>
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
