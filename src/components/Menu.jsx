import "../css/Menu.css";

// dessert + drink images
import cakeOne from "../images/cakeOne.png";
import cakeTwo from "../images/cakeTwo.png";
import cakeThree from "../images/cakeThree.png";
import cakeFour from "../images/cakeFour.png";
import cakeFive from "../images/cakeFive.png";
import cakeSix from "../images/cakeSix.png";
import cakeSeven from "../images/cakeSeven.png";
import cakeEight from "../images/cakeEight.png";
import cakeNine from "../images/cakeNine.png";
import cakeTen from "../images/cakeTen.png";
import cakeEleven from "../images/cakeEleven.png";

function Menu() {
    // const [selected, setSelected] = useState(""); not yet

    const menu = [
        {
            img: cakeOne, // heart-shaped chocolate fondue desserts with powdered raspberries
            title: "White Chocolate Luvent",
            desc: "A soft heart-shaped fondue dessert made with smooth white chocolate, dusted lightly with raspberry powder for a sweet-tart finish.",
            price: "$15.10",
            category: "Cakes"
        },
        {
            img: cakeTwo, // biscuit-like dessert with cream cheese filling and strawberries
            title: "Angel Cake",
            desc: "A biscuit-soft vanilla treat filled with whipped cream cheese and topped with fresh strawberries for the perfect cloud-light bite.",
            price: "$10.06",
            category: "Cakes"
        },
        {
            img: cakeThree, // cinnamon roll
            title: "Cinnamon Roll",
            desc: "Warm, gooey, and freshly glazed — this cinnamon roll is baked to golden perfection with swirls of buttery cinnamon sugar.",
            price: "$9.35",
            category: "Pastries",
            banner: "Best Seller"
        },
        {
            img: cakeFour, // strawberry cake w/ pink frosting
            title: "Strawberry Ferquois Cake",
            desc: "A silky strawberry sponge cake layered with airy pink frosting and tangy-sweet strawberries plucked fresh from a garden.",
            price: "$25.00",
            category: "Cakes"
        },
        {
            img: cakeFive,
            title: "Lavender Honey Cupcakes", // lavender frosted yellow cupcake
            desc: "Soft vanilla sponge infused with real lavender and drizzled with honey for calming, floral sweetness.",
            price: "$12.00",
            category: "Cakes",
            banner: "New Item"
        },
        {
            img: cakeSix,
            title: "Mocha Fudge Bars",
            desc: "Rich espresso-chocolate fudge layered with a thick chocolate coat.",
            price: "$5.00",
            category: "Cookies & Bars"
        },
        {
            img: cakeSeven,
            title: "Berry Creme Tartlet",
            desc: "Mini buttery tart infused with vanilla creme and topped with blueberries + strawberries.",
            price: "$5.00",
            category: "Pastries"
        },
        {
            img: cakeEight,
            title: "Caramel Pecan Donut",
            desc: "Flaky pastry shell filled with caramel custard and dusted with powdered sugar.",
            price: "$7.00",
            category: "Donuts",
            banner: "New Item"
        },
        {
            img: cakeNine,
            title: "Red Velvet Cookie Sandwich",
            desc: "Delicious cookie coat in red velvet hugging a whipped marshmallow creme base.",
            price: "$5.00",
            category: "Cookies & Bars"
        },
        {
            img: cakeTen,
            title: "Chocolate Chip Cookie",
            desc: "Original chocolate chip cookie with a crunchy armor and gooey chocolate filling.",
            price: "$5.00",
            category: "Pastries",
            banner: "Best Seller"
        },
        {
            img: cakeEleven,
            title: "Banana Creme Brulee",
            desc: "Flaky pastry shell filled with lemon custard and topped with marshmallow creme and bananas.",
            price: "$7.00",
            category: "Pastries"
        }
    ];


   return (
        <section className="menu-section">
            <header className="menu-hero">
                <h3 className="menu-title">
                    Our Menu
                </h3>
                <p className="menu-subtitle">
                    Our Menu contains a wide variety of desserts
                    that are baked with plenty sugar and love!
                    They'll satisfy your cravings and sweet tooth 
                    simultaneously!
                </p>
            </header>
            <section className="menu-display-container">
                {menu.map((m, idx) => (
                    <article key={idx} className="menu-item-card">
                        <small className="menu-item-card-banner" style={{display: m.banner ? "inline-block" : "none"}}>{m.banner || null}</small>
                        <small className="menu-item-price">{m.price}</small>
                        <small className="menu-item-category">{m.category}</small>
                        <img src={m.img} alt={`Menu Item: ${m.title}`} className="menu-item-img-wrapper" />
                        <h3 className="menu-item-title">{m.title}</h3>
                        <p className="menu-item-desc">{m.desc}</p>
                        
                    </article>
                ))}
            </section>
        </section>
    );
}

export default Menu