import { Routes, Route } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ViewSecretPage from './pages/ViewSecretPage';
import PageNotFound from './pages/PageNotFound';

export default function RoutesConfig() {
    return (
        <Routes>
            <Route element={<HomeLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/s/:id" element={<ViewSecretPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}
