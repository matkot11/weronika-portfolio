import { Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Projects from './views/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import Footer from './components/Footer/Footer';
import Contact from './views/Contact/Contact';
import GraphicDesign from './views/GraphicDesign/GraphicDesign';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects/graphic-design' element={<GraphicDesign />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
