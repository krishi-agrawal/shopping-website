import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.css"

const Slider = () => {
    const data = [
        "https://static.zara.net/photos///2023/I/0/1/p/7901/237/711/2/w/1920/7901237711_9_1_1.jpg?ts=1691489540362",
        "https://static.zara.net/photos///2023/I/0/1/p/1165/690/120/2/w/1920/1165690120_9_1_1.jpg?ts=1693397929989",
        "https://static.zara.net/photos///2023/I/0/1/p/8340/451/112/2/w/1545/8340451112_9_1_1.jpg?ts=1691152512519"
    ];

    const [currentSlide, setSlide] = useState(0);
    const prevSlide = () => {
        setSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    }
    const nextSlide = () => {
        setSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    }


    return (
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="slide"></img>
                <img src={data[1]} alt="slide"></img>
                <img src={data[2]} alt="slide"></img>
            </div>
            <div className="arrows">
                <div className="arrow" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="arrow" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>

    )
}

export default Slider