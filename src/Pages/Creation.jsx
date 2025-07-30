function Creation() {
    // const []
    return (
        <div className="create-container">
            <h1>Create Crew</h1>
            <div className="create-card-container">
                <div className="card">
                    <label htmlFor="">
                        Name:{" "}
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Crew Name"
                        />
                    </label>
                    <label htmlFor="">
                        Age:{" "}
                        <input
                            name="age"
                            type="number"
                            placeholder="Enter Crew Age"
                        />
                    </label>
                    <div className="gender-radios">
                        <label htmlFor="">
                            <input name="gender" type="radio" value="male" />
                            Male
                        </label>
                        <label htmlFor="">
                            <input
                                name="gender"
                                type="radio"
                                value={"female"}
                            />
                            Female
                        </label>
                    </div>
                    <button className="create-btn">Create Crew</button>
                </div>
            </div>
        </div>
    );
}

export default Creation;
