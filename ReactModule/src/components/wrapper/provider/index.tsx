import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '../../../themes';
import GlobalStyle from '../../../themes/GlobalStyle';

export default function AppGlobalProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

AppGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
