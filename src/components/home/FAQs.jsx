import { Plus, Minus } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../motion-primitives/accordion';
import faqs from '@/data/faqs'
import { motion } from "motion/react";


export default function FAQs() {
  return (
    <div className='w-full min-h-screen flex flex-col relative bg-black md:p-10 md:py-40 p-4 pt-30'>

      <div className="flex flex-col justify-between">
        <div className="borde md:w-8xl text-text text-3xl md:text-[16vh] uppercase tracking-tighter font-bold flex flex-col items-center">
          <h2 className="md:text-xl text-xs tracking-normal text-pink-300 capitalize md:pb-10 md:pr-200">[ FAQs ]</h2>
          <h2 className="md:leading-30">Frequently</h2>

          <h2 className="md:leading-30 text-right flex items-center gap-1 md:gap-2">Asked Questi
            <motion.img className="w-10 h-10 md:w-40 md:h-40" src="/trail-images/2.png"
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }} />
            ns
          </h2>

        </div>

        <div className="w-full flex flex-col items-end justify- gap-4 px-10 pt-30 ">
          <p className=" text-2xl tracking-tighter w-lg leading-6.5 text-right text-pink-300">
            * Please email us at myResult@gmail.com if you have any other questions. *
          </p>
        </div>
      </div>


      <div className='mt-20 w-full flex items-center justify-center'>

        <div className='md:w-6xl'>
          <Accordion
            className='flex w-full flex-col divide-y divide-border-20'
            transition={{ duration: 0.2, ease: 'easeInOut' }}>

            {faqs.points.map((item) => (
              <AccordionItem key={item.head} value={item.head} className='py-6 group'>

                <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50 cursor-pointer'>
                  <div className='flex items-center justify-between text-white'>
                    <h1 className='text-2xl text-[#ECF1F0] tracking-tighter'>{item.head}</h1>
                    <div className='relative h-4 w-4'>
                      <Plus className='h-4 w-4 absolute inset-0 transition-all duration-200 group-data-expanded:opacity-0 group-data-expanded:rotate-90 dark:text-zinc-50' />
                      <Minus className='h-4 w-4 absolute inset-0 transition-all duration-200 opacity-0 -rotate-90 group-data-expanded:opacity-100 group-data-expanded:rotate-0 dark:text-zinc-50' />
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <p className='text-muted-text md:w-xl leading-4.5 pt-6'>{item.subHead}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>


    </div>
  )
}