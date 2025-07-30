import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Creation from "./Pages/Creation";
import Gallery from "./Pages/Gallery";
import Layout from "./Layout";
import "./App.css";
// import

function App() {
    const [countArray, setCountArray] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout menu={<Menu />} />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/creation" element={<Creation />} />
                    <Route path="/gallery" element={<Gallery />} />
                    {/* <Route path="/recipe/:id" element={<FoodRecipe />} /> */}
                    <Route path="*" element={<div>Not Found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

function Menu() {
    return (
        <div className="menu">
            <h2>
                <Link to={"/"}>Home</Link>
            </h2>
            <h2>
                <Link to={"/creation"}>Create Crew</Link>
            </h2>
            <h2>
                <Link to={"/gallery"}>Gallery</Link>
            </h2>
        </div>
    );
}
