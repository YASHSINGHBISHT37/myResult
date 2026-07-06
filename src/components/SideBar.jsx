import React from 'react'

const terms = {
    title: 'Terms of Use',
    subHead: 'This Privacy Policy explains how Smriti AI collects, uses, and protects your personal information. By using our services, you agree to the terms of this policy.',
    points: [
        {
            head: 'Acceptance of Terms',
            subHead: 'By using this website, you agree to comply with and be legally bound by the terms and conditions outlined here. If you do not agree with any part of these terms, please refrain from using our services.'
        },
        {
            head: 'Changes to the Terms',
            subHead: 'We reserve the right to update or modify these Terms at any time without prior notice. Continued use of the site after changes indicates your acceptance of the new terms.'
        },
        {
            head: 'User Conduct',
            subHead: 'Users agree not to misuse the site or its content. Any illegal, harmful, or abusive behavior will result in immediate termination of access.'
        },

        {
            head: 'Contact',
            subHead: 'If you have any questions regarding these Terms of Use, please contact us through our support page.'
        }
    ]
}

const privacyPolicy = {
    title: 'Privacy Policy',
    subHead: 'This Privacy Policy explains how Smriti AI collects, uses, and protects your personal information. By using our services, you agree to the terms of this policy.',
    points: [
        {
            head: "Information We Collect",
            subHead: "We may collect information such as your name, email address, and usage data to improve your experience and provide our services."
        },
        {
            head: "How We Use Your Information",
            subHead: "Your data helps us personalize your experience, analyze usage trends, and improve our features. We do not sell your personal data to third parties."
        },
        {
            head: "Data Security",
            subHead: "We implement appropriate security measures to protect your data from unauthorized access, disclosure, or loss."
        },
        {
            head: "Your Rights",
            subHead: "You have the right to access, correct, or delete your personal information. You can contact us for any data-related requests."
        },
        {
            head: "Contact Us",
            subHead: "If you have any questions or concerns about this Privacy Policy, please reach out to us through our support page."
        }
    ]
}

export default function SideBar() {
    return (
        <div className='w-screen h-screen fixed top-0 left-0 z-999999 md:p-4 p-2 md:px-6 flex items-end justify-end text-text dark:text-text'>
            <div className='w-full h-full absolute top-0 left-0 bg-sec-bg dark:bg-bg/10 backdrop-blur-md cursor-pointer'></div>

            <div className='md:w-2xl w-full bg-bg dark:bg-bg relative border border-border dark:border-border rounded-xl top-0 right-0 z-99999999 p-6'>

                <div className='border border-border flex items-center dark:bg-text md:p-1 md:pl-2 p-1.5 gap-1 md:gap-2 dark:text-text rounded-lg absolute right-5 cursor-pointer'>
                    <i className="ph ph-x md:hidden text-xl"></i>
                    <h1 className='dark:text-bg text-sm'>Close</h1>
                    <h1 className='dark:bg-muted-bg bg-muted-bg rounded-sm border border-border p-1 font-bold text-[10px] hidden md:block'>ESC</h1>
                </div>

                <div className='flex flex-col gap-2 pb-2 '>
                    <h1 className='text-2xl font-bold dark:text-text text-text'>{terms.title}</h1>
                    <p className='text-xs md:w-110 dark:text-muted-text text-muted-text'>{terms.subHead}</p>
                </div>


                <div className='flex flex-col gap-4 mt-6'>
                    {privacyPolicy.points.map((item, i) => (
                        <div className=''>
                            <h1 className='text-lg pb-1'>{1 + i}. {item.head}</h1>
                            <p className='text-xs dark:text-muted-text text-muted-text'>{item.subHead}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
