import "../css/Featured.css";

//images
import cakeOne from "../images/cakeOne.png";
import cakeTwo from "../images/cakeTwo.png";
import cakeThree from "../images/cakeThree.png";
import cakeFour from "../images/cakeFour.png";

function Featured() {
    const items = [
    {
        img: cakeOne, // heart-shaped chocolate fondue desserts with powdered raspberries
        title: "White Chocolate Luvent",
        desc: "A soft heart-shaped fondue dessert made with smooth white chocolate, dusted lightly with raspberry powder for a sweet-tart finish.",
        price: "$15.10"
    },
    {
        img: cakeTwo, // biscuit-like dessert with cream cheese filling and strawberries
        title: "Angel Cake",
        desc: "A biscuit-soft vanilla treat filled with whipped cream cheese and topped with fresh strawberries for the perfect cloud-light bite.",
        price: "$10.06"
    },
    {
        img: cakeThree, // cinnamon roll
        title: "Cinnamon Roll",
        desc: "Warm, gooey, and freshly glazed — this cinnamon roll is baked to golden perfection with swirls of buttery cinnamon sugar.",
        price: "$9.35"
    },
    {
        img: cakeFour, // strawberry cake w/ pink frosting
        title: "Strawberry Ferquois Cake",
        desc: "A silky strawberry sponge cake layered with airy pink frosting and tangy-sweet strawberries plucked fresh from a garden.",
        price: "$25.00"
    }
];

    return (
        <section className="featured-section">
            <header className="featured-hero">
                <h3 className="featured-title">
                    Featured Items
                </h3>
                <p className="featured-subtitle">
                    Browse through our selection of featured items--
                    different ones appear daily, so be sure to check back!
                </p>
            </header>
            <section className="featured-item-display-container">
                {items.map((i, idx) => (
                    <article key={idx} className="featured-item-card">
                        <small className="featured-item-price">{i.price}</small>
                        <img src={i.img} alt={`Image of ${i.title}`} className="featured-item-img-wrapper" />
                        <h3 className="featured-item-title">{i.title}</h3>
                        <p className="featured-item-desc">{i.desc}</p>
                        <button className="view-btn">View</button>
                    </article>
                ))}
            </section>
        </section>
    );
}

export default Featured