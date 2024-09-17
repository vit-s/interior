'use client'

import { Button }                                  from "/components/ui/button"
import Image                                       from "next/image"
import React, { useRef }                           from 'react'
import { TbArrowUpRight }                          from 'react-icons/tb'
import { motion, useScroll, useTransform }         from "framer-motion"
import { desVariants, tagVariants, titleVariants } from "/utils/animation"

const page = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <div>
      <div className={`bg-[url('/image/whoweare.jpg')] bg-center bg-cover`}>
        <h1 className={`container py-32 text-6xl font-semobold text-black tracking-widest text-center lg:py-64`}>
          Who are we?
        </h1>
      </div>
      <div className={`container mx-auto p-10`}>
        <div className={`pt-4`}>
          <motion.h2
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={titleVariants}
            className={`text-3xl font-semibold text-center lg:p-10 lg:text-5xl`}
          >
            We have great idea & Interior Design
          </motion.h2>
          <motion.p
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={desVariants}
            className={`text-2xl text-center font-medium pb-10 mt-5`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem expedita id, laboriosam odit perferendis
            repellat suscipit totam. Alias asperiores consequuntur cumque, dolores est, eveniet excepturi illo in
            laboriosam natus necessitatibus placeat praesentium provident quas qui quia, recusandae sit totam unde?
          </motion.p>
        </div>
        <div className={`items-center lg:flex gap-x-8`}>
          {/*left image section*/}
          <motion.div
            style={{ scale }}
            ref={ref}
            className={`w-full`}
          >
            <Image
              src={`/image/gallery1123.jpg`}
              width={700}
              height={700}
            />
          </motion.div>
          {/*right content  section */}
          <motion.div
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={tagVariants}
          >
            <p className={`pb-8 tracking-wide mt-6`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi assumenda dignissimos facere impedit
              neque quasi. Animi blanditiis dolorum est incidunt maiores minus mollitia nihil non? Magnam, officiis
              quidem! Autem, optio, soluta. A amet animi aspernatur, autem culpa cupiditate dolor dolorum enim iste
              mollitia nihil odit omnis placeat qui quos! Ad adipisci asperiores, blanditiis consequuntur corporis
              dicta <br/> <br/>
              dolorem eaque excepturi, explicabo inventore iure nam odit officia officiis optio quia quidem quisquam
              ratione, sed sunt suscipit totam ut vel. A accusamus architecto dolores, ea eius eveniet facere illum in
              maiores minima nostrum officia officiis quo sapiente sed sint sit, vitae. Perferendis! <br/> <br/>
              <span className={`text-xl font-extrabold tracking-tight`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et ex expedita explicabo facere laborum nostrum odio omnis sequi voluptates.
              </span>
            </p>
            <Button className={`inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2`}>
              Read More <TbArrowUpRight className={`w-5 h-5 ml-2`}/>
            </Button>
          </motion.div>
        </div>
        {/*  Team Section */}
        <div className={`lg:py-20`}>
          <div className={`pt-8 pb-4`}>
            <motion.h1
              initial={'offscreen'}
              whileInView={`onscreen`}
              variants={titleVariants}
              className={`text-4xl font-bold tracking-wider text-center uppercase`}
            >
              Team
            </motion.h1>
          </div>
          <div className={`grid py-8 gap-20 lg:grid-cols-3`}>
            <motion.div
              initial={'offscreen'}
              whileInView={`onscreen`}
              variants={titleVariants}
              className={`border-2 border-primary`}
            >
              <div className={`p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3`}>
                <Image
                  src={`/image/profile2.jpg`}
                  width={200}
                  height={200}
                  alt={'profile'}
                  className={`mx-auto rounded-full`}
                />
                <h2 className={`py-4 text-2xl font-semibold uppercase`}>
                  Building Surveys
                </h2>
                <p className={`text-sm`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad dicta in ipsum, itaque natus
                  neque nisi omnis quos reiciendis sunt vel voluptate voluptatum? Omnis, possimus, voluptatibus. Aliquid
                  quibusdam, ratione!
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={'offscreen'}
              whileInView={`onscreen`}
              variants={desVariants}
              className={`border-2 border-primary`}
            >
              <div className={`p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3`}>
                <Image
                  src={`/image/profile1.jpg`}
                  width={200}
                  height={200}
                  alt={'profile'}
                  className={`mx-auto rounded-full`}
                />
                <h2 className={`py-4 text-2xl font-semibold uppercase`}>
                  Building Surveys
                </h2>
                <p className={`text-sm`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad dicta in ipsum, itaque natus
                  neque nisi omnis quos reiciendis sunt vel voluptate voluptatum? Omnis, possimus, voluptatibus. Aliquid
                  quibusdam, ratione!
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={'offscreen'}
              whileInView={`onscreen`}
              variants={tagVariants}
              className={`border-2 border-primary`}
            >
              <div className={`p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3`}>
                <Image
                  src={`/image/profile3.jpg`}
                  width={200}
                  height={200}
                  alt={'profile'}
                  className={`mx-auto rounded-full`}
                />
                <h2 className={`py-4 text-2xl font-semibold uppercase`}>
                  Building Surveys
                </h2>
                <p className={`text-sm`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad dicta in ipsum, itaque natus
                  neque nisi omnis quos reiciendis sunt vel voluptate voluptatum? Omnis, possimus, voluptatibus. Aliquid
                  quibusdam, ratione!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page