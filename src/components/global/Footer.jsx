import {Link, Text} from "@shopify/polaris"
const Footer = () => {
  return (
    <div className='footer' style={{height:"120px", borderTop: '1px solid #0000001A'}}>
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