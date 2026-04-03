import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { VariablesPage } from './pages/VariablePage/VariablesPage';
import { VariableDetailPage } from './pages/VariableDetailPage/VariableDetailPage';
import { VariablesProvider } from './context/VariablesContext';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <VariablesProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/variables" element={<VariablesPage />} />
            <Route path="/variables/:variableId" element={<VariableDetailPage />} />
          </Routes>
        </div>
      </VariablesProvider>
    </BrowserRouter>
  );
}
