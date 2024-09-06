import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetallesContainer from "./components/ItemDetallesContainer/ItemDetallesContainer";
import Error from "./pages/Error";

function App (){
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
               <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
                <Route path="/item/:itemid" element={<ItemDetallesContainer/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;