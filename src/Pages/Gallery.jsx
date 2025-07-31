function Gallery({ data }) {
    console.log(data);
    if (!data) return;
    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="gallery-cards-container">
                {data.map((item, id) => (
                    <div key={id} className="gallery-card">
                        <p>Name: {item.name}</p>
                        <p>Age: {item.age}</p>
                        <p>Gender: {item.gender}</p>
                        <div className="btn-divs">
                            <button className="edit-btn">Edit</button>
                            <button className="edit-btn">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
