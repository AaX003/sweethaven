import "../css/Rewards.css";

function Rewards() {
    return (
        <section className="rewards-section">
            <div className="rewards-img-wrapper"></div>
            <header className="rewards-hero">
                <h3 className="rewards-title">
                    Join our Rewards Program
                </h3>
                <p className="rewards-subtitle">
                    As an affilate of the SweetHaven committee,
                    we hereby offer you guaranteed sweet grants 
                    for every order you make! 
                </p>
                <div className="cta-rewards-wrapper">
                    <a 
                        href="#!" 
                        className="join-btn"
                    >
                        Become an Rewards affilate
                    </a>
                </div>
            </header>
           
        </section>
    );
}

export default Rewards