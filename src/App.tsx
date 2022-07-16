import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home/Home';
import Projects from './Views/Projects/Projects';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
};

export default App;
