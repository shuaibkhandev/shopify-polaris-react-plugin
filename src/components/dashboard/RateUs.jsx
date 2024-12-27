import { CalloutCard, Icon, Text } from "@shopify/polaris";
import {StarFilledIcon} from '@shopify/polaris-icons';
const RateUs = () => {
  return (
    <div
    className="rate_us"
    style={{ paddingBlock: "var(--p-space-200)" }}
     
  >
    <CalloutCard
      title="How was your experience with Hide Price App"
      illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
      primaryAction={{
        content: "Rate Us",
        url: "#",
      }}
      
    >
      <Text as="p" variant="bodyLg">Anything you’re missing in our app? Let us know!
      We love hearing your ideas. Your suggestions help us decide what to add next make the app even better.</Text>

      <div className="rating_star" style={{paddingBlock: "var(--p-space-200)"}}>
      <Icon source={StarFilledIcon} tone="yellow"/>
            <Icon source={StarFilledIcon}/>
            <Icon source={StarFilledIcon}/>
            <Icon source={StarFilledIcon}/>
            <Icon source={StarFilledIcon}/>
      </div>
    </CalloutCard>
  </div>
  )
}

export default RateUs