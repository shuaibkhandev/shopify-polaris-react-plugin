import { Button, Card, InlineStack } from "@shopify/polaris";
import { useState } from "react";
import PlanCard from "./PlanCard";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const planDetails = {
    monthly: {
      name: "Monthly Ultimate Plan",
      description:
        "Enjoy premium access of all features and level up your options with no limitations",
      discountPrice: null,
      price: "$5.99",
      features: [
        "Infinite Scrolling & Load More Button",
        "Multiple Animation Supported",
        "Customize Load More, Back to Top Show Less",
        "Show Load More Text or Images",
      ],
      off: null,
    },
    annual: {
      name: "Annual Ultimate Plan",
      description:
        "Enjoy premium access of all features and level up your options with no limitations",
      discountPrice: "$40.00",
      price: "$48.99",
      features: [
        "Infinite Scrolling & Load More Button",
        "Multiple Animation Supported",
        "Customize Load More, Back to Top Show Less",
        "Show Load More Text or Images",
        "Advanced Caching for Faster Loading",
        "Mobile-Friendly & Fully Responsive Design",
        "Customizable Themes and Layouts",
        "SEO Optimization for Better Visibility",
      ],
      off: "16% OFF",
    },
  };

  return (
    <div
      className="plans"
      style={{
     
      }}
    >
      {/* Plan Toggle */}
      <div className="plans_toggle">
        <Card padding={200} roundedAbove="xs">
          <InlineStack gap="400" wrap={false} blockAlign="center">
            <Button
              id={selectedPlan === "monthly" ? "active_button" : ""}
              variant="tertiary"
              fullWidth={true}
              onClick={() => setSelectedPlan("monthly")}
            >
              Monthly Plan
            </Button>
            <Button
              id={selectedPlan === "annual" ? "active_button" : ""}
              variant="tertiary"
              fullWidth={true}
              onClick={() => setSelectedPlan("annual")}
            >
              Get 16% off on Annual Plan
            </Button>
          </InlineStack>
        </Card>
      </div>

      {/* Plan Details */}
      <PlanCard
        planName={planDetails[selectedPlan].name}
        description={planDetails[selectedPlan].description}
        price={planDetails[selectedPlan].price}
        discountPrice={planDetails[selectedPlan].discountPrice}
        off={planDetails[selectedPlan].off}
        features={planDetails[selectedPlan].features}
        planDuration={selectedPlan === "monthly" ? "month" : "year"}
        isActive={selectedPlan === "monthly"}
      />
    </div>
  );
};

export default Plans;
