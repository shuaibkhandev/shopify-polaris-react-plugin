import {
  Card,
  MediaCard,
  VideoThumbnail,
  Text,
  Icon,
  Modal,
} from "@shopify/polaris";
import { LogoYoutubeIcon } from "@shopify/polaris-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useCallback } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const QuickTutorials = () => {
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);

  return (
    <div
      className="quick-tutorial"
      style={{ paddingBlock: "var(--p-space-200)" }}
    >
      <Card>
        <Text as="h3" variant="headingMd" fontWeight="semibold">
          Quick tutorials
        </Text>
        <div
          className="sub-heading"
          style={{ paddingTop: "var(--p-space-200)" }}
        >
          <Icon source={LogoYoutubeIcon} />
          <Text as="p" variant="bodyLg" tone="subdued">
            Use this personalized guide to get your store up and running.
          </Text>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          modules={[FreeMode, Pagination]}
          className="dashboard-slider"
          style={{ paddingBlock: "var(--p-space-400)" }}
        >
          <SwiperSlide>
            <MediaCard
              portrait
              title="Turn your side-project into a business"
              primaryAction={{ content: "Learn More", onAction: () => {} }}
              description="In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business."
              popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
            >
              <VideoThumbnail
                videoLength={80}
                thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                onClick={handleChange}
              />
            </MediaCard>
          </SwiperSlide>
          <SwiperSlide>
            <MediaCard
              portrait
              title="Turn your side-project into a business"
              primaryAction={{ content: "Learn More", onAction: () => {} }}
              description="In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business."
              popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
            >
              <VideoThumbnail
                videoLength={80}
                thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                onClick={handleChange}
              />
            </MediaCard>
          </SwiperSlide>
          <SwiperSlide>
            <MediaCard
              portrait
              title="Turn your side-project into a business"
              primaryAction={{ content: "Learn More", onAction: () => {} }}
              description="In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business."
              popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
            >
              <VideoThumbnail
                videoLength={80}
                thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                onClick={handleChange}
              />
            </MediaCard>
          </SwiperSlide>
          <SwiperSlide>
            <MediaCard
              portrait
              title="Turn your side-project into a business"
              primaryAction={{ content: "Learn More", onAction: () => {} }}
              description="In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business."
              popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
            >
              <VideoThumbnail
                videoLength={80}
                thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                onClick={handleChange}
              />
            </MediaCard>
            {active && (
              <Modal
                open={active}
                onClose={handleChange}
                title="Reach more shoppers with Instagram product tags"
              >
                <Modal.Section>
                  <video
                    src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                    controls
                    autoPlay
                    style={{
                      width: "100%",
                      height: "400px",
                      borderRadius: "8px",
                    }}
                  ></video>
                </Modal.Section>
              </Modal>
            )}
          </SwiperSlide>
        </Swiper>
      </Card>
    </div>
  );
};

export default QuickTutorials;
