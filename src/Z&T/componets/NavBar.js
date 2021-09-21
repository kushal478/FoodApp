import React from 'react';

class NavBar extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
           <nav className="nav navbar bg-light text-black">
               <a href='/' className="navbar-brand">click here</a>

           </nav>
           </React.Fragment>
        );
    };
};
export default NavBar;




//// function based component:-->
// function NavBar() {
//     return(
//         <React.Fragment>
//             <div>
//                 <h1>hello</h1>
//             </div>

//             <div>
//                 <h1>hello</h1>
//             </div>
            
//         </React.Fragment>
//     );
    
//}

