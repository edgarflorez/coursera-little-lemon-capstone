import greekSalad from "../assets/greek salad.jpg";

/**
 * Specials (the component that loops over the specials that come from a data source)
 * @returns
 */

export function Specials() {
  return (
    <section className="specials">
      <div class="grid">
        <div class="page-content">
          <div className="specials__hero">
            <h2 className="display-title">Specials</h2>
            <a className="specials__cta btn" href="#">
              Online Menu
            </a>
          </div>
          <ol className="specials__list">
            <li>
              <a href="#" className="specials__card">
                <img
                  className="specials__card-image"
                  src={greekSalad}
                  alt="a fresh and colorful greek salad"
                />
                <div className="specials__card-body">
                  <div className="specials__card-header">
                    <div class="specials__card-title card-title">
                      Greek salad
                    </div>
                    <div class="specials__card-price card-title">$12.99</div>
                  </div>
                  <p class="specials__card-description">
                    The famous greek salad of crispy lettuce, peppers, olives
                    and our Chicago style feta cheese, garnished with crunchy
                    croutons.
                  </p>
                  <div class="specials__card-order-delivery highlight-text">
                    Order a delivery
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="specials__card">
                <img
                  className="specials__card-image"
                  src={greekSalad}
                  alt="a fresh and colorful greek salad"
                />
                <div className="specials__card-body">
                  <div className="specials__card-header">
                    <div class="specials__card-title card-title">
                      Greek salad
                    </div>
                    <div class="specials__card-price card-title">$12.99</div>
                  </div>
                  <p class="specials__card-description">
                    The famous greek salad of crispy lettuce, peppers, olives
                    and our Chicago style feta cheese, garnished with crunchy
                    croutons.
                  </p>
                  <div class="specials__card-order-delivery highlight-text">
                    Order a delivery
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="specials__card">
                <img
                  className="specials__card-image"
                  src={greekSalad}
                  alt="a fresh and colorful greek salad"
                />
                <div className="specials__card-body">
                  <div className="specials__card-header">
                    <div class="specials__card-title card-title">
                      Greek salad
                    </div>
                    <div class="specials__card-price card-title">$12.99</div>
                  </div>
                  <p class="specials__card-description">
                    The famous greek salad of crispy lettuce, peppers, olives
                    and our Chicago style feta cheese, garnished with crunchy
                    croutons.
                  </p>
                  <div class="specials__card-order-delivery highlight-text">
                    Order a delivery
                  </div>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
