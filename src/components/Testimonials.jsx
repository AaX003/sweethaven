import "../css/Testimonials.css";

import { FaQuoteLeft } from "react-icons/fa";
import { MdStar } from "react-icons/md";

function Testimonials() {
  const reviews = [
    {
      icon: <FaQuoteLeft />,
      rating: 5,
      message:
        "SweetHaven has completely changed my morning routine. The quality and consistency of their coffee is unmatched. Every cup is a masterpiece!",
      author: "Whitney Keaton",
      initials: "WK"
    },
    {
      icon: <FaQuoteLeft />,
      rating: 5,
      message:
        "I've tried countless bakeries, but SweetHaven stands out. Their attention to detail and passion for desserts is evident in every taste.",
      author: "Mya Lu",
      initials: "ML"
    },
    {
      icon: <FaQuoteLeft />,
      rating: 5,
      message:
        "The perfect spot for meetings and creative work. Great coffee, desserts, amazing atmosphere, and friendly staff. Highly recommend!",
      author: "Susan Jones",
      initials: "SJ"
    },
    {
        icon: <FaQuoteLeft />,
        rating: 5,
        message:
            "From the moment you walk in, you're greeted with warmth and the rich aroma of freshly brewed coffee. It's become my daily retreat.",
        author: "Andre Bennett",
        initials: "AB"
    },
    {
        icon: <FaQuoteLeft />,
        rating: 5,
        message:
            "Their seasonal supply are absolutely divine! The baristas know my name and my order — it feels like family.",
        author: "Tiana Ross",
        initials: "TR"
    },
    {
        icon: <FaQuoteLeft />,
        rating: 5,
        message:
            "Stumbled into SweetHaven while traveling, and it was the highlight of my trip. Cozy vibes, excellent espresso, and even better people.",
        author: "Diego Marquez",
        initials: "DM"
    },
    {
        icon: <FaQuoteLeft />,
        rating: 5,
        message:
            "I'm a sucker for good branding, but SweetHaven delivers both style and substance. The interior design, the music, and the coffee — all 10/10.",
        author: "Lena Cho",
        initials: "LC"
    },
    {
        icon: <FaQuoteLeft />,
        rating: 5,
        message:
            "Their loyalty program is just the cherry on top. Great rewards, fast service, and unbeatable coffee quality. I’m hooked!",
        author: "Jordan Malik",
        initials: "JM"
    },
    {
        icon: <FaQuoteLeft />,
        rating: 5,
        message:
            "Every detail is intentional — from ethically sourced beans to the recycled packaging. SweetHaven really walks the talk on sustainability.",
        author: "Nadia Farouk",
        initials: "NF"
    }
  ];

  return (
    <section className="testimonials-section">
        <header className="testimonials-hero">
            <h3 className="testimonials-title">
                Sweet Tooth Supporters
            </h3>
            <p className="testimonials-subtitle">
                Don't take our word! Hear from our customers, both 
                new and regular, about their experience at SweetHaven and 
                how it's benefited them!
            </p>
            </header>
            <section className="testimonials-display">
                {reviews.map((review, idx) => (
                    <article key={idx} className="testimonial-card">
                        <span className="testimonial-rating" aria-label={`Rated ${review.rating} out of 5`}>
                            {Array.from({ length: review.rating }).map((_, i) => (
                            <MdStar key={i} className="star-icon" />
                            ))}
                        </span>
                        <span className="testimonial-icon-wrapper">
                            <span className="testimonial-icon" aria-label="Quote Icon">{review.icon}</span>
                        </span>
                        
                        <h4 className="testimonial-quote">“{review.message}”</h4>
                        <div className="testimonial-divider" aria-hidden="true" />
                        
                        <span className="testimonial-logo" aria-label="Author Logo">{review.initials}</span>{" "}
                        <small className="testimonial-author">{review.author}</small>
                    </article>
                ))}
        </section>
    </section>
  );
}

export default Testimonials;