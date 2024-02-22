'use client';

import { createTheme, AppBar, Box, Button, ThemeProvider, Toolbar, Link } from '@mui/material';
import { blue } from '@mui/material/colors';
import ProfileIcon from './components/icons/profileIcon';

declare module '@mui/material/styles' {
  // 指定を単純にするためにモバイルとPCの2つに限定する
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
  }
}

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 600,
    },
  },
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar position='fixed'>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link href='/' underline='none' color='inherit'>
                <ProfileIcon fontSize='large' />
              </Link>
            </Box>
            <Button color='inherit' size='small' rel='noopener' href='/blog'>
              Blog
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: '64px',
          background: 'white',
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
