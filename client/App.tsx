import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import HomeLayout from "./layout/HomeLayout";
import ViewSecretPage from "./pages/ViewSecretPage";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/s/:id" element={<ViewSecretPage />} />
            </Route>
        </Routes>    
    </BrowserRouter>
  )
}

export default App
