import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageRegister from "./pages/PageRegister";
import PageLogin from "./pages/PageLogin";
import PageDashboard from './pages/PageDashboard.jsx'
import Layout from "./pages/Layout";
import PageCustomer from "./pages/PageCustomer.jsx";
import PageProducts from "./pages/PageProducts.jsx";
import PageTransactions from "./pages/PageTransactions.jsx";

function App() {
   
  return (
       <BrowserRouter>
            <Routes>
              <Route path = "/" element = {<PageLogin></PageLogin>}></Route>
               <Route path = "/register" element = {<PageRegister></PageRegister>}></Route>
                <Route element={<Layout />}>
                      <Route path="/dashboard" element={<PageDashboard></PageDashboard>} />
                      <Route path="/customers" element={<PageCustomer></PageCustomer>} />
                      <Route path = "/products" element={<PageProducts></PageProducts>}/>
                      <Route path = "/transactions" element={<PageTransactions></PageTransactions>}/>
                  </Route>
            </Routes>
        </BrowserRouter>
    
  );
}
export default App
