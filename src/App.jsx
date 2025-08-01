import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Creation from "./Pages/Creation";
import Gallery from "./Pages/Gallery";
import Layout from "./Layout";
import { supabase } from "./Backend/supabaseClient";
import "./App.css";
// import

function App() {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("crews").select("*");
      if (error) {
        console.error("Failed to fetch data:", error.message);
        return;
      }
      setDataArray(data);
    }

    fetchData();
  }, []);

  async function addDataArray(data) {
    const { data: insertedData, error } = await supabase
      .from("crews")
      .insert([data])
      .select();

    if (error) {
      console.error("Supabase insert error:", error.message);
      return;
    }

    // Optional: use the inserted record from Supabase (includes id)
    setDataArray((prev) => [...prev, insertedData[0]]);
  }

  async function updateData(id, editObject) {
    const { error } = await supabase
      .from("crews")
      .update(editObject)
      .eq("id", id);

    if (error) {
      console.error("Supabase update error:", error.message);
      return false;
    }

    setDataArray((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...editObject } : item))
    );

    return true;
  }

  async function deleteData(id) {
    const { error } = await supabase.from("crews").delete().eq("id", id);

    if (error) {
      console.error("Supabase delete error:", error.message);
      return false;
    }

    // Remove from local state
    setDataArray((prev) => prev.filter((item) => item.id !== id));
    return true;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout menu={<Menu />} />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/creation"
            element={<Creation data={dataArray} addDataArray={addDataArray} />}
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
