import "../css/FAQ.css";

function FAQ() {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <header className="faq-hero">
        <h2 className="faq-title">
            Have a Question? 
        </h2>
        <p className="faq-subtitle">
            Find all the answers to our customers' most 
            frequently asked questions.
        </p>
      </header>

      <div className="accordion-container">
        <details className="accordion-list">
          <summary className="accordion-header">
            Do you offer custom cakes?
          </summary>
          <p className="accordion-info">
            Yes! SweetHaven sells customized cakes based on holidays 
            such as Halloween or Chrismas; seasons like Spring or Fall; and 
            special occassions like birthdays or weddings! If you will 
            like to make a personalized request, don't hesitate to 
            <a href="#contact" className="accent">{" "}Contact{" "}</a>us!
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
            What are your delivery options?
          </summary>
          <p className="accordion-info">
            Currently, SweetHaven offers in-person and 
            shipment deliverables. To maintain an accurate and safe 
            environment when ordering online and making deliveries, 
            please make sure all location details are updated accordingly!
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
                Do you offer gluten-free options?
            </summary>
          <p className="accordion-info">
            Yes! Our <a href="#menu" className="accent">{" "}Menu{" "}</a> provides
            options tailored to those with different nutritional values, 
            including those who have peanut allergies, lactose intolerance, 
            and other nutrition deficiencies. 
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
                Do you provide catering services?
            </summary>
            <p className="accordion-info">
                Yes! SweetHaven provides catering for 
                many occassions, particularly birthdays. Please 
                make sure to include specific details in your order
                in conjunction to any relevant timeframes or dates.
            </p>
            
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
            Do you provide special deals for customers on their birthday?
          </summary>
          <p className="accordion-info">
            If a customer has a birthday, SweetHaven provides a special 
            Buy One, Get One Free deal that can be read about <a href="#!" className="accent">{" "}here</a>.
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
            How can I submit a personalized request?
          </summary>
          <p className="accordion-info">
            Please <a href="#contact" className="accent">{" "}Contact{" "}</a>us 
            for a personalized submission.
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
            Where can I view the Nutritional, Allergen, and Ingredient 
            information before making a purchase?
            </summary>
          <p className="accordion-info">
            Please refer to the <a href="#!" className="accent">{" "}Nutritional, Allergen, and Ingredient{" "}</a>
            documentation on our menu to read more about what's included in our creations.
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
            How do I cancel my newsletter subscription?
            </summary>
          <p className="accordion-info">
            To discontinue your subscription, please refer to 
            any email from us and scroll to the bottom where you should 
            see <strong>Unsubscribe</strong>. If not, please don't hesitate 
            to <a href="#contact" className="accent">{" "}Contact{" "}</a>us for 
            more information.
          </p>
        </details>
      </div>
    </section>
  );
}

export default FAQ;
