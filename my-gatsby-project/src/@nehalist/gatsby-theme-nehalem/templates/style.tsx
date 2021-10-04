import styled from "styled-components";
import Theme from "../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/styles/theme";
import {Grid} from "../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/components/common";

export const PostsContainer = styled(Grid)`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-areas: "latest latest" ". .";
width: 100%;
margin:100px 0;

@media (max-width: ${Theme.breakpoints.sm}) {
  display: block;
  padding: 0;

  article {
    margin-bottom: 30px;
  }
}
`;