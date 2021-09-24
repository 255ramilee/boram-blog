import React, {FunctionComponent} from "react";
import Layout from "../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/components/layout";
import {Container, Grid} from "../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/components/common";
import {Post} from "../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/utils/models";
import {Card} from "../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/components/card";
import styled from "styled-components";
import TagList from "../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/components/tag-list";
import {Link} from "gatsby";
import SidebarContent from "../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/components/sidebar-content";
import SEO from "../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/components/seo";
import Theme from "../styles/theme";
import {PostsContainer} from "./style";

interface PostsPageProps {
  pathContext: {
    posts: Post[];
    postsPerPage: number;
  };
  location: Location;
}

const HomeContainer = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) .25fr;
  grid-column-gap: 30px;

  @media (max-width: ${Theme.breakpoints.xl}) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  width: 315px;
  padding-top: 30px;

  @media (max-width: ${Theme.breakpoints.xl}) {
    margin: 30px auto;
    border-top: 2px #e5eff5 solid;
    padding: 20px;
    width: 100%;
  }
`;

const ArchiveLinkWrapper = styled.div`
  grid-column: 1 / -1;
  text-align: center;
`;

const ArchiveLink = styled(Link)`
  font-size: .8em;
  padding: 10px;
  border-radius: .3em;
  transition: background-color .5s;
  background-color: #f2f2f2;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const PostsPage: FunctionComponent<PostsPageProps> = ({ pathContext, location }) => {
  const posts = pathContext.posts.slice(0, pathContext.postsPerPage);

  return (
    <Layout>
      <SEO location={location} type={`WebSite`} />
      <HomeContainer>
        <PostsContainer>
          {posts.map((post, index) => (
            <Card
              title={post.frontmatter.title}
              path={post.frontmatter.path}
              featuredImage={post.frontmatter.featuredImage ? post.frontmatter.featuredImage.childImageSharp : null}
              content={post.frontmatter.excerpt}
              key={index}
              meta={
                {
                  time: post.frontmatter.created,
                  timePretty: post.frontmatter.createdPretty,
                  tag: post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null,
                }
              }
              style={{gridArea: index === 0 ? 'latest' : undefined}}
              halfImage={index === 0}
            />
          ))}
          <ArchiveLinkWrapper>
            <ArchiveLink to={`/archive`}>More posts</ArchiveLink>
          </ArchiveLinkWrapper>
        </PostsContainer>
        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </HomeContainer>
      <TagList />
    </Layout>
  );
};

export default PostsPage;
