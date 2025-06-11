/**
 * CustomersSay (testimonials, including star ratings, customer images and customer details)
 * @returns
 */

export function Testimonials() {
  return (
    <section className="testimonials">
      <div class="grid">
        <div class="page-content">
          <h2 className="testimonials__title section-title">Testimonials</h2>
          <div className="testimonials__cards">
            <div class="testimonials__card">
              <div className="testimonials__card-rating">Rating</div>
              <div className="testimonials__card-image-section">
                <img
                  className="testimonials__card-image"
                  src="https://placehold.co/50x50"
                  alt=""
                />

                <div className="testimonials__card-name">Name</div>
              </div>
              <div className="testimonials__card-review">Review text</div>
            </div>
            <div class="testimonials__card">
              <div className="testimonials__card-rating">Rating</div>
              <div className="testimonials__card-image-section">
                <img
                  className="testimonials__card-image"
                  src="https://placehold.co/50x50"
                  alt=""
                />

                <div className="testimonials__card-name">Name</div>
              </div>
              <div className="testimonials__card-review">Review text</div>
            </div>
            <div class="testimonials__card">
              <div className="testimonials__card-rating">Rating</div>
              <div className="testimonials__card-image-section">
                <img
                  className="testimonials__card-image"
                  src="https://placehold.co/50x50"
                  alt=""
                />

                <div className="testimonials__card-name">Name</div>
              </div>
              <div className="testimonials__card-review">Review text</div>
            </div>
            <div class="testimonials__card">
              <div className="testimonials__card-rating">Rating</div>
              <div className="testimonials__card-image-section">
                <img
                  className="testimonials__card-image"
                  src="https://placehold.co/100x150"
                  alt=""
                />

                <div className="testimonials__card-name">Name</div>
              </div>
              <div className="testimonials__card-review">Review text</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
