import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import connectDb from '@/db/connectDb'
import User from '@/models/User'
import { notFound } from 'next/navigation'


// If the username is not present in the database, show a 404 page

const Username = async ({ params }) => {
    const { username } = await params

    const checkUser = async () => {
        await connectDb();
        let u = await User.findOne({ username })
        if (!u) {
            return notFound()
        }
    }
    await checkUser()

    return (<>
        <PaymentPage username={username} />
    </>
    )
}

export default Username;

export async function generateMetadata({ params }) {
    const { username } = await params

    return {
        title: `Support ${username} - Buy Me a Chai`,
    }
}
