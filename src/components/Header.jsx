
function Header(){
    return(
        <nav className="absolute bg-[#22223B] flex justify-between items-center p-5 sticky top-0 shadow-xl/20">
            <div className="text-[#9a8c98] ml-40 font-extrabold text-l"><a href="#Home">iamrhoanne</a></div>
            <ul className="list-none flex flex-row gap-8 justify-end text-white mr-40  font-bold">
                <li><a href="#Home" className="hover:text-[#9a8c98] w-fit pb-1 border-b-2 border-transparent hover:border-[#9a8c98] hover:pb-2 transition-all duration-200">Home</a></li>
                <li><a href="#About" className="hover:text-[#9a8c98] w-fit pb-1 border-b-2 border-transparent hover:border-[#9a8c98] hover:pb-2 transition-all duration-200">About</a></li>
                <li><a href="#Skills" className="hover:text-[#9a8c98] w-fit pb-1 border-b-2 border-transparent hover:border-[#9a8c98] hover:pb-2 transition-all duration-200">Skills</a></li>
                <li><a href="#Experience" className="hover:text-[#9a8c98] w-fit pb-1 border-b-2 border-transparent hover:border-[#9a8c98] hover:pb-2 transition-all duration-200">Experience</a></li>
                <li><a href="#Contact" className="hover:text-[#9a8c98] w-fit pb-1 border-b-2 border-transparent hover:border-[#9a8c98] hover:pb-2 transition-all duration-200">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header