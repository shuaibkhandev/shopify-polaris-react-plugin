import React from "react";
import { Card, Text } from "@shopify/polaris";
const AppTourGuide = ({ time }) => {



  return (
    <div
      className="app_tour_guide"
      id="app_tour_guide"
      style={{ paddingBlock: "var(--p-space-200)" }}
    >
      <Card>
        <Text as="h2" variant="headingMd">
          App Usage Tour Guide
        </Text>

        <iframe
          width="100%"
          height="445"
          style={{ borderRadius: "10px", border: "none", marginBlock: "15px" }}
          src={`https://www.youtube.com/embed/YtbaxJFb9zE?si=VH-v7Zr6n9zaZqo0&autoplay=1&mute=1&controls=1&start=${time}`}
        ></iframe>

        <Text as="p" variant="bodyLg">
          Read the instructions and implement them in the app accordingly.Click
          the 'Watch Me' button to view the video guide.If you encounter any
          compatibility issues, feel free to contact our support team via chat.
        </Text>
      </Card>
    </div>


  );
};

export default AppTourGuide;
