import React from "react";
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="row">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="row">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>

                <div className="row">
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non nisi vulputate, egestas lectus tincidunt, ultrices urna. Vestibulum convallis mi enim, eu tempus urna tincidunt vel.</span>
                </div>
                <div className="row">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non nisi vulputate, egestas lectus tincidunt, ultrices urna. Vestibulum convallis mi enim, eu tempus urna tincidunt vel. </span>
                </div>
               
            </div>
            <div className="bottom">
                <div className="left">
                    <img src="../img/hm.png" className="hm"></img>
                    <span className="copyrights"> © Copyright 2023 All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="../img/payment.png"></img>
                </div>
            </div>
        </div>

    )
}

export default Footer