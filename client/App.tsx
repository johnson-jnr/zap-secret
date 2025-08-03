import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import HomeLayout from './layout/HomeLayout';
import ViewSecretPage from './pages/ViewSecretPage';
import AboutPage from './pages/AboutPage';
import RoutesConfig from './RoutesConfig';

function App() {
    return (
        <BrowserRouter>
            <RoutesConfig />
        </BrowserRouter>
    );
}

export default App;
