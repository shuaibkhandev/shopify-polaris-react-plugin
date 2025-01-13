import { Page } from "@shopify/polaris";
import FAQ from "./FAQ";

const index = () => {
  return (
    <div style={{minWidth:"50%", margin:"auto"}}>
    <Page
      title="Frequently Asked Questions"
      subtitle="Here’s a guide to get started. As your business grows, you’ll get fresh tips and insights here."
    >
      <FAQ />
    </Page>
    </div>
  );
};

export default index;
