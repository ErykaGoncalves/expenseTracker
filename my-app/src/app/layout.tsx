'use client';

import { CssBaseline, Container, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import './globals.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3DCF40',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
