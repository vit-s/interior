'use client'

import { Input }                                   from "/components/ui/input"
import Link                                        from "next/link"
import { motion }                                  from "framer-motion"
import { desVariants, tagVariants, titleVariants } from "../utils/animation"

const Footer = () => {
  return (
    <div className={`bg-tertiary`}>
      <div className={`container mx-auto lg:grid lg:grid-cols-2 p-14`}>
        <div className={`grid gap-4 pb-4 text-left fg:pb-0 lg:grid-cols-3`}>
          <motion.div
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={titleVariants}
          >
            <h2 className={`pb-4 text-xl font-semibold uppercase`}>
              Company
            </h2>
            <div className={`flex flex-col`}>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >About Us</Link>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >Press</Link>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >Careers</Link>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >Contact</Link>
            </div>
          </motion.div>
          <motion.div
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={desVariants}
          >
            <h2 className={`pb-4 text-xl font-semibold uppercase`}>
              Development
            </h2>
            <div className={`flex flex-col`}>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >Documentation</Link>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >Reference</Link>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >Changelog</Link>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >Status</Link>
            </div>
          </motion.div>
          <motion.div
            initial={'offscreen'}
            whileInView={`onscreen`}
            variants={tagVariants}
          >
            <h2 className={`pb-4 text-xl font-semibold uppercase`}>
              Connect
            </h2>
            <div className={`flex flex-col`}>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >Instagram</Link>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >Twitter</Link>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >LinkedIn</Link>
              <Link
                href={'/'}
                className={`py-1 hover:underline`}
              >Facebook</Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={'offscreen'}
          whileInView={`onscreen`}
          variants={titleVariants}
        >
          <p className={`pb-4 text-xl font-semibold`}>
            Stay Updated
          </p>
          <div className={`relative lg:max-w-sm`}>
            <Input
              type={`name`}
              id={`first name`}
              placeholder={`Email Address`}
            />
            <button className={`absolute bg-black text-white rounded-full h-10 px-3 text-sm top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary`}>
              Subscribe
            </button>
          </div>
          <p className={`pt-4 text-gray-500`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ea incidunt officiis repellat tempore. A
            aperiam debitis, delectus doloremque earum, eligendi exercitationem expedita iure nobis non provident
            repellendus rerum sapiente?
          </p>
        </motion.div>
      </div>
      {/*  Copyright */}
      <motion.div
        initial={'offscreen'}
        whileInView={`onscreen`}
        variants={desVariants}
        className={`py-10 bg-black dark:bg-primary`}
      >
        <div className={`container mx-auto text-white text-center lg:justify-between lg:flex `}>
          <div className={`pb-4 lg:pb-0`}>
            <p>
              &copy; 2024 Interior. All Rights Reserved.
            </p>
          </div>
          <div>
            <Link
              href={'/'}
              className={`p-4 hover:underline`}
            >
              Privacy
            </Link>
            <Link
              href={'/'}
              className={`p-4 hover:underline`}
            >
              Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Footer
