import styles from "./sidenav.module.css"
import React, {useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { navData } from "../lib/navData";

export default function Sidenav() {

    const [selectedMenu, setSelectedMenu] = useState(null);

    const [authenticated, setauthenticated] = useState(null);

    const [open, setopen] = useState(true);

    const toggleOpen = () => {
        setopen(!open)
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
          setauthenticated(loggedInUser);
        }
      }, []);
    
      useEffect(() => {
        if (authenticated === null) {
          setSelectedMenu(null); // Restablecer el estado de selectedMenu a null al cerrar sesión
        }
      }, [authenticated]);
    
      const handleMenuSelect = (menuId) => {
        setSelectedMenu(menuId);
      };
    
      const handleLogout = () => {
        
        localStorage.removeItem("authenticated");
        setauthenticated(null);
        window.location.href = '/'; 
     
      };

      if (!authenticated) {
       
        return null;
      } else {

    return (

        <div className={open?styles.sidenav:styles.sidenavClosed}>

            <button className={styles.menuBtn} onClick={toggleOpen}>

                {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}

            </button>

            { navData.map(item =>{

                return  <NavLink key={item.id} className={styles.sideitem} to={item.link}> 

                        {item.icon} <span className={styles.linkText}>{item.text}</span> 

                        </NavLink>

                })
            }

            <button onClick={handleLogout}>Salir</button>

        </div>

    )
        }
}