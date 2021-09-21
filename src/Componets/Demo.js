import * as React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NavBar from './NavBar';
import MenuIcon from '@mui/icons-material/Menu';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import cart from '../assets/food-app-img/cart.png';

import HomeIcon from '@material-ui/icons/Home';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import CallIcon from '@material-ui/icons/Call';
import foodHome from '../assets/food-app-img/foodHome.png'


import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TemporaryDrawer() {


    const useStyles = makeStyles((theme) => ({
        search: {
            position: 'relative',
            height: '30px',
            boxShadow: '-1px 2px 5px 0 #bfbfbf',
            borderRadius: '30px',
            display: 'flex',
            padding: " 0!important",
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            borderRadius: '10px',
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        root: {
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }));


    const classes = useStyles();

    const [state, setState] = React.useState({
        left: false,
    });

    const [alignment, setAlignment] = React.useState('right');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="">
                <div className="text-center">
                    <img src={foodHome} className="logo-img img-fluid " alt="logo..." />
                </div><Divider />
                <div className="">
                    <Toolbar>
                        <div className={classes.search} id="search-box">
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <div className="cart">
                                <img src={cart} />
                            </div>
                        </div>
                    </Toolbar>
                </div>
                <div className="drawer">

                    <Typography className={classes.root} className="  row d-flex  justify-content-around">
                        <div className="col-md-3 m-3 d-flex">
                            <div className="mr-4 "><HomeIcon /></div>
                            <div className="drawer"> <Link onClick={toggleDrawer(anchor, false)} href="#" color="inherit" className="">
                                Home
                            </Link></div>
                        </div>
                        <div className="col-md-3 m-3 d-flex">
                            <div className="mr-4 "><FastfoodIcon /></div>
                            <div className="drawer"> <Link onClick={toggleDrawer(anchor, false)} href="#" color="inherit" className="">
                                Dishes
                            </Link></div>
                        </div>
                        <div className="col-md-3 m-3 d-flex">
                            <div className="mr-4 "><EmojiTransportationIcon /></div>
                            <div className="drawer"> <Link onClick={toggleDrawer(anchor, false)} href="#" color="inherit" className="">
                                Restaurants
                            </Link></div>
                        </div>
                        <div className="col-md-3 m-3 d-flex">
                            <div className="mr-4 "><CallIcon /></div>
                            <div className="drawer"> <Link onClick={toggleDrawer(anchor, false)} href="#" color="inherit" className="">
                                Contact
                            </Link></div>
                        </div>

                        {/* <Link href="#" color="success.main" className="col-md-3 my-3 navbar-item">
                            Dishes
                        </Link>
                        <Link href="#" color="inherit" className="col-md-3 my-3 navbar-item">
                            Restaurants
                        </Link>
                        <Link href="#" color="inherit" className="col-md-3 my-3 navbar-item">
                            Contact
                        </Link> */}
                    </Typography>
                </div>

            </div>
            {/* <List>
                {['Home', 'Restorant', 'Dishes', 'Contact'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    return (
        <div className="">
            <div className="button-menu-mobile fixed-top open-right" >
                {['left'].map((anchor) => (
                    <div className="toggel-btn text-right ">
                        <ToggleButton onChange={toggleDrawer(anchor, true)}>
                            <MenuIcon />
                        </ToggleButton>
                        <Drawer
                            // anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </div>
                ))}
            </div>
        </div>
    );
}















// import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import AppBar from '@material-ui/core/AppBar';
// // import Stack from '@material-ui/core/Stack';



// const useStyles = makeStyles((theme) => ({

//     flexGrow: {
//         flex: '1',
//     },
//     button: {
//         backgroundColor: '#3c52b2',
//         color: '#fff',
//         '&:hover': {
//             backgroundColor: '#fff',
//             color: '#3c52b2',
//         },
//     },


//     search: {
//         position: 'relative',
//         height: '50px',
//         boxShadow: '-1px 2px 5px 0 #bfbfbf',
//         borderRadius: '30px',
//         height: "50px",
//         display: 'flex',
//         padding: " 0!important",
//     },
//     searchIcon: {
//         padding: theme.spacing(0, 2),
//         height: '100%',
//         position: 'absolute',
//         pointerEvents: 'none',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     inputRoot: {
//         color: 'inherit',
//     },
//     inputInput: {
//         borderRadius: '10px',
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },

// }));

// export default function PrimarySearchAppBar() {
//     const classes = useStyles();


//     return (
//         <div >
//             {/* <Stack spacing={2} direction="row">
//                 <Button variant="text">Text</Button>
//                 <Button variant="contained">Contained</Button>
//                 <Button variant="outlined">Outlined</Button>
//             </Stack> */}

//             <Toolbar>


//                 <Button className={classes.button}>
//                     Button 1
//                 </Button>
//                 <Button className={classes.button}>
//                     Button 2
//                 </Button>
//             </Toolbar>




//             <Toolbar>
//                 <div className={classes.search} id="search-box">
//                     <div className={classes.searchIcon}>
//                         <SearchIcon />
//                     </div>
//                     <InputBase
//                         placeholder="Search…"
//                         classes={{
//                             root: classes.inputRoot,
//                             input: classes.inputInput,
//                         }}
//                         inputProps={{ 'aria-label': 'search' }}
//                     />
//                 </div>
//             </Toolbar>

//         </div >
//     );
// }


// import React from 'react';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import { Typography } from '@material-ui/core';


// export default function BackgroundColor() {
//     return (
//         <Grid container spacing={1}>




//             <Typography>
//                 <Box component="h2" color="success.main"> Download the App Click and Enjoy your Meal</Box>
//                 Get Bonus
//                 Get stamps, promotions, discounts,
//                 news and more through our
//                 newsletters and social channels

//                 Your warranty
//                 Great service, absolutely free
//                 Authentic user reviews

//                 Your benefits
//                 2600+ partner restaurants to choose from
//                 Pay in cash or online
//                 Order where you want, whenever you want


//             </Typography>
{/* <Typography>
                            <Box component="h2" color="success.main"></Box>
                            Get Bonus
                            Get stamps, promotions, discounts,
                            news and more through our
                            newsletters and social channels

                            Your warranty
                            Great service, absolutely free
                            Authentic user reviews

                            Your benefits
                            2600+ partner restaurants to choose from
                            Pay in cash or online
                            Order where you want, whenever you want
                        </Typography> */}




//             <Grid item xs={12} sm={4}>
//                 <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
//                     primary.main
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//                 <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
//                     secondary.main
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//                 <Box bgcolor="error.main" color="error.contrastText" p={2}>
//                     error.main
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//                 <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
//                     warning.main
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//                 <Box bgcolor="info.main" color="info.contrastText" p={2}>
//                     info.main
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//                 <Box bgcolor="success.main" color="success.contrastText" p={2}>
//                     success.main
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//                 <Box bgcolor="text.primary" color="background.paper" p={2}>
//                     text.primary
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//                 <Box bgcolor="text.secondary" color="background.paper" p={2}>
//                     text.secondary
//                 </Box>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//                 <Box bgcolor="text.disabled" color="background.paper" p={2}>
//                     text.disabled
//                 </Box>
//             </Grid>
//         </Grid>
//     );
// }



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
// // import itemData from './itemData';
// import image from '../assets/food-app-img/computer.png';


// const useStyles = makeStyles((theme) => ({
//     img1: {
//         display: 'flex',
//         width: 200,
//         height: 200,
//     },

// }));

// // const itemData = [
// //     {
// //         img: image,
// //         title: 'Image',
// //         author: 'author',
// //         cols: 1,
// //     },
// // ];


// export default function Demo() {
//     const classes = useStyles();

//     return (

//         <div className={classes.img1}>
//             <img src={image} />
//         </div>
//     );
// }
