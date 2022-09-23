import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './routes/Categories';
import Books from './routes/Books';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
