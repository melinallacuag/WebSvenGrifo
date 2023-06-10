import styles from "./sidenav.module.css"
import React, {useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../img/logo_app.png';
import closedLogo from '../img/icon_app.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { navData } from "../lib/navData";

export default function Sidenav() {

    const [selectedMenu, setSelectedMenu] = useState(null);

    const [authenticated, setauthenticated] = useState(null);

    const [open, setopen] = useState(true);

    const logoClass = open ? styles.App_logo : styles.App_logo_closed;

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

            <div className={styles.contenedor_logo}>
            <img src={open ? logo : closedLogo} className={logoClass} alt="logo" />
    
            </div>
                        
            { navData.map(item =>{

                return  <NavLink key={item.id} className={styles.sideitem} to={item.link}> 

                        {item.icon} <span className={styles.linkText}>{item.text}</span> 

                        </NavLink>

                })
            }

            <button className={styles.menuBtn} onClick={toggleOpen}>

            {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}

            </button>

            <button onClick={handleLogout}>Salir</button>

        </div>

    )
        }
}