'use client'
import { Button }                                  from "/components/ui/button"
import Image                                       from "next/image"
import { TbArrowUpRight }                          from "react-icons/tb"
import { Swiper, SwiperSlide }                     from "swiper/react"
import 'swiper/css'
import { Autoplay }                                from 'swiper/modules'
import { motion }                                  from "framer-motion"
import { desVariants, tagVariants, titleVariants } from "../utils/animation"

const CatalogSwiperSection = () => {
  return (
    <div className={`py-8 lg:py-28`}>
      <div className={`container mx-auto grid p-8 lg:grid-cols-1`}>
        <div className={`text-left`}>
          <motion.h1
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={titleVariants}
            className={`py-4 text-4xl font-medium lg:text-6xl lg:py-0`}
          >Modern Classic
          </motion.h1>
          <motion.h2
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={desVariants}
            className={`pb-6 text-xl font-bold tracking-wider mt-5`}
          >LUXURY DECOR TO CREATE COMFORT IN OUT HOME
          </motion.h2>
        </div>
        <motion.div
          initial={'offscreen'}
          whileInView={`onscreen`}
          variants={tagVariants}
          className={`grid grid-cols-2 text-gray-500 gap-x-8`}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto consectetur eligendi, fugiat
            impedit molestiae sequi tempora temporibus? Consectetur eligendi eos, est laborum nesciunt quaerat quis
            sapiente tempora velit voluptatibus! Ad architecto commodi deleniti distinctio dolores et facilis iure, nisi
            omnis perferendis provident quae quisquam recusandae reiciendis rerum tempore voluptatem?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto consectetur eligendi, fugiat
            impedit molestiae sequi tempora temporibus? Consectetur eligendi eos, est laborum nesciunt quaerat quis
            sapiente tempora velit voluptatibus! Ad architecto commodi deleniti distinctio dolores et facilis iure, nisi
            omnis perferendis provident quae quisquam recusandae reiciendis rerum tempore voluptatem?
          </p>
        </motion.div>
        <a href="/gallery">
          <Button className={`inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2`}>
            View Gallery <TbArrowUpRight className={`w-5 h-5 ml-2`}/>
          </Button>
        </a>
      </div>
      {/*  Swiper Section */}
      <Swiper
        sliderPerView={1}
        breakpoints={{
          640:  {
            slidesPerView: 2,
            spaceBetween:  20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween:  20,
          },
        }}
        autoplay={{
          delay:                2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src={`/image/swiper1.jpg`}
            alt={`swiper`}
            width={520}
            height={220}
            className={`w-full`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`/image/swiper2.jpg`}
            alt={`swiper`}
            width={520}
            height={220}
            className={`w-full`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`/image/swiper3.jpg`}
            alt={`swiper`}
            width={520}
            height={220}
            className={`w-full`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`/image/swiper4.jpg`}
            alt={`swiper`}
            width={520}
            height={220}
            className={`w-full`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={`/image/swiper5.jpg`}
            alt={`swiper`}
            width={520}
            height={220}
            className={`w-full`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CatalogSwiperSection
