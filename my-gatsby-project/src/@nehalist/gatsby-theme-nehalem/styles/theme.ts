import {DefaultTheme} from '../../../../node_modules/@nehalist/gatsby-theme-nehalem/src/styles/default-theme';

const Theme: DefaultTheme = {
  layout: {
    backgroundColor: `#fafafa`,
    primaryColor: `#a4cbb8`,
    linkColor: `#a4cbb8`,
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `992px`,
    xl: `1300px`,
  },
  fonts: {
    base: `Gowun Dodum, sans-serif`
  },
  components: {
    container: {
      width: `1260px`,
    },
    header: {
      height: `70px`,
      background: `purple`,
    },
  },
};

export default Theme;
