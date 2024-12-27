import { Badge, Box, Text,  Tooltip } from "@shopify/polaris";


const AnalyticsCard = ({ title, value, badge, tooltip }) => (
    <Tooltip content={tooltip || ""}>
      <Box sectioned>
        <Text as="h3" variant="headingSm" >
          {title}        
        </Text>
        <div style={{paddingBlockStart:"var(--p-space-200)"}}>
        <Text variant="headingSm" as="span">
          {value}
        </Text>
        {badge ? <Badge status="success">{badge}</Badge> : "_"}
        </div>
      </Box>
    </Tooltip>
  );

  
  export default AnalyticsCard;