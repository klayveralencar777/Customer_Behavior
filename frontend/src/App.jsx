import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormLogin from './components/FormLogin';
import PageRegister from "./pages/PageRegister";
import PageLogin from "./pages/PageLogin";
import PageDashboard from "./pages/PageDashboard";

function App() {
   
  return (
       <BrowserRouter>
            <Routes>
              <Route path = "/" element = {<PageLogin></PageLogin>}></Route>
               <Route path = "/register" element = {<PageRegister></PageRegister>}></Route>
               <Route path = "/dashboard" element = {<PageDashboard></PageDashboard>}></Route>
            </Routes>
        </BrowserRouter>
    
  );
}
export default App
