import { Plus, Minus } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../motion-primitives/accordion';
import faqs from '@/data/faqs'

export default function FAQs() {
  return (
    <div className='w-full min-h-screen flex flex-col relative bg-black px-4 py-16 sm:px-8 sm:py-24 md:p-10 md:py-32 lg:py-40 overflow-x-hidden'>

      <div className="flex flex-col justify-between">
        <div className="w-full text-text text-4xl sm:text-5xl md:text-[10vh] lg:text-[16vh] uppercase tracking-tighter font-bold flex flex-col items-center text-center">
          <h2 className="text-sm sm:text-sm md:text-lg lg:text-xl tracking-normal text-pink-300 capitalize pb-3 md:pb-6 lg:pb-10">[ FAQs ]</h2>
          <h2 className="leading-tighter md:leading-tight lg:leading-30">Frequently</h2>

          <h2 className="leading-tighter md:leading-tight lg:leading-30 flex items-center gap-1 md:gap-2 flex-wrap justify-center">
            <span>Asked Questi</span>
            <img className="w-10 h-10 sm:w-10 sm:h-10 md:w-20 md:h-20 lg:w-40 lg:h-40 shrink-0" src="/trail-images/2.png" />
            <span>ns</span>
          </h2>
        </div>

        <div className="w-full flex flex-col items-end gap-4 px-2 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-24 lg:pt-30">
          <p className="text-xs sm:text-sm md:text-lg lg:text-2xl tracking-tighter w-full max-w-[14rem] sm:max-w-sm md:max-w-md lg:max-w-lg leading-4 sm:leading-5 md:leading-6.5 text-right text-pink-300">
            * Please email us at myResult@gmail.com if you have any other questions. *
          </p>
        </div>
      </div>

      <div className='mt-10 sm:mt-12 md:mt-16 lg:mt-20 w-full flex items-center justify-center'>
        <div className='w-full md:max-w-4xl lg:max-w-6xl'>
          <Accordion
            className='flex w-full flex-col divide-y divide-border-20'
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {faqs.points.map((item) => (
              <AccordionItem key={item.head} value={item.head} className='py-4 md:py-6 group'>

                <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50 cursor-pointer'>
                  <div className='flex items-center justify-between text-white gap-3 sm:gap-4'>
                    <h1 className='text-sm sm:text-base md:text-xl lg:text-2xl text-[#ECF1F0] tracking-tighter'>
                      {item.head}
                    </h1>
                    <div className='relative h-4 w-4 shrink-0'>
                      <Plus className='h-4 w-4 absolute inset-0 transition-all duration-200 group-data-expanded:opacity-0 group-data-expanded:rotate-90 dark:text-zinc-50' />
                      <Minus className='h-4 w-4 absolute inset-0 transition-all duration-200 opacity-0 -rotate-90 group-data-expanded:opacity-100 group-data-expanded:rotate-0 dark:text-zinc-50' />
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <p className='text-xs sm:text-sm md:text-base text-muted-text w-full md:max-w-xl leading-4 md:leading-4.5 pt-3 md:pt-6'>
                    {item.subHead}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

    </div>
  )
}