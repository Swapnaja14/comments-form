import { useState } from "react"
import './CommentsForm.css'
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username cannot be null';
    }

    if (!values.remarks) {
        errors.remarks = 'Remarks cannot be null';
    }

    if (!values.rating) {
        errors.rating = 'Rating cannot be null';
    }

    return errors;
};


export default function CommentsForm({ addNewComment }) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // });


    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
        },
        validate,
        onSubmit: values => {
            addNewComment(values);
            formik.resetForm(); // optional
        }
    });

    // let handleInputData = (event) => {
    //     setFormData((currData) => {
    //         return {...currData, [event.target.name] : event.target.value};
    //     });
    // };


    // let handleSubmit = (event) => {
    //     event.preventDefault();
    //     addNewComment(formData)
    //     console.log(formData);
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5
    //     });
    // };

    return (
        <div className="comments-form">
            <h4>Gives a comment</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Enter your username</label>
                <input
                    placeholder="username"
                    type="text"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    name="username"
                    id="username"
                />
                {/* {formik.errors.username ? <div>{formik.errors.username}</div> : null} */}
                {formik.touched.username && formik.errors.username ? (
                    <div className="error-message">{formik.errors.username}</div>
                ) : null}


                <br></br><br></br>

                <label htmlFor="remarks">Add your remarks- </label>
                <textarea
                    placeholder="Add Remarks"
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
                    name="remarks"
                    id="remarks"></textarea>
                {formik.touched.remarks && formik.errors.remarks ? (
                    <div className="error-message">{formik.errors.remarks}</div>
                ) : null}


                <br></br><br></br>

                <label htmlFor="rating">Give your ratings- </label>
                <input
                    placeholder="rating"
                    type="number"
                    min={1}
                    max={5}
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                    name="rating"
                    id="rating" />
                {formik.touched.rating && formik.errors.rating ? (
                    <div className="error-message">{formik.errors.rating}</div>
                ) : null}


                <br></br><br></br>

                <button
                    // onClick={handleSubmit}
                    type="submit"
                >
                    Add Comment</button>
            </form>
        </div>
    )
}