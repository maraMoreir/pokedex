import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Error404, Home } from './pages';
import { dark } from './theme';
import { ResetCss } from './theme/globalStyles';

export const AppRoutes = () => {
  return (
    <ThemeProvider theme={dark()}>
      <ResetCss/>
      <Router>
        <Routes>
          <Route path="/*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </ThemeProvider>
  );
};
