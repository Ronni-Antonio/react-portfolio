import ShapeGrid from "../components/ShapeGrid"
import TiltedCard from "../components/TiltedCard"
import Picture from '../assets/Picture.jpg'
import TextType from "../components/TextType"

function Home(){
    return(
        <div id = "Home" className=" min-h-screen">
                <ShapeGrid 
                    speed={0.61}
                    squareSize={80}
                    hoverFillColor='#222'
                    hoverTrailAmount={2} // number of trailing hovered shapes (0 = no trail)
                        direction="down"
                        borderColor="#4a4750"
                        hoverColor="#c79999"
                        size={49}
                        shape="square"
                />

                <div className="flex flex-col-2 justify-around">
                    <div>
                        <h3>Hi There,</h3>
                        <h3>I'm Rhoanne Nicole Antonio</h3>
                        <h5>I am into <TextType 
                                            text={["Web Development", "Frontend Development", "Backend Development"]}
                                            typingSpeed={80}
                                            pauseDuration={1500}
                                            showCursor
                                            cursorCharacter="_"
                                            deletingSpeed={50}
                                            variableSpeedEnabled={false}
                                            variableSpeedMin={60}
                                            variableSpeedMax={120}
                                            cursorBlinkDuration={0.5}
                                        />
                        </h5>
                    </div>
                    <TiltedCard
                        imageSrc={Picture}
                        altText="Kendrick Lamar - GNX Album Cover"
                        captionText="Kendrick Lamar - GNX"
                        containerHeight="300px"
                        containerWidth="300px"
                        imageHeight="300px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent
                        className="-mt-20"
                    />
                </div>



        </div>
    )
}

export default Home