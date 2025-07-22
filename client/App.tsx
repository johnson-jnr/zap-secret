import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import HomeLayout from "./layout/HomeLayout";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<HomeLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>    
    </BrowserRouter>
  )
}

export default App
