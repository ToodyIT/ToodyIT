import { forwardRef } from "react";
import LayoutMain from "../components/Layout/LayoutMain";

const OurTeamPage = forwardRef<HTMLDivElement>((_, ref) => {
  return <LayoutMain ref={ref}>a</LayoutMain>;
});
export default OurTeamPage;
