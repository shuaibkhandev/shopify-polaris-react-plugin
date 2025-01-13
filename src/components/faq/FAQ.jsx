import { Icon, Collapsible, Text, Card, BlockStack, Button } from "@shopify/polaris";
import { useState } from "react";
import { CaretUpIcon, ChevronDownIcon } from "@shopify/polaris-icons";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track the index of the currently open FAQ

    const toggleFAQ = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the same item or open a new one
    };
  
  const faqItems = [
    {
      question: "What is Shopify Polaris?",
      answer:
        "Shopify Polaris is a design system for building consistent user interfaces for Shopify applications.",
    },
    {
      question: "How do I use Shopify Polaris?",
      answer:
        "You can use Shopify Polaris by installing the package and importing the components into your React app.",
    },
    {
      question: "Is there a cost to using Shopify Polaris?",
      answer:
        "No, Shopify Polaris is free to use for building applications on the Shopify platform.",
    },
    {
      question: "Can I customize the Shopify Polaris components?",
      answer:
        "Yes, Shopify Polaris components are designed to be customizable to meet your needs.",
    },
    {
      question: "Can I customize the Shopify Polaris components?",
      answer:
        "Yes, Shopify Polaris components are designed to be customizable to meet your needs.",
    },
    {
      question: "Can I customize the Shopify Polaris components?",
      answer:
        "Yes, Shopify Polaris components are designed to be customizable to meet your needs.",
    },
  ];

  return (
    <div className="faq">
      {faqItems.map((item, index) => (
        <Card key={index} roundedAbove="xs">
          <BlockStack>
            <div
              onClick={() => toggleFAQ(index)} // Toggle the specific FAQ section
              aria-expanded={open[index]} // Use the open state for the collapsible
              aria-controls={`collapsible-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <Text as="h5" variant="headingXs">
                {item.question}
              </Text>
              <Icon
                source={openIndex === index ? CaretUpIcon : ChevronDownIcon}
              />
            </div>
            <Collapsible
              open={openIndex === index}
              id={`faq-collapsible-${index}`}
              transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
              expandOnPrint
            >
              <Text as="p" variant="bodySm">
                {item.answer}
              </Text>
              <Button variant="tertiary" >Chat with us</Button>
            </Collapsible>
          </BlockStack>
        </Card>
      ))}
    </div>
  );
};

export default FAQ;
