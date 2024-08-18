import "@/styles/globals.css";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import useScreenSize from "@/hooks/useScreenSize";

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif'
  }
})

export default function App({ Component, pageProps }) {

  const isDesktop = useScreenSize();

  if (!isDesktop) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
        <p style={{ fontSize: '24px', color: '#333' }}>
          This website is best viewed on a desktop. Please open it in a web browser on a larger screen.
        </p>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
