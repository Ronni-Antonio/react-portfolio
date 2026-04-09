import ShapeGrid from "../components/ShapeGrid"

function Home(){
    return(
        <div id = "Home" className=" h-screen">
                <ShapeGrid 
                    speed={0.61}
                    squareSize={80}
                    hoverFillColor='#222'
                    hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
                        direction="down"
                        borderColor="#4a4750"
                        hoverColor="#c79999"
                        size={49}
                        shape="square"
                />

        </div>
    )
}

export default Home