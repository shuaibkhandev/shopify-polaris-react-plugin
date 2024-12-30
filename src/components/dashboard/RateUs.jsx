import { CalloutCard, Icon, Text } from "@shopify/polaris";
import {StarFilledIcon} from '@shopify/polaris-icons';
const RateUs = () => {
  return (
    <div
    className="rate_us"
    style={{ paddingBlock: "var(--p-space-200)" }}
     
  >
    <CalloutCard
      title="How was your experience with Scroll Freely : Infinite Scroll"
      illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
      primaryAction={{
        content: "Rate Us",
        url: "#",
        variant : "primary"
      }}
      onDismiss={() => {}}
    >
      <Text as="p" variant="bodyLg">Rate your experience by tapping 5 stars!</Text>

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

// --pc-button-bg-gradient: var(--p-color-button-gradient-bg-fill);
// --pc-button-box-shadow: var(--p-shadow-button-primary);
// --pc-button-box-shadow_active: var(--p-shadow-button-primary-inset);
// --pc-button-bg: var(--pc-button-bg-gradient), var(--p-color-bg-fill-brand);
// --pc-button-bg_hover: var(--pc-button-bg-gradient), var(--p-color-bg-fill-brand-hover);
// --pc-button-bg_active: var(--pc-button-bg-gradient), var(--p-color-bg-fill-brand-active);
// --pc-button-bg_disabled: var(--p-color-bg-fill-brand-disabled);
// --pc-button-color: var(--p-color-text-brand-on-bg-fill);
// --pc-button-color_disabled: var(--p-color-text-brand-on-bg-fill-disabled);
// --pc-button-icon-fill: var(--p-color-text-brand-on-bg-fill);
// --pc-button-icon-fill_disabled: var(--p-color-text-brand-on-bg-fill-disabled);
// }