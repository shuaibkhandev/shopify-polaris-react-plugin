import { Page } from "@shopify/polaris";
import Analytics from "./Analytics";
import SetupGuide from "./SetupGuide";
import QuickTutorials from "./QuickTutorials";
import Banner from "./Banner";
import FeatureReq from "./FeatureReq";
import RateUs from "./RateUs";
import MoreApps from "./MoreApps";
import HelpCenter from "./HelpCenter";
const index = () => {
  return (
    <Page
      title="Dashboard"
      subtitle="Here’s a guide to get started. As your business grows, you’ll get fresh tips and insights here."
    >
      <Analytics />
      <SetupGuide />
      <QuickTutorials />
      <Banner />
      <FeatureReq/>
      <HelpCenter/>
      <RateUs/>
      <MoreApps/>
    </Page>
  );
};

export default index;
