import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeadset} from '@fortawesome/free-solid-svg-icons'
import ContactUs from '../assets/ContactUs.jpg'

function Contact(){

    const icon = <FontAwesomeIcon icon={faHeadset}/>

    return(
        <div id="Contact" className="bg-[#f2e9e4] flex flex-col text-[[#22223B] items-center min-h-screen p-10">
            <h2 className="flex justify-center items-center font-bold text-4xl mb-6 mt-14">{icon} Get in Touch</h2>
            <div className="flex flex-col-2 gap-5 bg-white p-8 rounded-xl">
                <img src={ContactUs} alt="contact" className='w-100 h-100'/>
                <form action="" className="flex flex-col gap-4">
                    <input className="border-1"type="text" name="name" id="name" placeholder="Name" />
                    <input className="border-1"type="email" name="email" id="email" placeholder="Email"/>
                    <input className="border-1"type="text" name="phone" id="phone" placeholder="Phone"/>
                    <input className="border-1"type="text" name="subject" id="subject" placeholder="Subject"/>
                    <input className="border-1"type="text" name="message" id="message" placeholder="Message"/>
                </form>
            </div>
        </div>      
    )
}

export default Contact