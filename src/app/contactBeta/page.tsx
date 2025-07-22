import { Metadata } from "next"
import ContactPage from "./ContactPage"

export default function Page() {

    return (
        <ContactPage />
    )
}


export const metadata: Metadata = {
    title: 'Contact Deuvarney',
    description: 'Contact information for Deuvarney',
}