import {
  BlockStack,
  Box,
  Button,
  Card,
  ResourceList,
  ResourceItem,
  Text,
  Avatar,
} from "@shopify/polaris";
import { useState, useRef, useEffect } from "react";
import WhatsappImg from "/images/whatsapp.svg"
import SkypeImg from "/images/skype.svg"
import CalendarImg from "/images/calendar.svg"
import MailImg from "/images/mail.svg"

import {
  ChatIcon,
} from "@shopify/polaris-icons";

const ChatExperts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);

  const items = [
    {
      id: "whatsapp",
      url: "#",
      name: "WhatsApp",
      description: "Get instant reply on WhatsApp",
      avatar: WhatsappImg,
    },
    {
      id: "skype",
      url: "#",
      name: "Skype",
      description: "Get instant reply on Skype",
      avatar: SkypeImg,
    },
    {
      id: "email",
      url: "#",
      name: "Email",
      description: "Create Ticket",
      avatar: MailImg,
    },
    {
      id: "schedule-demo",
      url: "#",
      name: "Schedule a Free Demo",
      description: "Request a demo",
      avatar: CalendarImg,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="chat-experts" ref={chatRef}>
      {isOpen && (
        <div className="card-wrapper">
          <Card roundedAbove="sm">
            <BlockStack gap="100">
              <Text as="h2" variant="headingMd">
                Extendons Support
              </Text>
              <Text as="p" variant="bodySm" color="subdued">
                We typically reply within 15-30 minutes
              </Text>
            </BlockStack>
            <Box padding="200">
              <ResourceList
                resourceName={{
                  singular: "contact option",
                  plural: "contact options",
                }}
                items={items}
                renderItem={(item) => {
                  const { id, url, name, description, avatar } = item;
                  const media = (
                    <Avatar source={avatar} color="base" backdrop size="lg" />
                  );

                  return (
                    <ResourceItem
                      id={id}
                      url={url}
                      media={media}
                      accessibilityLabel={`View details for ${name}`}
                    >
                      <Text variant="bodyMd" fontWeight="bold" as="h3">
                        {name}
                      </Text>
                      <Text variant="bodySm">{description}</Text>
                    </ResourceItem>
                  );
                }}
              />
            </Box>
            <Text alignment="center" as="h5" variant="bodySm">
              Powered by{" "}
              <Text as="span" variant="headingSm">
                Extendons
              </Text>
            </Text>
          </Card>
        </div>
      )}
      <Box>
        <Text id="notification" as="span">
          1
        </Text>
        <Button
          icon={ChatIcon}
          id="button"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        ></Button>
      </Box>
    </div>
  );
};

export default ChatExperts;
