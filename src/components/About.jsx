import "../css/About.css";

function About() {
    return (
         <section className="about-section">
            <div className="about-img-wrapper"></div>
            <header className="about-hero">
                <h3 className="about-title">
                    Our Story + Mission
                 </h3>
                <p className="about-story">
                    Founded in 2015, Sweet Haven began as a tiny neighborhood kitchen with a single belief: 
                    desserts shouldn’t just taste <strong>good</strong>, they should feel like <strong>home</strong>. 
                    What started as a few handwritten recipes quickly blossomed into a small bakery full of laughter, 
                    the smell of warm sugar, and a passion for creating treats that make people smile. 
                    Every <strong>cake</strong>, <strong>roll</strong>, <strong>tart</strong>, and <strong>cookie</strong> carries a memory — of family gatherings, 
                    cozy evenings, and nostalgic childhood cravings brought back to life. 
                    Sweet Haven grew not because it aimed to be big, but because it wanted to be meaningful, 
                    one bite at a time.
                </p>
                <p className="about-mission">
                    Our <strong>mission</strong> is simple: bring <strong>joy</strong> to every table. 
                    Sweet Haven is dedicated to baking with care, intention, and creativity — 
                    crafting desserts that spark comfort, curiosity, and delight. 
                    We prioritize quality ingredients, thoughtful craftsmanship, 
                    and a welcoming environment where everyone feels valued. 
                    Whether you’re celebrating something special or just treating yourself after a long day, 
                    we want every visit to feel like a warm embrace and every dessert to feel like a moment worth savoring.
                </p>
            </header>
            <p className="about-blurb">
                We wholeheartedly take pride in...
            </p>
             <ul className="stats__about">
                <li className="stat__about">
                    <span className="value__about">10+</span>{" "}<br />
                    <span className="text__about">Years of Excellence</span>
                </li>
                <li className="stat__about">
                    <span className="value__about">50k+</span>{" "}<br />
                    <span className="text__about">Happy Customers</span>
                </li>
                <li className="stat__about">
                    <span className="value__about">5</span>{" "}<br />
                    <span className="text__about">Coffeeshops Globally</span>
                </li>
                <li className="stat__about">
                    <span className="value__about">90%</span>{" "}<br />
                    <span className="text__about">Customer Satisfaction</span>
                </li>
            </ul>
        </section>
    );
}

export default About;