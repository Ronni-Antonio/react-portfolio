import ProfileCard from "../components/ProfileCard"
import Professional from "../assets/Professional.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

function About(){

    const icon = <FontAwesomeIcon icon={faUser}/>
    const email = "rhoanneantonio1@gmail.com"
    const place = "Pasig, Philippines"
    const contact = "0912-687-2700"
    const age = 20

    return (
        <div id="About" className="bg-white text-slate-950 min-h-screen scroll-mt-24">
            <div className="mx-auto w-full max-w-6xl px-6 py-12">
                <div className="text-center mb-12">
                    <h2 className='font-bold text-4xl mb-6'>{icon} About Me</h2>
                </div>
                <div className="grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] items-center">
                    <ProfileCard
                        name=""
                        title=""
                        handle="javicodes"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl={Professional}
                        showUserInfo={false}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                        behindGlowColor="rgba(125, 190, 255, 0.67)"
                        iconUrl="/assets/demo/iconpattern.png"
                        behindGlowEnabled
                        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                        className="mx-auto w-full max-w-[420px]"
                    />

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h3 className="text-3xl font-bold">I'm Rhoanne Nicole</h3>
                            <p className="text-lg text-slate-600">3rd Year BSIT Student</p>
                        </div>

                        <p className="max-w-2xl text-slate-700 leading-8">
                            I'm a software developer passionate about building modern web and desktop applications. I focus on sharpening my skills and delivering work that makes a real digital impact.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2 text-slate-700">
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Email</p>
                                <p className="mt-2 font-semibold">{email}</p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Contact</p>
                                <p className="mt-2 font-semibold">{contact}</p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Place</p>
                                <p className="mt-2 font-semibold">{place}</p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Age</p>
                                <p className="mt-2 font-semibold">{age} years old</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About