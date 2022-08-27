import React from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {AiFillCustomerService} from 'react-icons/ai'
import {MdOutlineMessage} from 'react-icons/md'
import { useState } from "react";

import './nav.styles.css';
const Nav=()=>
{
    const [ActiveNav,setActiveNav]=useState('#');

    return(
    <nav>
    <a href="#" onClick={()=>setActiveNav('#')}className={ActiveNav==='#'?"active":""} ><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setActiveNav('#about')}className={ActiveNav==='#about'?"active":""}><AiOutlineUser/></a>
    <a href="#experience"onClick={()=>setActiveNav('#experience')}className={ActiveNav==='#experience'?"active":""} ><BsFillBookmarkStarFill/></a>
    <a href="#Services" onClick={()=>setActiveNav('#Services')}className={ActiveNav==='#Services'?"active":""}><AiFillCustomerService/></a>
    <a href="#contact" onClick={()=>setActiveNav('#contact')}className={ActiveNav==='#contact'?"active":""}><MdOutlineMessage/></a>
       </nav>
    );
}
export  default Nav;
