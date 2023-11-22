import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configuration from './pages/Configuration';
import Sortition from './pages/Sortition';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuration />}/>
          <Route path='/sorteio' element={<Sortition />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;