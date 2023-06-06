import { FC, forwardRef } from "react";
import LayoutMain from "../components/Layout/LayoutMain";

type OurTeamPageProps = {};

const OurTeamPage: FC<OurTeamPageProps> = ({}, ref) => {
  return <LayoutMain ref={ref}></LayoutMain>;
};
export default forwardRef(OurTeamPage);
