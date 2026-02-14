import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormLogin from './components/FormLogin';
import PageRegister from "./pages/PageRegister";
import PageLogin from "./pages/PageLogin";

function App() {
   
  return (
       <BrowserRouter>
            <Routes>
              <Route path = "/" element = {<PageLogin></PageLogin>}></Route>
               <Route path = "/register" element = {<PageRegister></PageRegister>}></Route>
            </Routes>
        </BrowserRouter>
    
  );
}
export default App
