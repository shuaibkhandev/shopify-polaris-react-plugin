import {Link, Text} from "@shopify/polaris"
const Footer = () => {
  return (
    <div className='footer' style={{paddingBlock:"var(--p-space-600)" ,borderTop: '1px solid #0000001A', marginTop: 'var(--p-space-400)'}}>
        <Text as='h3' variant='headingMd'>Chat with our experts</Text>
        <ul>
            <li>
                <Link>
                    <img src="/images/whatsapp.png" style={{
                    objectFit: "cover",
                    objectPosition: "center"}} />
                </Link>
            </li>
            <li>
                <Link>
                    <img src="/images/skype.png" style={{
                    objectFit: "cover",
                    objectPosition: "center"}} />
                </Link>
            </li>
            <li>
                <Link>
                    <img src="/images/mail.png"  style={{
                    objectFit: "cover",
                    objectPosition: "center"}}/>
                </Link>
            </li>
            <li>
                <Link>
                    <img src="/images/calendar.png"  style={{
                    objectFit: "cover",
                    objectPosition: "center"}}/>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Footer