import "../css/Hero.css";

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-img-wrapper"></div>
            <header className="hero">
                <h3 className="hero-title">
                    Sweet Treats,
                    Sweet Cravings
                </h3>
                <p className="hero-subtitle">
                    Are you craving something soft, delectable, 
                    and pillowy enough to sink your teeth in? Browse 
                    a wide selection of sweet deliciousness here at Sweet Haven!
                    It'll be worth your while!
                </p>
            </header>
            <section className="cta-btn-container">
                <a 
                    className="browse-menu-btn"
                    href="#menu"
                >
                    Browse Menu
                </a>
                <a 
                    className="order-btn"
                    href="#order"
                >
                    Order 
                </a>
            </section>
        </section>
    );
}

export default Hero