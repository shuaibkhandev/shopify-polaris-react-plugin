import {Link, Text} from "@shopify/polaris"
import WhatsappImg from "/images/whatsapp.svg"
import SkypeImg from "/images/skype.svg"
import CalendarImg from "/images/calendar.svg"
import MailImg from "/images/mail.svg"
const Footer = () => {
  return (
    <div className='footer' style={{height:"120px", borderTop: '1px solid #0000001A', marginTop:"50px"}}>
        <Text as='h3' variant='headingMd'>Chat with our experts</Text>
        <ul>
            <li>
                <Link>
                    <img src={WhatsappImg} style={{
                    objectFit: "cover",
                    width:"30px",
                    objectPosition: "center"}} />
                </Link>
            </li>
            <li>
                <Link>
                    <img src={SkypeImg} style={{
                    objectFit: "cover",
                    width:"30px",
                    objectPosition: "center"}} />
                </Link>
            </li>
            <li>
                <Link>
                    <img src={MailImg}  style={{
                    objectFit: "cover",
                    width:"30px",
                    objectPosition: "center"}}/>
                </Link>
            </li>
            <li>
                <Link>
                    <img src={CalendarImg}  style={{
                    objectFit: "cover",
                    width:"30px",
                    objectPosition: "center"}}/>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Footer