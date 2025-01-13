import {
  Badge,
  Box,
  Button,
  Card,
  InlineStack,
  List,
  Text,
} from "@shopify/polaris";

const PlanCard = ({
  planName,
  description,
  price,
  off,
  features,
  isActive,
  planDuration,
  discountPrice,
}) => (
  <div className="plan_card" >
    <Card roundedAbove="xs">
      {off ? <Badge tone="info">{off}</Badge> : " "}

      <Text as="h2" variant="headingLg">
        {planName}
      </Text>
      <Text as="p" variant="bodySm">
        {description}
      </Text>

      {/* Price Details */}
      <Box
        background="bg-fill-secondary"
        borderRadius="200"
        paddingInline="400"
        paddingBlock={"200"}
      >
        <Text as="span">5-day free trial</Text>
        <InlineStack>
          {/* Display original price with underline if a discount price exists */}
          {price !== discountPrice && discountPrice && (
            <Text as="span" variant="bodyLg" textDecorationLine="line-through">
              {price}
            </Text>
          )}

          {/* Display discounted price */}
          <Text as="h3" variant="headingLg">
            { discountPrice ? discountPrice : price}
          </Text>
          <Text as="span" variant="bodyLg">
            /{planDuration}
          </Text>
        </InlineStack>
      </Box>

      {/* Features List */}
      <Box
        background="bg-fill-secondary"
        borderRadius="200"
        paddingInline="400"
        paddingBlock={"200"}
      >
        <List type="bullet" gap="loose">
          {features.map((feature, index) => (
            <List.Item key={index}>{feature}</List.Item>
          ))}
        </List>
      </Box>

      {/* Current Plan Button */}
      {isActive ? (
        <Button
          id="current_plan_button"
          size="large"
          variant="tertiary"
          fullWidth
        >
          Current Activated Plan
        </Button>
      ) : (
        <Button
          id="pick_plan_button"
          size="large"
          variant="primary"
          fullWidth
        >
          Pick Your Plan
        </Button>
      )}
    </Card>
  </div>
);

export default PlanCard;
