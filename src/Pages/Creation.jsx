import { useState } from "react";

function Creation({ data, addDataArray }) {
    const [inputObject, setInputObject] = useState({
        name: "",
        age: "",
        gender: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setInputObject((prev) => ({ ...prev, [name]: value }));
    }

    function addToData() {
        if (!inputObject.name || !inputObject.age || !inputObject.gender) {
            alert("Please Fill out every thing");
            return;
        }

        addDataArray(inputObject);
        setInputObject({ name: "", age: "", gender: "" });
    }

    return (
        <div className="create-container">
            <h1>Create Crew</h1>
            <div className="create-card-container">
                <h2>container</h2>
                <div className="card">
                    <label htmlFor="">
                        Name:{" "}
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Crew Name"
                            value={inputObject.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="">
                        Age:{" "}
                        <input
                            name="age"
                            type="number"
                            placeholder="Enter Crew Age"
                            value={inputObject.age}
                            onChange={handleChange}
                        />
                    </label>
                    <div className="gender-radios">
                        <label htmlFor="">
                            <input
                                name="gender"
                                type="radio"
                                value="male"
                                checked={inputObject.gender === "male"}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label htmlFor="">
                            <input
                                name="gender"
                                type="radio"
                                value={"female"}
                                checked={inputObject.gender === "female"}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                    <button className="create-btn" onClick={addToData}>
                        Create Crew
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Creation;
