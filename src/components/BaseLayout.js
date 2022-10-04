import React, {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import Contact from "./contact/Contact";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(true);
   const actualYear = new Date().getFullYear();

   useEffect(() => {
      const mode = localStorage.getItem('darkMode');
      console.log(mode);
      setDarkMode(JSON.parse(mode));
   }, []);

   function handleClick() {
      setDarkMode(!darkMode);
      localStorage.setItem('darkMode', JSON.stringify(!darkMode));
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'block'} p={'20px'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About isDarkMode={darkMode}/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio isDarkMode={darkMode}/>}/>
                  <Route exact path={'/contact'} element={<Contact isDarkMode={darkMode}/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>Made with &hearts; by Mario Babinec</p>
                  <p>&copy; 2020 - {actualYear}</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

