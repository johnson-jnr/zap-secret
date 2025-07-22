import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import HomeLayout from "./layout/HomeLayout";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>    
    </BrowserRouter>
  )
}

export default App
