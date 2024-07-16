import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NewVideo from "../Pages/NewVideo";

function AppRaoutes() {
    return(
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/NuevoVideo" element={<NewVideo/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default AppRaoutes