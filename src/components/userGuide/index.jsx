import {Page } from "@shopify/polaris";
import React , {useState}from "react";
import AppTourGuide from "./AppTourGuide";
import OnThisPage from "./OnThisPage"
import NoticeAlert from "./NoticeAlert"
import GeneralSetting from "./GeneralSetting";

const index = () => {
  const [time, setTime] = useState(0);

  const scrollToVideo = () => {
    document.getElementById("app_tour_guide").scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Page
      title="User Guide"
      subtitle="Here’s a guide to get started. As your business grows, you’ll get fresh tips and insights here."
    >
     <AppTourGuide time={time}/>
     <NoticeAlert/>
     <OnThisPage/>
     <GeneralSetting setTime={setTime} scrollToVideo={scrollToVideo}/>
    </Page>
  );
};

export default index;
