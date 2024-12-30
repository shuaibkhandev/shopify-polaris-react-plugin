import {
  CalloutCard,
  Checkbox,
  FormLayout,
  Modal,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import { useCallback, useState } from "react";

const FeatureReq = () => {
  const [active, setActive] = useState(false);
  const [featureTitle, setFeatureTitle] = useState("");
  const [featureDescription, setFeatureDescription] = useState("");
  const [featureCategory, setFeatureCategory] = useState("");
  const [isPriorityFeature, setIsPriorityFeature] = useState(false);

  const options = [
    { label: "Select a category", value: "" },
    { label: "UI", value: "UI" },
    { label: "Backend", value: "Backend" },
    { label: "Performance", value: "Performance" },
  ];

  const handleChange = useCallback(() => setActive((active) => !active), []);

  const handleFeatureTitleChange = useCallback((value) => {
    return setFeatureTitle(value);
  }, []);

  const handleFeatureDescriptionChange = useCallback((value) => {
    return setFeatureDescription(value);
  }, []);

  const handleFeatureCategoryChange = useCallback((value) => {
    setFeatureCategory(value);
  }, []);

  const handlePriorityFeatureChange = useCallback(() => {
    setIsPriorityFeature((isPriorityFeature) => !isPriorityFeature);
  }, []);

  const handleFormSubmit = () => {
    const formData = {
      featureTitle,
      featureDescription,
      featureCategory,
      isPriorityFeature,
    };
    console.log("Form Submited", formData);
  };

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
          onAction: handleChange,
          variant: "primary",
        }}
      >
        <Text as="p" variant="bodyLg">
          Anything you’re missing in our app? Let us know! We love hearing your
          ideas. Your suggestions help us decide what to add next make the app
          even better.
        </Text>
      </CalloutCard>

      {active && (
        <Modal
          open={active}
          title="Reach more shoppers with Instagram product tags"
          onClose={handleChange}
          primaryAction={{
            content: "Submit",
            onAction: handleFormSubmit,
          }}
          secondaryActions={{
            content: "Cancel",
            onAction: handleChange,
          }}
        >
          <Modal.Section>
            <FormLayout>
              <TextField
                label="Feature Name"
                onChange={handleFeatureTitleChange}
                value={featureTitle}
                placeholder="Enter feature name"
                autoComplete="off"
              />
              <TextField
                label="Feature Description"
                onChange={handleFeatureDescriptionChange}
                value={featureDescription}
                placeholder="Describe the feature"
                autoComplete="off"
              />
              <Select
                label="Feature Category"
                options={options}
                onChange={handleFeatureCategoryChange}
                value={featureCategory}
              />
              <Checkbox
                label="Is this a priority feature?"
                checked={isPriorityFeature}
                onChange={handlePriorityFeatureChange}
              />
            </FormLayout>
          </Modal.Section>
        </Modal>
      )}
    </div>
  );
};

export default FeatureReq;
