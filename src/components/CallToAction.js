import restaurantFood from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

/**
 * CallToAction (sometimes referred to as the jumbotron or the hero, this
 * component is the call-to-action section that guides the user to click a
 * call-to-action button while enticing them to do so in as few words as
 * possible)
 * @returns
 */

export function CallToAction() {
  return (
    <section className="homepage-hero">
      <div className="homepage-hero__background"></div>
      <div class="grid">
        <div class="page-content homepage-hero__layout">
          <div className="homepage-hero__body">
            <h1 class="homepage-hero__title display-title">Little Lemon</h1>
            <div class="homepage-hero__subtitle sub-title">Chicago</div>
            <p class="homepage-hero__description card-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/booking" className="btn homepage-hero__cta">
              Reserve a Table
            </Link>
          </div>
          <img
            className="homepage-hero__image"
            src={restaurantFood}
            alt="A chef in a black apron holds a slate serving tray with four gourmet savory éclairs, each topped with various ingredients like cherry tomatoes, cured meats, seeds, cheese shavings, and fresh herbs."
          />
        </div>
      </div>
    </section>
  );
}
