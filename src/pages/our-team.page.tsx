import { forwardRef } from "react";
import SlideAnimationLayout from "../components/Layout/SlideAnimationLayout";

const OurTeamPage = forwardRef<HTMLDivElement>((_, ref) => {
  return <SlideAnimationLayout ref={ref}>a</SlideAnimationLayout>;
});
export default OurTeamPage;
