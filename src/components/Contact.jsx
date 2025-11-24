import "../css/Contact.css";

function Contact() {
    return (
        <section className="contact-section">
             <header className="contact-hero">
                <h3 className="contact-title">
                    Contact Us
                </h3>
                    
                <p className="contact-subtitle">
                    If you would like to submit a personalized request 
                    or ask a question, please don't hesitate to reach out!
                </p>
            </header>

            <section className="form-section">
                <label htmlFor="c-fname">First Name
                <input
                    id="c-fname"
                    type="text"
                    placeholder="Enter your first name"
                    required
                />
                </label>
                <label htmlFor="c-lname">Last Name
                <input
                    id="c-lname"
                    type="text"
                    placeholder="Enter your last name"
                    required
                />
                </label>
                <label htmlFor="c-message">Message
                    <textarea 
                        id="c-message"
                        placeholder="Enter your message here..."
                        required
                    />
                </label>
                
                <button 
                    type="button"
                    className="send-message-btn"
                >
                    Send Message 
                </button>
            </section>

             <figure className="work-schedule-container">
                <figcaption>
                    <span className="dow">
                        Monday - Friday
                    </span>
                   
                    <br />
                    7:00 AM - 7:00 PM
                </figcaption>
                <figcaption>
                    <span className="dow">
                        Saturday - Sunday
                    </span>
                    
                    <br />
                    5:00 AM - 5:00 PM
                </figcaption>
                <figcaption>
                    Contact Us
                    <br />
                    <address>
                        190 Lynette Rd, Uvalde, TX 21398
                    </address>
                    <a href="tel:(231)-987-3409">
                        (231)-987-3409
                    </a>
                    <a href="mailto:build-a-prop@company.com">
                        sweethaven@company.com
                    </a>
                </figcaption>
            </figure>

        </section>
    );
}

export default Contact