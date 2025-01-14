import { Card, List, Text } from "@shopify/polaris";
import React from "react";

const OnThisPage = () => {
  return (
    <div
      className="on_this_page"
      style={{ paddingBlock: "var(--p-space-200)" }}
    >
      <Card>
        <Text as="h2" variant="headingMd">
          On this page
        </Text>

        <div style={{ paddingTop: "var(--p-space-400)"}}>
        <List type="bullet" gap="loose">
          <List.Item>Configure general settings.</List.Item>
          <List.Item>
            Customize the "Load More" button's color, label, and size.
          </List.Item>
          <List.Item>
            Customize the "Show Less" button's color, label, and size.
          </List.Item>
          <List.Item>
            Customize the "Back-to-Top" button's color, label, and size..
          </List.Item>
          <List.Item>
            Copy and paste the code into the required files.
          </List.Item>
          <List.Item>Activate the app on your theme.</List.Item>
        </List>
        </div>
      </Card>
    </div>
  );
};

export default OnThisPage;
