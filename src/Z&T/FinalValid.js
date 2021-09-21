
import React, { useState } from 'react';

const DemoForm = () => {
    const [input, setinput] = useState("");
    const [error, seterror] = useState({});
    // handleChange = (event) => {
    //     ``
    //     let input = this.state.input;
    //     input[event.target.name] = event.target.value;

    //     this.setState({
    //         input
    //     });
    // }
    const handleChange = (event) => {
        setinput(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            setinput("");
            alert('Demo Form is submited');
        }
    }
    // handleSubmit = (event) => {
    //     event.preventDefault();

    //     if (this.validate()) {
    //         console.log(this.state);
    //         let input = {};
    //         input["phone"] = "";
    //         this.setState({ input: input });

    //         alert('Demo Form is submited');
    //     }
    // }
    const validate = () => {
        let input = input;
        let errors = {};
        if (!input["phone"]) {
            let isValid = false;
            alert("please enter phone number")
        }
        if (typeof input["phone"] !== "undefined") {

            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input["phone"])) {
                let isValid = false;
                errors["phone"] = "Please enter only number.";
            } else if (input["phone"].length != 10) {
                let isValid = false;
                errors["phone"] = "Please enter valid phone number.";
            }
        }
        seterror(errors)
        // return isValid;

    }
    // validate() {
    //     let input = this.state.input;
    //     let errors = {};
    //     let isValid = true;



    //     if (!input["phone"]) {
    //         isValid = false;
    //         errors["phone"] = "Please enter your phone number.";
    //     }

    //     if (typeof input["phone"] !== "undefined") {

    //         var pattern = new RegExp(/^[0-9\b]+$/);
    //         if (!pattern.test(input["phone"])) {
    //             isValid = false;
    //             errors["phone"] = "Please enter only number.";
    //         } else if (input["phone"].length != 10) {
    //             isValid = false;
    //             errors["phone"] = "Please enter valid phone number.";
    //         }
    //     }

    // if (!input["comment"]) {
    //     isValid = false;
    //     errors["comment"] = "Please enter your comment.";
    // }

    //     this.setState({
    //         errors: errors
    //     });

    //     return isValid;
    // }


    return (
        <div>
            <h1>React Validation For Phone Number Example - ItSolutionStuff.com</h1>
            <form onSubmit={handleSubmit}>



                <div class="form-group">
                    <label for="Phone">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={input}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Enter phone"
                        id="email" />

                    {/* <div className="text-danger">{errors.phone}</div> */}
                </div>

                <input type="submit" value="Submit" class="btn btn-success btn-sm" />
            </form>
        </div>
    );

}


export default DemoForm;