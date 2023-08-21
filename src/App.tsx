import {Route, Routes} from "react-router-dom";
import {ProductPage} from "./pages/ProductPage";
import {AboutPage} from "./pages/AboutPage";
import {Navogation} from "./components/Navogation";


function App() {
    return (
        <>
            <Navogation />
            <Routes>
                <Route path="/"  element={ <ProductPage /> }/>
                <Route path="/about"  element={ <AboutPage /> }/>
            </Routes>
        </>
    )
}
export default App;
