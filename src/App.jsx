import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Creation from "./Pages/Creation";
import Gallery from "./Pages/Gallery";
import Layout from "./Layout";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const menu = (
        <>
            <h1 style={{ color: "#b68d40" }}>Food Recipes</h1>
            {/* your menu buttons like home, search, etc. */}
        </>
    );

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout menu={menu} />}>
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
