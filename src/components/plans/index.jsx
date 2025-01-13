import { Page } from "@shopify/polaris";
import Plans from "./plans";


const index = () => {
  return (
    <Page
      title="Our Plans"
      subtitle="Here’s a guide to get started. As your business grows, you’ll get fresh tips and insights here."
    >
      <Plans></Plans>
    </Page>
  );
};

export default index;
