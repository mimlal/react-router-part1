import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
       
        <ul>
          <li><NavLink to="/" style={({isActive})=>{return{backgroundColor:isActive ? 'red':''}}}>Home</NavLink></li>
          <li><NavLink to="/about"  style={({isActive})=>{return{backgroundColor:isActive ? 'red':''}}}>about</NavLink></li>
          <li><NavLink to="/contact"  style={({isActive})=>{return{backgroundColor:isActive ? 'red':''}}}>contact</NavLink></li>
          <li><NavLink to="/post/mobile"  style={({isActive})=>{return{backgroundColor:isActive ? 'red':''}}}>post</NavLink></li>
          <li><NavLink to="/post/mobile/1"  style={({isActive})=>{return{backgroundColor:isActive ? 'red':''}}}>post</NavLink></li>
        </ul>
        </>
    )
}

export default Navbar
