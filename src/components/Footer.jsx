import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleChevronRight, faPhone, faEnvelope, faMapLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'


function Footer(){

    const CircleRight = <FontAwesomeIcon icon={faCircleChevronRight}/>
    const Email = <FontAwesomeIcon icon={faEnvelope}/>
    const Phone = <FontAwesomeIcon icon={faPhone}/>
    const Location = <FontAwesomeIcon icon={faMapLocationDot}/>
    const Github = <FontAwesomeIcon icon={faGithub} color='#22223B'/>
    const Facebook = <FontAwesomeIcon icon={faFacebook} color='#22223B'/>
    const Instagram = <FontAwesomeIcon icon={faInstagram} color='#22223B'/>

    return(
        <footer className='bg-[#22223B] p-5'>
            <div className='flex flex-col-3 gap-3 text-white justify-around'>
                <div>
                    <h3>iamrhoanne</h3>
                    <p className='mt-5'>Thank you for visiting my website, let's build something together!</p>
                    <p>Let's stay connected</p>

                </div>
                <div className=''>
                    <h3>Quick Links</h3>
                    <ul className='mt-5'>
                        <li><a href="Home">{CircleRight} Home</a></li>
                        <li><a href="About">{CircleRight} About</a></li>
                        <li><a href="Skills">{CircleRight} Skills</a></li>
                        <li><a href="Experience">{CircleRight} Experience</a></li>
                        <li><a href="Contact">{CircleRight} Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Info</h3>
                    <ul className='mt-5'>
                        <li>{Phone} 0912-687-2700</li>
                        <li>{Email} rhoanneantonio1@gmail.com</li>
                        <li>{Location} Pasig, Philippines</li>
                    </ul>
                    <ul className='flex flex-row gap-5 mt-3'>
                        <li className='bg-white rounded-2xl p-1'>{Github}</li>
                        <li className='bg-white rounded-full p-1'>{Facebook}</li>
                        <li className='bg-white rounded-2xl p-1'>{Instagram}</li>
                    </ul>
                </div>
                
            </div>
            <div className='flex justify-center mt-5 border-t-2 border-white text-white p-3'>Designed by Rhoanne Antonio</div>
        </footer>
    )
}

export default Footer