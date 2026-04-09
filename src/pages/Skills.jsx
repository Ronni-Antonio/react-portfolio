import Card from '../components/Card.jsx'
import SkillsIndex from '../assets/images/languages/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import AnimatedContent from '../components/AnimatedContent.jsx'


function Skills(){
    const skillsicon = <FontAwesomeIcon icon={faLaptopCode}/>

    return(

        <div id="Skills" className='bg-[#22223B] flex flex-col text-white items-center min-h-screen p-10'>
            <h2 className='font-bold text-4xl mb-6 mt-14'>{skillsicon} Skills</h2>
            <div className="bg-[#3b3b69] rounded-xl w-full max-w-[1200px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 p-8 overflow-hidden">
                {SkillsIndex.map(img => (
                <Card key={img.id} img={img.path} name={img.description}/>
                ))}
          </div>
        </div>
    )
}

export default Skills