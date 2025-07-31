import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Creation from "./Pages/Creation";
import Gallery from "./Pages/Gallery";
import Layout from "./Layout";
import "./App.css";
// import

function App() {
    const [dataArray, setDataArray] = useState([]);
    function handleData() {
        console.log(dataArray);
    }

    function addDataArray(data) {
        setDataArray((prev) => [...prev, data]);
        console.log(dataArray);
    }
    function updateData(id, editObject) {
        console.log(id);
        console.log(editObject);
        setDataArray((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, ...editObject } : item
            )
        );
    }

    function deleteData(id) {
        setDataArray((prev) => prev.filter((item) => item.id !== id));
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout menu={<Menu />} />}>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/creation"
                        element={
                            <Creation
                                data={dataArray}
                                addDataArray={addDataArray}
                            />
                        }
                    />
                    <Route
                        path="/gallery"
                        element={
                            <Gallery
                                data={dataArray}
                                updateData={updateData}
                                deleteData={deleteData}
                            />
                        }
                    />
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
