import React, { useState, useEffect, cloneElement } from "react"
import html from '../../img/html.png'
import css from '../../img/css.png'
import js from '../../img/js.png'
import react from '../../img/react.png'
import "./Carousel.css"

const Carousell = () => {

    const Carousel = ({ carouselItems, ...rest }) => {
        const [active, setActive] = useState(0);
        let scrollInterval = null;

        useEffect(() => {
            scrollInterval = setTimeout(() => {
                setActive((active + 1) % carouselItems.length);
            }, 3000);

            return () => clearTimeout(scrollInterval);
        });

        return (
            <div className="carousel">
                {carouselItems.map((item, index) => {
                    const activeClass = active === index ? ' visible' : '';
                    return cloneElement(item, {
                        ...rest,
                        className: `carousel-item${activeClass}`
                    });
                })}
            </div>
        );
    };

    return (
        <div>
            <Carousel
                carouselItems={[
                    <div><img src={html} alt="" /></div>,
                    <div><img src={css} alt="" /></div>,
                    <div><img src={js} alt="" /></div>,
                    <div><img src={react} alt="" /></div>,
                ]}
            />,
        </div>

    )

}

export default Carousell;