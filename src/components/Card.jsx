
function Card(props){
    return(
        <div className='flex flex-col bg-[#22223B] rounded-xl justify-center items-center p-4 w-full max-w-[215px] min-w-0 h-[120px] hover:bg-[#9a8c98] hover:text-[#22223B] hover:shadow-lg/30 transition-all duration-300 cursor-pointer'>
            <img className='w-[60px] h-[60px] object-contain' src={props.img} alt="Pic" />
            <h1 className='font-bold text-sm mt-2 text-center'>{props.name}</h1>
        </div>
    );
}

export default Card