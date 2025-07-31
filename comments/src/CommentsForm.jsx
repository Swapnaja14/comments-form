import { useState } from "react"

export default function CommentsForm () {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    });

    let handleInputData = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        });
    };

    return (
        <div>
            <h4>Gives a comment</h4>
            <form>
                <label htmlFor="username">Enter your username</label>
                <input 
                placeholder="username" 
                type="text"
                value={formData.username}
                onChange={handleInputData}
                name="username"
                id="username"/>

                <br></br><br></br>

                <label htmlFor="remarks">Add your remarks- </label>
                <textarea 
                placeholder="Add Remarks"
                value={formData.remarks}
                onChange={handleInputData}
                name="remarks"
                id="remarks"></textarea>

                <br></br><br></br>

                <label htmlFor="rating">Give your ratings- </label>
                <input 
                placeholder="rating" 
                type="number" 
                min={1} 
                max={5}
                value={formData.rating}
                onChange={handleInputData}
                name="rating"
                id="rating"/>

                <br></br><br></br>

                <button onClick={handleSubmit}>Add Comment</button>
            </form>
        </div>
    )
}