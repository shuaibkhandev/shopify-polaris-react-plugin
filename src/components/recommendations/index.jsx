import { Page } from "@shopify/polaris";
import OurApps from "./OurApps";
import HeroSec from "./HeroSec";

const index = () => {
  return (
    <Page
      title="Recommendations"
      subtitle="Here’s a guide to get started. As your business grows, you’ll get fresh tips and insights here."
    >
      <HeroSec />
      <OurApps />
    </Page>
  );
};

export default index;
