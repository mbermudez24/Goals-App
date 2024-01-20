
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout';
import List from './components/list/List';
import Details from './components/new/Details';
import NotFound from './components/shared/NotFound';
import Modal from './components/shared/Modal';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<List />} />
        <Route path='/list' element={<List />}>
          <Route path='/list/:id' element={<Modal />} />
        </Route>
        <Route path='/new' element={<Details />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
