import { Box, Card, Grid, Link, Text } from "@shopify/polaris";

const HelpCenter = () => {
  return (
    <div className="help_center" style={{ paddingBlock: "var(--p-space-200)" }}>
      <Card>
        <Text as="h2" variant="headingMg">
          Help Center
        </Text>
        <div style={{ paddingBlock: "var(--p-space-400)" }}>
          <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
              <Box
                borderColor="border"
                borderWidth="025"
                borderRadius="300"
                padding={400}
              >
                <img
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src="/images/faq.svg"
                />
                  <Text as="h3" variant="headingMd">
                     FAQ&apos;S
                    </Text>
                    <div style={{ paddingBlock: "var(--p-space-100)" }}>
                      <Text as="p" variant="bodyMd">
                      See common questions & answers regarding the app.
                      </Text>
                    </div>
                    <Link url="#">Find answer to popular FAQ</Link>
              </Box>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
            <Box
                borderColor="border"
                borderWidth="025"
                borderRadius="300"
                padding={400}
              >
                <img
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src="/images/faq.svg"
                />
                  <Text as="h3" variant="headingMd">
                    FAQ&apos;S
                    </Text>
                    <div style={{ paddingBlock: "var(--p-space-100)" }}>
                      <Text as="p" variant="bodyMd">
                      See common questions & answers regarding the app.
                      </Text>
                    </div>
                    <Link url="#">Find answer to popular FAQ</Link>
              </Box>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
            <Box
                borderColor="border"
                borderWidth="025"
                borderRadius="300"
                padding={400}
              >
                <img
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src="/images/faq.svg"
                />
                  <Text as="h3" variant="headingMd">
                    FAQ&apos;S
                    </Text>
                    <div style={{ paddingBlock: "var(--p-space-100)" }}>
                      <Text as="p" variant="bodyMd">
                      See common questions & answers regarding the app.
                      </Text>
                    </div>
                    <Link url="#">Find answer to popular FAQ</Link>
              </Box>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 3 }}>
            <Box
                borderColor="border"
                borderWidth="025"
                borderRadius="300"
                padding={400}
              >
                <img
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src="/images/faq.svg"
                />
                  <Text as="h3" variant="headingMd">
                    FAQ&apos;S
                    </Text>
                    <div style={{ paddingBlock: "var(--p-space-100)" }}>
                      <Text as="p" variant="bodyMd">
                      See common questions & answers regarding the app.
                      </Text>
                    </div>
                    <Link url="#">Find answer to popular FAQ</Link>
              </Box>
            </Grid.Cell>
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default HelpCenter;
