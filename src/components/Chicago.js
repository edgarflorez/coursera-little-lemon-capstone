import imageA from "../assets/Mario and Adrian A.jpg";
import imageB from "../assets/Mario and Adrian b.jpg";

/**
 * Chicago (the component that describes the Little Lemon Chicago restaurant
 * and gives a short backstory for it)
 * @returns
 */

export function Chicago() {
  return (
    <section className="chicago-tout">
      <div class="grid">
        <div className="page-content">
          <div className="chicago-tout__body">
            <h2>Little Lemon</h2>
            <p>Chicago</p>

            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="chicago-tout__images">
            <img
              className="chicago-tout__image chicago-tout__image-a "
              src={imageA}
              alt="Mario and Adrian at the restaurant exchanging ideas"
            />
            <img
              className="chicago-tout__image chicago-tout__image-b "
              src={imageB}
              alt="Mario and Adrian at the restaurant smiling at the kitchen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
