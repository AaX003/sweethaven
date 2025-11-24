import "../css/Gallery.css";
import { useState } from "react";

// IMAGES

// dessert closeups
import closeUpOne from "../images/closeUpOne.jpg";
import closeUpTwo from "../images/closeUpTwo.jpg";
import closeUpThree from "../images/closeUpThree.jpg";
import closeUpFour from "../images/closeUpFour.jpg";
import closeUpFive from "../images/closeUpFive.jpg";
import closeUpSix from "../images/closeUpSix.jpg";

// bts
import btsOne from "../images/btsOne.jpg";
import btsTwo from "../images/btsTwo.jpg";
import btsThree from "../images/btsThree.jpg";
import btsFour from "../images/btsFour.jpg";
import btsFive from "../images/btsFive.jpg";
import btsSix from "../images/btsSix.jpg";

// seasonal collection
import seasonalOne from "../images/seasonalOne.jpg";
import seasonalTwo from "../images/seasonalTwo.jpg";
import seasonalThree from "../images/seasonalThree.jpg";
import seasonalFour from "../images/seasonalFour.jpg";
import seasonalFive from "../images/seasonalFive.jpg";
import seasonalSix from "../images/seasonalSix.jpg";
import seasonalSeven from "../images/seasonalSeven.jpg";
import seasonalEight from "../images/seasonalEight.jpg";
import seasonalNine from "../images/seasonalNine.jpg";
import seasonalTen from "../images/seasonalTen.jpg";
import seasonalEleven from "../images/seasonalEleven.jpg";
import seasonalTwelve from "../images/seasonalTwelve.jpg";

// instagram logo
import instaLogo from "../images/instagram.png";


function Gallery() {
    const [index, setIndex] = useState(0);

    const images = [
        {
            category: "Desserts 🧁",
            attr: [
                {
                    img: closeUpOne
                },
                {
                    img:  closeUpTwo
                },
                {
                    img: closeUpThree
                },
                {
                    img: closeUpFour
                },
                {
                    img: closeUpFive
                },
                {
                    img: closeUpSix
                }
            ]
        },
        
        {
            category: "Behind-The-Scenes 🎬",
            attr: [
                {
                    img: btsOne
                },
                {
                    img: btsTwo
                },
                {
                    img: btsThree
                },
                {
                    img: btsFour
                },
                {
                    img: btsFive
                },
                {
                    img: btsSix
                }
            ] 
        },
        
        {   
            category: "Seasonal Collections 🎄", 
            attr: [
                {
                    img: seasonalOne
                },
                {
                    img: seasonalTwo
                },
                {
                    img: seasonalThree
                },
                {
                    img: seasonalFour
                },
                {
                    img: seasonalFive
                },
                {
                   img: seasonalSix
                },
                {
                    img: seasonalSeven
                },
                {
                    img: seasonalEight
                },
                {
                    img: seasonalNine
                },
                {
                    img: seasonalTen
                },
                {
                    img: seasonalEleven
                },
                {
                   img: seasonalTwelve
                }
            ],
        },
    ];

     return (
        <section className="gallery-section">
            <header className="gallery-hero">
                <h3 className="gallery-title">
                    SweetHaven Gallery
                </h3>
                <p className="gallery-subtitle">
                    A large assortment of images from 
                    our bakery assembled into a collage 
                    for your convenience! Look around and 
                    tell us what you think on Instagram!
                </p>
            </header>
            
            <div className="categorical-indicators">
                {images.map((_, i) => (
                     <button
                        key={i}
                        role="tab"
                        aria-selected={index === i}
                        aria-label={`Go to new tab`}
                        className={`category-tab ${index === i ? "is-active" : "inactive"}`}
                        onClick={() => setIndex(i)}
                    >
                        .
                    </button>
                ))}
            </div>

                <div className="gallery-title-display-wrapper">
                     <h3 className="gallery-display-title">
                        {images[index].category}
                    </h3>
                </div>
                <section className="gallery-display-container">
                   
                    {images[index].attr.map((i, idx) => (
                        <div key={idx} className="gallery-wrapper">
                            
                            <img src={i.img} aria-label={"Gallery Image"} loading="lazy"/>
                            <span className="cta-wrapper">
                                <p className="cta-text">Like what you see?
                                    <a className="follow-btn">
                                        <span className="logo-wrapper">
                                            <img src={instaLogo} aria-label={"Instagram Logo"} loading="lazy"/>
                                        </span>
                                            Follow us @officialsweethaven ✨
                                    </a>
                                </p>
                            </span>
                        </div>
                    ))}
            </section>
        </section>
    );
}

export default Gallery