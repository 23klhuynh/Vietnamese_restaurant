function Services() {
  return (
    <div className="services">
      <div className="services__container">
        <div className="services__header">
          <small>What We Offer</small>
          <h1>Our Services</h1>
          <p>
            Experience the authentic taste of Vietnam with our premium services
            tailored to enhance your dining journey.
          </p>
        </div>

        <div className="services__content">
          <div className="services__item">
            <div className="services__icon">icon</div>
            <div className="services__description">
              <div className="services__description-header">
                <h3>Dine-In Experience</h3>
                <p>
                  Immerse yourself in our authentic Vietnamese atmosphere while
                  enjoying freshly made food. Our resturant features traditional
                  decor and comforable seating.
                </p>
              </div>
              <ul className="services__dexcription-main">
                <li>Comforable seating for groups and couples</li>
                <li>Watch our chefs prepare your food</li>
                <li>Traditional Vietnamese decor and ambiance</li>
                <li>Full service with trained staff</li>
              </ul>
            </div>
          </div>

          <div className="services__item">
            <div className="services__icon">icon2</div>
            <div className="services__description">
              <div className="services__description-header">
                <h3>Takeout & Delivery</h3>
                <p>
                  Enjoy our delicious food in the comfort of your own home. We
                  offer quick takeout and delivery services with special
                  packaging to keep your food hot and fresh.
                </p>
              </div>
              <ul className="services__dexcription-main">
                <li>Tastes hot and fresh upon arrival</li>
                <li>Easy online ordering system</li>
                <li>Fast and reliable delivery service</li>
                <li>Delivery within 10 miles radius</li>
              </ul>
            </div>
          </div>

          <div className="services__item">
            <div className="services__icon">icon3</div>
            <div className="services__description">
              <div className="services__description-header">
                <h3>Catering Services</h3>
                <p>
                  Made your event special with our catering services. From small
                  gatherings to large corporate events, we offer customized pho
                  bars and vietnamese cuisine.
                </p>
              </div>
              <ul className="services__dexcription-main">
                <li>Custom pho stations for events</li>
                <li>Professional staff to serve guests</li>
                <li>Menu customization options</li>
                <li>Equipment and setup included</li>
              </ul>
            </div>
          </div>

          <div className="services__item">
            <div className="services__icon">icon3</div>
            <div className="services__description">
              <div className="services__description-header">
                <h3>Pho Making Classes</h3>
                <p>
                  Learn the art of ramen making from our expert chefs. Our
                  classes cover everything from making noodles from scratch to
                  preparing the perfect broth.
                </p>
              </div>
              <ul className="services__dexcription-main">
                <li>Hands-on experience with professional equipment</li>
                <li>Small class sizes for personalized attention</li>
                <li>Take home recipes and techniques</li>
                <li>Includes meal and sake tasting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
