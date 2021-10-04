import styled, {css} from "styled-components";
import {Container} from "../../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/components/common";
import {Link} from "gatsby";

export const StyledFooter = styled.footer`
  max-width: 100%;
  padding: 10px 0;
  z-index: 700;
  position: relative;
  font-size: .9em;
  margin-top: 0;
  color: #f2eee3;
  background-color:#234e45;
`;

export const FooterContainer = styled(Container)`
  text-align: right;
  line-height: 1.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p`
  margin: 0;
`;

export const DesignBy = styled.p`
  margin: 0;
  opacity: .8;
  font-size: .8em;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #000;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const LinkStyle = css`
  color: #f2eee3;
  text-decoration: none;
`;

export const FooterMenuItem = styled.a`
  ${LinkStyle}
`;

export const FooterMenuLink = styled(Link)`
  ${LinkStyle}
`;
