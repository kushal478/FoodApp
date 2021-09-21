import React, { useRef, useState, useEffect } from "react";

const ForgotPassowrd = () => {


    const [name, setName] = useState('Ravi');
    const input = useRef();

    useEffect(() => {
        input.current.onkeyup = handleChange;
        input.current.value = name;
    });

    function handleChange(e) {
        e.preventDefault();

        setName(e.target.value);
    }

    return (
        <React.Fragment     >
            <div>
                Name:
                <input type='text' ref={input} />
            </div>
            <div>Name is: {name}</div>
        </React.Fragment>
    );




    // const [name, setname] = useState("");
    // const nameChange = e => {
    //     setname(e.target.value);
    // };

    // // const nameChange = e => {
    // //     setname({ name: e.target.value });
    // // };

    // return (
    //     <div className="App">
    //         <input value={name} onChange={nameChange}
    //             placeholder="Name" />
    //         <button disabled={!name}>Search</button>
    //     </div>
    // );

}

export default ForgotPassowrd;




// import React, { useState } from "react";

// // Regex to check valid email
// const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

// const ForgotPassowrd = () => {
//     const [emailId, setemailId] = useState("");
//     //State to disable/enable continue button
//     const [disableBtn, setDisableBtn] = useState(false);
//     const forgotPasswordClick = (event) => { };
//     const handleSubmit = e => {
//         e.preventDefault();
//         // Do whatever you want to do after you click submit button
//         console.log("login successfull")
//     }
//     const handleChange = e => {
//         setemailId(e.target.value);
//         setDisableBtn(validEmail.test(e.target.value));
//     }

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-4">
//                     <div className="NewPassword-form form_wrapper">
//                         <div className="form-body">
//                             {/* Remove action and use onSubmit handler*/}
//                             <form onSubmit={handleSubmit}>
//                                 <div>
//                                     <div className="form-group">
//                                         <label htmlFor="password">Email-Id</label>
//                                         <div className="input-group">
//                                             {/* Introduced name attribute to help you with handleSubmit handler*/}
//                                             <input name="email" type="text" className="form-control" value={emailId} onChange={(event) =>
//                                                 setemailId(event.target.value)} />
//                                         </div>
//                                     </div>
//                                     <button onClick={forgotPasswordClick} className="btn btn-lg 
//             btn-block" disabled={disableBtn}>Continue</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ForgotPassowrd;