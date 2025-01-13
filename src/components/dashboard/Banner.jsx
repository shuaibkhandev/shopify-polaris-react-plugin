import { Swiper, SwiperSlide } from "swiper/react";
import {XIcon} from '@shopify/polaris-icons'
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Box, Button, Icon, Text } from "@shopify/polaris";


const Banner = () => {
  return (
    <div className="banner" style={{ paddingBlock: "var(--p-space-200)", position:"relative" }}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="banner_slider"
        style={{
          borderRadius: "var(--p-border-radius-300)",
          backgroundColor: "#303030",
        }}
      >
        <SwiperSlide>
          <div className="banner-inner">
            <Box>
              <img
                alt="img"
                width={318}
                height={281}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="/images/banner_image.webp"
              />
            </Box>
            <Box  padding="400">
              <Text as="h2" variant="headingLg">
                Convert Store into Mobile App
              </Text>
              <Text as="p" variant="bodyMd">
                Turn your store into a Mobile App effortlessly! Create a fully
                functional app that syncs with your store & boosts sales with
                push notification - No Extra advertising cost needed!
              </Text>
              <Button>Enjoy - 10 days Free Trail</Button>
            </Box>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-inner">
            <Box>
              <img
                alt="img"
                width={318}
                height={281}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="/images/banner_image.webp"
              />
            </Box>
            <Box>
              <Text as="h2" variant="headingLg">
                Convert Store into Mobile App
              </Text>
              <Text as="p" variant="bodyMd">
                Turn your store into a Mobile App effortlessly! Create a fully
                functional app that syncs with your store & boosts sales with
                push notification - No Extra advertising cost needed!
              </Text>
              <Button>Enjoy - 10 days Free Trail</Button>
            </Box>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-inner">
            <Box>
              <img
                alt="img"
                width={318}
                height={281}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src="/images/banner_image.webp"
              />
            </Box>
            <Box>
              <Text as="h2" variant="headingLg">
                Convert Store into Mobile App
              </Text>
              <Text as="p" variant="bodyMd">
                Turn your store into a Mobile App effortlessly! Create a fully
                functional app that syncs with your store & boosts sales with
                push notification - No Extra advertising cost needed!
              </Text>
              <Button>Enjoy - 10 days Free Trail</Button>
            </Box>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="close_banner">
      <Icon source={XIcon} />
      </div>
    </div>
  );
};

export default Banner;
