import { CalloutCard, Text } from "@shopify/polaris";

const FeatureReq = () => {
  return (
    <div
      className="request_feature"
      style={{ paddingBlock: "var(--p-space-200)" }}
    >
      <CalloutCard
        title="Feature Request"
        illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
        primaryAction={{
          content: "Request a  feature",
          url: "#",
        }}
      >
        <Text as="p" variant="bodyLg">Anything you’re missing in our app? Let us know!
        We love hearing your ideas. Your suggestions help us decide what to add next make the app even better.</Text>
      </CalloutCard>
    </div>
  );
};

export default FeatureReq;
