import { ChevronRight } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../motion-primitives/accordion';
import faqs from '@/data/faqs'

export default function FAQs() {
  return (
    <div className='w-6xl flex flex-col relative z-999'>

      <h1 className='text-text font-bold text-6xl pb-6'>Frequently <br /> Asked Questions</h1>

      <Accordion
        className='flex w-full flex-col gap-2'
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        variants={{ expanded: { opacity: 1, scale: 1, }, collapsed: { opacity: 0, scale: 0.7, }, }}>

        {faqs.points.map((item, i) => (
          <AccordionItem key={item.head} value={item.head} className='border border-border-10 rounded-3xl p-4 px-6 bg-bg cursor-pointer'>

            <AccordionTrigger className='w-full py-0.5 text-left text-muted-text'>
              <div className='flex items-center justify-between cursor-pointer'>
                <h1 className='text-text text-lg font-bold'>{item.head}</h1>
                {/* <ChevronRight className='h-4 w-4 text-muted-text transition-transform duration-200 group-data-expanded:rotate-90' /> */}
                <div className='bg-whit p-2 rounded-full flex items-center justify-center'>
                  <i className="ph ph-x text-black text-2xl"></i>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className='origin-left w-5xl'>
              <p className=' text-muted-text text-sm'>{item.subHead}</p>
            </AccordionContent>
          </AccordionItem>
        ))}

      </Accordion>
    </div>
  )
}
