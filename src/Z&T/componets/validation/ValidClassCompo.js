import React, { Component, useState } from 'react';

const Register = () => {

    const [PhoneNumber, setPhoneNumber] = useState({
        PhoneNumber: null,
        errors: {
            PhoneNumber: '',
        }
    })

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = PhoneNumber.errors;

        switch (name) {
            case 'PhoneNumber':
                errors.PhoneNumber =
                    value.length < 10
                        ? 'Conntact number must be 10 characters long!'
                        : '';
                break;
            default:
                break;
        }
        setPhoneNumber({ errors, [name]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }
    const { errors } = PhoneNumber;

    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div className='PhoneNumber'>
                        <label htmlFor="PhoneNumber">Phone Number</label>
                        <input type='text' name='PhoneNumber' placeholder="Phone Number" onChange={handleChange} noValidate />
                        {errors.PhoneNumber.length > 0 &&
                            <span className='error'>{errors.PhoneNumber}</span>}
                    </div>

                    <div className='submit'>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Register;