import React from 'react'
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { NavLink } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-sections">
                    <h3 className='hero'>news<span>room</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="social-media-links">
                        <NavLink className='icons'><FaTwitter /></NavLink>
                        <NavLink className='icons'><FaFacebookF /></NavLink>
                        <NavLink className='icons'><FaLinkedinIn /></NavLink>
                        <NavLink className='icons'><FaInstagramSquare /></NavLink>
                        <NavLink className='icons'><FaYoutube /></NavLink>
                    </div>
                </div>
                <div className="footer-sections ">
                    <h3>Categories</h3>
                    <ul className='footer-sections-flex'>
                        <li><NavLink className='icons' to="/politics">Politics</NavLink></li>
                        <li><NavLink className='icons' to="/">Business</NavLink></li>
                        <li><NavLink className='icons' to="/">Coporate</NavLink></li>
                        <li><NavLink className='icons' to="/">Sports</NavLink></li>
                        <li><NavLink className='icons' to="/">Health</NavLink></li>
                        <li><NavLink className='icons' to="/">Education</NavLink></li>
                        <li><NavLink className='icons' to="/">Science</NavLink></li>
                        <li><NavLink className='icons' to="/">Technology</NavLink></li>
                        <li><NavLink className='icons' to="/">Foods</NavLink></li>
                        <li><NavLink className='icons' to="/">Entertainment</NavLink></li>
                        <li><NavLink className='icons' to="/">Travel</NavLink></li>
                        <li><NavLink className='icons' to="/">Lifesyle</NavLink></li>
                    </ul>
                </div>
                <div className="footer-sections ">
                    <h3>Tags</h3>
                    <ul className='footer-sections-flex'>
                        <li><NavLink className='icons' to="/">World</NavLink></li>
                        <li><NavLink className='icons' to="/">U.S.</NavLink></li>
                        <li><NavLink className='icons' to="/">Politics</NavLink></li>
                        <li><NavLink className='icons' to="/">Business</NavLink></li>
                        <li><NavLink className='icons' to="/">Sports</NavLink></li>
                        <li><NavLink className='icons' to="/">Tech</NavLink></li>
                        <li><NavLink className='icons' to="/">Health</NavLink></li>
                        <li><NavLink className='icons' to="/">Science</NavLink></li>
                        <li><NavLink className='icons' to="/">Foods</NavLink></li>
                        <li><NavLink className='icons' to="/">Entertainment</NavLink></li>
                        <li><NavLink className='icons' to="/">Travel</NavLink></li>
                        <li><NavLink className='icons' to="/">Lifestyle</NavLink></li>
                    </ul>
                </div>
                <div className="footer-sections">
                    <h3>Quick Links</h3>
                    <NavLink className='quick-links'><IoIosArrowForward />About</NavLink>
                    <NavLink className='quick-links'><IoIosArrowForward />advertise</NavLink>
                    <NavLink className='quick-links'><IoIosArrowForward />privacy & policy</NavLink>
                    <NavLink className='quick-links'><IoIosArrowForward />terms and conditions</NavLink>
                    <NavLink className='quick-links'><IoIosArrowForward />contact</NavLink>

                </div>
            </footer>
            <div className="footer-bottom">
                <p >Copyright <FaRegCopyright /> 2024 Asif Hussain. All rights reserved.</p>
            </div>
        </>
    )
}
