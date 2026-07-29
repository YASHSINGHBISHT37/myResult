import React from "react"
import { Link, useLocation } from "react-router-dom"
import { fancyImgs } from "@/data/FancyImgs"
import ImageTrail, { ImageTrailItem } from "@/components/fancy/image/image-trail"
import LineAni from "../ui/LineAni"

const footerLinks = [
  {
    header: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "IPU Result", href: "/ipu-result" },
      { name: "Leaderboard", href: "/leaderboard" },
      { name: "Study Resources", href: "/study-resources" },
    ],
  },
  {
    header: "Support",
    links: [
      { name: "Contact", href: "/Contact" },
      { name: "About Us", href: "/About" },
      { name: "Privacy Policy", href: "/Privacy" },
      { name: "Terms of Service", href: "/Terms" },
    ],
  },
  {
    header: "Connect",
    links: [
      { name: "Email", href: "mailto:yashbisht0007@gmail.com" },
      { name: "Github", href: "https://github.com/yourusername" },
      { name: "Linkedin", href: "https://linkedin.com/in/yourusername" },
      { name: "Instagram", href: "https://instagram.com/yourusername" },
    ],
  },
]

export default function Footer() {
  return (
    <div className="md:p-4 md:pt-0 relative z-99 bg-black">
      <div className=" sticky bottom-0 left-0 w-full h-120 md:h-180 bg-[#ECF1F0] flex justify-center items-center rounded-4xl overflow-hidden">

        <div className="absolute inset-0 z-40 pointer-events-auto overflow-hidden">
          <ImageTrail
            threshold={80}
            keyframes={{ opacity: [0, 1, 1, 0], scale: [1, 1, 2] }}
            keyframesOptions={{
              opacity: { duration: 2, times: [0, 0.001, 0.9, 1] },
              scale: { duration: 2, times: [0, 0.8, 1] },
            }}
            repeatChildren={1}>
            {[...fancyImgs, ...fancyImgs].map((image, index) => (
              <ImageTrailItem key={index}>
                <div className="md:h-40 md:w-40 w-40 h-40 relative overflow-hidden">
                  <img src={image.url} alt="image" className="w-full h-full object-cover" />
                </div>
              </ImageTrailItem>
            ))}
          </ImageTrail>
        </div>

        <div className="relative overflow-hidden w-full h-full flex md:justify-end p-6 md:p-10 text-left md:text-right items-start text-bg pointer-events-none z-50">
          <div className="flex flex-col md:flex-row justify-between pointer-events-none gap-10 md:gap-30">

            <div className="flex items-start gap-6 md:gap-14 text-sm md:text-xl">
              {footerLinks.map((item, i) => (
                <div key={i}>
                  <h1 className="pb-2 font-bold text-bg">{item.header}</h1>
                  <div className="flex flex-col">
                    {item.links.map((link, j) => (
                      <Link key={j} to={link.href} className="cursor-pointer text-bg/80 leading-4 pointer-events-auto md:leading-5.5 hover:text-bg transition-all duration-200 ease-in-out">
                        <LineAni data={link.name} />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Email Address */}
            <div className="w-xs md:w-sm text-left">
              <p className="md:leading-5.5 pb-4 md:pb-8 text-md leading-4 md:text-xl">Keep in the loop with the myResult® newsletter.</p>
              <input type="text" placeholder="Email Address" className="outline-0 border-b border-bg w-full md:pb-1 pointer-events-auto font-bold md:text-lg" />
            </div>
          </div>

          <h2 className="absolute bottom-0 left-0 w-full translate-y-1/3 pointer-events-none z-50 tracking-tighter text-[10vh] md:text-[36vh] md:text-left text-center font-bold bg-linear-to-tr from-[#EFEAE3] via-black to-[#EFEAE3] bg-clip-text text-transparent">
            myResult<span className="font-normal">®</span>
          </h2>

          <div className="flex justify-between md:justify-normal gap-8 absolute md:right-6 bottom-20 right-0  md:w-auto w-full md:bottom-4 pointer-events-none px-6 md:p-0 text-xs md:text-md">
            <div>
              <h1>Location: Delhi, India</h1>
              <h1>Developed by Yash Singh Bisht</h1>
            </div>
            <div>
              <h1>© 2026 myResult</h1>
              <h1>All rights reserved.</h1>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}