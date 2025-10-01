import React from 'react'

const About = () => {
    return (
        <div className="container px-3 md:px-10">
            <h1 className='text-2xl md:text-3xl font-bold mt-7 md:mt-10 md:mb-6 px-6'>About Buy Me a Chai</h1>
            <div className=' text-md px-6 w-full '>

                <div className='p-6 px-0'>
                    <h2 className="text-lg font-bold pb-3 ">Our Mission</h2>
                    <ul className="list-disc list-inside space-y-1 text-md md:text-lg pl-5 ">
                        <li>Empower creators to receive support from their audience.</li>
                        <li>Provide a simple and transparent platform for micro-donations.</li>
                        <li>Encourage community engagement and appreciation.</li>
                        <li>Make online support accessible to everyone.</li>
                    </ul>
                </div>

                <div className='p-6 px-0'>
                    <h2 className="text-lg font-bold pb-3 ">How It Works</h2>
                    <ul className="list-disc list-inside space-y-1 text-md md:text-lg pl-5 ">
                        <li>Creators set up a profile to receive chai (support).</li>
                        <li>Supporters can send chai with a personalized message.</li>
                        <li>All transactions are secure and instant.</li>
                        <li>Creators can track and manage their support easily.</li>
                    </ul>
                </div>

                <div className='p-6 px-0'>
                    <h2 className="text-lg font-bold pb-3 ">Why Choose Us?</h2>
                    <ul className="list-disc list-inside space-y-1 text-md md:text-lg pl-5 ">
                        <li>User-friendly and intuitive interface.</li>
                        <li>No hidden fees or complicated setup.</li>
                        <li>Focus on community and genuine connections.</li>
                        <li>Dedicated support for both creators and supporters.</li>
                    </ul>
                </div>

                <div className='p-6 px-0'>
                    <h2 className="text-lg font-bold pb-3 ">Get Involved</h2>
                    <ul className="list-disc list-inside space-y-1 text-md md:text-lg pl-5 ">
                        <li>Sign up as a creator or supporter.</li>
                        <li>Share your profile with your audience.</li>
                        <li>Send chai and leave encouraging messages.</li>
                        <li>Help us grow by spreading the word!</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default About

export const metadata = {
  title: "About - Buy Me a Chai",
}
 