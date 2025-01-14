import {
  BlockStack,
  Box,
  Button,
  Card,
  Divider,
  List,
  Text,
} from "@shopify/polaris";
import React from "react";
import {
    PlayCircleIcon
  } from '@shopify/polaris-icons';
const GeneralSetting = ({setTime, scrollToVideo}) => {
  return (
    <div
      className="general_seting"
      style={{ paddingBlock: "var(--p-space-200)" }}
    >
      <Card>
        <BlockStack gap={"500"}>
          <Box>
            <Text as="h3" variant="headingSm" >
              Step 1: How To Configure App "General Settings
            </Text>
            <Text as="p" variant="bodyLg" tone="subdued">
              At the back end, go to App Configuration from the app page. check
              below sections and fill out one by one then click on save button.
            </Text>
            <Button icon={PlayCircleIcon}  onClick={()=> {setTime(14); scrollToVideo()} } variant="tertiary" size="large"> &nbsp; &nbsp;Watch Me &nbsp; &nbsp; 0:14</Button>
            <List type="bullet" gap="loose">
              <List.Item>
                <Text as="span" variant="headingMd">Enable App: </Text>
                 Click on the enable app option and activate the app
                functionality.
              </List.Item>
              <List.Item>
              <Text as="span" variant="headingMd">Loading Type: </Text>
                 Here you can choose the display options for
                products infinite scroll or load more button.
              </List.Item>
              <List.Item>
              <Text as="span" variant="headingMd">Animation Type: </Text>
                 Option to display products loading with
                animation effects.
              </List.Item>
              <List.Item>
              <Text as="span" variant="headingMd"> Loading Graphic: </Text>
                Enable the given option select display
                icon/images for loading products. Upload svg format.
              </List.Item>
            </List>
          </Box>
          <Divider />
          <Box>
            <Text as="h3" variant="headingSm">
              Step 2: Customize Contact Us/ Add to Quote Form
            </Text>
            <Text as="p" variant="bodyLg"  tone="subdued">
              At the back end, go to App Configuration from the app page. check
              below sections and fill out one by one then click on save button.
            </Text>
            <Button icon={PlayCircleIcon}  onClick={()=> {setTime(74); scrollToVideo()} }  variant="tertiary" size="large">&nbsp; &nbsp;Watch Me &nbsp; &nbsp; 1:15</Button>
          </Box>
          
        </BlockStack>
      </Card>
    </div>
  );
};

export default GeneralSetting;
