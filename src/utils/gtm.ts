import ga4 from "react-ga4";
import { GTM_ID } from "../constants/gtm";

export const GTMInit = () => ga4.initialize(GTM_ID);

export const GTMSendEvent = (action: string) =>
  ga4.event("screen_view", {
    app_name: "ToodyIT",
    action,
  });

export const GTMSendPageView = (path: string) =>
  ga4.send({
    hitType: "pageview",
    page: path,
  });
