import { useState } from "react";

function Gallery({ data, updateData, deleteData }) {
    console.log(data);
    if (!data) return;
    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="gallery-cards-container">
                {data.map((item, id) => (
                    <CardGallery
                        key={item.id}
                        item={item}
                        updateData={updateData}
                        deleteData={deleteData}
                    />
                ))}
            </div>
        </div>
    );
}

function CardGallery({ item, updateData, deleteData }) {
    const [editMode, setEditMode] = useState(false);
    const [editObject, setEditObject] = useState({
        name: "",
        age: "",
        gender: "",
    });
    // const

    function handleUpdate() {}
    function handleChange(e) {
        const { name, value } = e.target;

        setEditObject((prev) => ({ ...prev, [name]: value }));
    }

    function startEdit() {
        setEditObject({
            name: item.name,
            age: item.age,
            gender: item.gender,
        });

        setEditMode(true);
    }

    function handleConfirm() {
        updateData(item.id, editObject);
        setEditMode(!editMode);
    }

    return (
        <div className="gallery-card">
            {!editMode ? (
                <>
                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                    <p>Gender: {item.gender}</p>
                    <div className="btn-divs">
                        <button
                            className="edit-btn"
                            onClick={() => {
                                startEdit();
                            }}
                        >
                            Edit
                        </button>
                        <button
                            className="edit-btn"
                            onClick={() => deleteData(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                </>
            ) : (
                <div className="edit-card">
                    <p>Edit View</p>

                    <label htmlFor="">
                        Name:{" "}
                        <input
                            name="name"
                            type="text"
                            value={editObject.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="">
                        Age:{" "}
                        <input
                            name="age"
                            type="number"
                            value={editObject.age}
                            onChange={handleChange}
                        />
                    </label>
                    <div className="edit-radio-option">
                        <label htmlFor="">
                            <input
                                name="gender"
                                type="radio"
                                value={"male"}
                                checked={editObject.gender === "male"}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label htmlFor="">
                            <input
                                name="gender"
                                type="radio"
                                value={"female"}
                                checked={editObject.gender === "female"}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                    <div className="edit-btns">
                        <button
                            className="cancel-edit"
                            onClick={() => setEditMode(!editMode)}
                        >
                            Cancel
                        </button>
                        <button className="cancel-edit" onClick={handleConfirm}>
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Gallery;
