import { Card, Grid, Link, Text } from "@shopify/polaris";

const appData = [
  {
    id: 1,
    imageUrl: "/images/prod_1.svg",
    title: "Variator: See Products Variants",
    description: "Show variants on collection pages as separate product",
    setupLink: "/",
  },
  {
    id: 2,
    imageUrl: "/images/prod_1.svg",
    title: "Product Filter",
    description: "Add advanced filters to your product collection",
    setupLink: "/filter-app",
  },
  {
    id: 3,
    imageUrl: "/images/prod_1.svg",
    title: "Stock Notifier",
    description: "Notify customers when products are back in stock",
    setupLink: "/stock-notifier",
  },
  {
    id: 4,
    imageUrl: "/images/prod_1.svg",
    title: "Discount Manager",
    description: "Easily manage discounts for your store",
    setupLink: "/discount-manager",
  },
  {
    id: 5,
    imageUrl: "/images/prod_1.svg",
    title: "Abandoned Cart Recovery",
    description: "Recover lost sales with automated emails",
    setupLink: "/cart-recovery",
  },
  {
    id: 6,
    imageUrl: "/images/prod_1.svg",
    title: "Shipping Calculator",
    description: "Estimate shipping costs on product pages",
    setupLink: "/shipping-calculator",
  },
];

const OurApps = () => {
  return (
    <div className="more__apps" style={{ paddingBlock: "var(--p-space-400)" }}>
      <Card padding="600">
        <Text as="h2" variant="headingLg">Our More Apps</Text>
        <Text as="p" variant="bodySm">
          Increase sessions, engage shoppers and promote your products by adding more apps.
        </Text>
        <div style={{ paddingBlock: "var(--p-space-400)" }}>
          <Grid>
            {appData.map((app) => (
              <Grid.Cell key={app.id} columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4 }}>
                <div
                  className="prod_card"
                  style={{
                    padding: "var(--p-space-400)",
                  }}
                >
                  <img
                    src={app.imageUrl}
                    alt={app.title}
                    width={40}
                    height={40}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div className="prod_cnt_col">
                    <Text as="h3" variant="headingMd">
                      <Link>{app.title}</Link>
                    </Text>
                    <Text as="p" variant="bodyMd">
                      {app.description}
                    </Text>
                    <Link url={app.setupLink}>Setup app</Link>
                  </div>
                </div>
              </Grid.Cell>
            ))}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default OurApps;
