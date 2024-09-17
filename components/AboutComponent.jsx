'use client'

import Image                                       from "next/image"
import { motion }                                  from "framer-motion"
import { desVariants, tagVariants, titleVariants } from "../utils/animation"

const AboutComponent = () => {
  return (
    <div className={`container mx-auto py-12 xl:py-24 h-[auto]`}>
      <div className={`grid lg:grid-cols-2 place-items-center`}>
        <motion.div
          initial={'offscreen'}
          whileInView={`onscreen`}
          variants={titleVariants}
        >
          <Image
            src={`/image/aboutfront.png`}
            width={900}
            height={500}
            alt={`About`}
            className={`max-md:hidden`}
          />
        </motion.div>
        <div className={`items-center`}>
          <motion.h2
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={titleVariants}
            className={`px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl`}
          >
            We are awards Winning Company
          </motion.h2>
          <motion.p
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={desVariants}
            className={`px-12 tracking-wider uppercase text-gray-400 mt-3`}
          >
            World Award
          </motion.p>
          <motion.p
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={tagVariants}
            className={`px-12 pb-4 mt-4`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque esse temporibus voluptates. Consectetur
            explicabo illum libero porro quae quam quibusdam rem sequi vitae voluptates! Eos id incidunt laboriosam quia
            repudiandae suscipit, vero voluptate? Animi ipsam, non odio ratione rerum similique!
          </motion.p>
          <motion.p
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={tagVariants}
            className={`px-12 pb-4`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi laborum magnam nulla odit placeat
            reiciendis rem voluptatem. Aliquid beatae commodi dolorem fugit laborum magni maiores, mollitia, quia
            ratione, repellat voluptates?
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
