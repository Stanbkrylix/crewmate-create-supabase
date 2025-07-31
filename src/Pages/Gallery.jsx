import { useState } from "react";

function Gallery({ data, updateData, deleteData }) {
    const [editMode, setEditMode] = useState(false);
    console.log(data);
    if (!data) return;
    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="gallery-cards-container">
                {data.map((item, id) => (
                    <div key={item.id} className="gallery-card">
                        {!editMode ? (
                            <>
                                <p>Name: {item.name}</p>
                                <p>Age: {item.age}</p>
                                <p>Gender: {item.gender}</p>
                                <div className="btn-divs">
                                    <button
                                        className="edit-btn"
                                        onClick={() => {
                                            setEditMode(!editMode);
                                            updateData(item.id);
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
                            <div>Edit</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
