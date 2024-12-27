import {
  Button,
  Card,
  Collapsible,
  InlineGrid,
  Link,
  Text
} from "@shopify/polaris";
import { CaretDownIcon,CaretUpIcon } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";

const SetupGuide = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);

  return (
    <div className="setup-guide"  style={{ paddingBlock: "var(--p-space-200)" }}>
      <Card sectioned>
      <InlineGrid columns="1fr auto">
      <Text as='h2' variant="headingMd">Setup Guide</Text>
        <Button
        icon={open ? CaretUpIcon : CaretDownIcon}
          onClick={handleToggle}
          ariaExpanded={open}
          ariaControls="basic-collapsible"
          variant="default"
        >
        </Button>
        </InlineGrid>
        <Text as="p" variant="bodyMd">Use this personalized guide to get your store up and running.</Text>
        <div style={{paddingBlock: "var(--p-space-200)"}}>
        <Button onClick={handleToggle}>2/5 Completed</Button>
        </div>
        <Collapsible
          open={open}
          id="basic-collapsible"
          transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
          expandOnPrint
        >
          <Text>
            <p>
              Your mailing list lets you contact customers or visitors who have
              shown an interest in your store. Reach out to them with exclusive
              offers or updates about your products.
            </p>
            <Link url="#">Link</Link>
          </Text>
        </Collapsible>
      </Card>
    </div>
  );
};

export default SetupGuide;
