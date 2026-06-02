import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Mezieres from './pages/Mezieres';
import Dionisio from './pages/Dionisio';
import Apolo from './pages/Apolo';
import Junquera from './pages/Junquera';
import Lowen from './pages/Lowen';
import Nietzsche from './pages/Nietzsche';
import Patanjali from './pages/Patanjali';
import Rolf from './pages/Rolf';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="mezieres" element={<Mezieres />} />
          <Route path="dionisio" element={<Dionisio />} />
          <Route path="apolo" element={<Apolo />} />
          <Route path="junquera" element={<Junquera />} />
          <Route path="lowen" element={<Lowen />} />
          <Route path="nietzsche" element={<Nietzsche />} />
          <Route path="patanjali" element={<Patanjali />} />
          <Route path="rolf" element={<Rolf />} />
          {/* Add other routes here later */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
