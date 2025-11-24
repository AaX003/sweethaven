import "../css/Spotlight.css";

// baker images
import bakerOne from "../images/bakerOne.jpg";
import bakerTwo from "../images/bakerTwo.jpg";
import bakerThree from "../images/bakerThree.jpg";
import bakerFour from "../images/bakerFour.jpg";

function Spotlight() {
    const employees = [
        {
            img: bakerOne, 
            name: "Lucien Fournier",
            bio: "Sophisticated but approachable, Lucien is our baker and known for delivering desserts with a smile.",
        },
        {
            img: bakerTwo, 
            name: "Étienne Marceau",
            bio: "Bright and exciteable - Étienne expresses his enthusiasm by perfecting croissants all with a smile on his face.",
        },
        {
            img: bakerThree, 
            name: "Amélie Duval",
            bio: "Shy but determined - Amélie is our head pastry chef who is exceptional at crafting and delivering beautifully designed masterpieces.",
        },
        {
            img: bakerFour, 
            name: "Colette Girard",
            bio: "Soft-spoken, kind, and bakes the fluffiest brioche in mankind.",
        }
    ];


   return (
        <section className="spotlight-section">
            <header className="spotlight-hero">
                <h3 className="spotlight-title">
                    Meet The Bakers
                </h3>
                <p className="spotlight-subtitle">
                    Sweet Haven wouldn't have been made possible
                    without these beautiful faces. Take a moment
                    to browse through our employee spotlight, 
                    appreciating their hard work and reading how
                    their journeys here at Sweet Haven became possible! 
                </p>
            </header>
            <section className="emp-display-container">
                {employees.map((e, idx) => (
                    <article key={idx} className="emp-card">
                        <img src={e.img} alt={`Employee: ${e.name}`} className="emp-img-wrapper" />

                        <div className="emp-info-wrapper">
                            <h3 className="emp-name">{e.name}</h3>
                            <p className="emp-bio">{e.bio}</p>
                        </div>
                    </article>
                ))}
            </section>
        </section>
    );
}

export default Spotlight