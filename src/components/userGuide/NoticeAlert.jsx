import { Banner, Text } from "@shopify/polaris";
import React from "react";

const NoticeAlert = () => {
  return (
    <div className="banner"  style={{ paddingBlock: "var(--p-space-200)" }}>
      <Banner title="Notice Alert">
        <p>View a summary of your online store’s performance.</p>
      </Banner>
    </div>
  );
};

export default NoticeAlert;
