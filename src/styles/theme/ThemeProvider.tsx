import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectTheme, themeSliceKey, reducer } from './slice';
import { useInjectReducer } from 'redux-injectors';
import CssBaseline from '@material-ui/core/CssBaseline';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useInjectReducer({ key: themeSliceKey, reducer: reducer });

  const theme = useSelector(selectTheme);
  return (
    <OriginalThemeProvider theme={theme}>
      <CssBaseline />
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
