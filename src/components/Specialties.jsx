import "../css/Specialities.css";

// ICONS
import { RiCake2Fill } from "react-icons/ri";
import { TbCakeRoll, TbMilkOff } from "react-icons/tb";
import { GiPumpkinLantern } from "react-icons/gi";
import { PiBreadFill, PiCoffeeFill } from "react-icons/pi";

function Specialities() {
    const specialities = [
        {   icon: <RiCake2Fill />,
            title: "Cakes",
            desc: "Like most bakeries, Sweet Haven produces a wide variety of cakes in different flavours, shapes, and sizes."
        },
        {   icon: <TbCakeRoll />,
            title: "Pastries",
            desc: "Pastries, including scones, cinnamon rolls, make up a large percentage of Sweet Haven's delicacies."
        },
        {   icon: <PiBreadFill />,
            title: "Breads & Biscuits",
            desc: "Breads are an abundant supply amongst other sweet goods here at Sweet Haven, including brioche, gingerbread, cookies, and more."
        },
        {   icon: <GiPumpkinLantern />,
            title: "Seasonal Editions",
            desc: "Whenever Halloween, Christmas, birthdays, or any other recognizable holiday rolls around, Sweet Haven ensures their desserts wear costumes."
        },
        {   icon: <TbMilkOff />,
            title: "Gluten-Free Goods",
            desc: "At SweetHaven, we aim to create an enviroment that's conducive to everyone if needed, which includes those with specific allergens or lactose intolerance."
        },
        {   icon: <PiCoffeeFill />,
            title: "Beverages",
            desc: "What's a bakery without something to help wash down all that sweetness? Sweet Haven offers a large drink supply, including caffeinated and sugary refreshments and drinks."
        }
    ];

    return (
         <section className="specialities-section">
            <header className="specialities-hero">
                <h3 className="specialities-title">
                        What Does SweetHaven Sell?
                 </h3>
                <p className="specialities-subtitle">
                    At SweetHaven, we aim to provide our customers a wide 
                    selection of items that will continue making them happy! 
                    We work incredibly hard to ensure our desserts is 
                    handled with utmost care and of high-quality production!
                </p>
            </header>
            <div className="specialities-card-display-container">
                <section className="specialities-content-display">
                {specialities.map((s, idx) => (
                    <article key={idx} className="specialty-card">
                        <span className="speciality-card-icon-wrapper">
                            {s.icon}
                        </span>
                        <h3 className="speciality-card-title">{s.title}</h3>
                        <p className="speciality-card-desc">{s.desc}</p>
                    </article>
                ))}
            </section>
            </div>
        </section>
    );
}

export default Specialities;