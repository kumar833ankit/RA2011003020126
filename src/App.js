import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllTrains from './components/AllTrains';
import SingleTrain from './components/SingleTrain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllTrains />} />
        <Route path="/train/:id" element={<SingleTrain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;