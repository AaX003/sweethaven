import '../css/Newsletter.css';

// icons 
import { IoIosSend } from "react-icons/io";


function Newsletter() {
  return (
    <section className="newsletter-section">
        <div className="newsletter-img-wrapper"></div>
        <header className="newsletter-hero">
            <h3 className="newsletter-title">
                Subscribe to <span className="accent">SweetHaven</span>
            </h3>
            <p className="newsletter-subtitle">
                Subscribe to get exclusive offers, name-based embroderies, limited offers,
                secret menu items, and more! Plus, get 10% off your first order! 
            </p>
        </header>

      <section className="input-container">
            <input
                id="nl-email"
                type="email"
                placeholder="Enter your email address"
                required
                autoComplete
            />
            <a 
                type="button"
                href="#!"
                className="subscribe-btn"
            >
                Subscribe <IoIosSend />
            </a>
      </section>

      <div className="newsletter-divider" aria-hidden="true"></div>

      <figcaption className="newsletter-hint">
            Join <span className="accent">15,000+</span> others! Unsubscribe anytime.
      </figcaption>
    </section>
  );
}

export default Newsletter;
