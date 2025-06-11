import { CallToAction } from "../components/CallToAction";
import { Specials } from "../components/Specials";
import { Testimonials } from "../components/Testimonials";
import { Chicago } from "../components/Chicago";

export default function Homepage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <Testimonials />
      <Chicago />
    </>
  );
}
