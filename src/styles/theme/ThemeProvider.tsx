import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes, { InferProps } from 'prop-types';

import { selectTheme, themeSliceKey, reducer } from './slice';

export function ThemeProvider({
  children,
}: InferProps<typeof ThemeProvider.propTypes>) {
  useInjectReducer({ key: themeSliceKey, reducer });
  const theme = useSelector(selectTheme);
  return (
    <OriginalThemeProvider theme={theme}>
      <CssBaseline />
      {React.Children.only(children)}
    </OriginalThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
