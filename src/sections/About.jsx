import React from "react"
import Globe from "react-globe.gl"
import Button from "../components/button"

const About = () => {
    const [hasCopied, setHasCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('abhinavbijith@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }
  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">Hi, I'm Abhinav</p>
                        <p className="grid-subtext">With 3 years of experience in web development, I specialize in creating user-friendly and visually appealing websites that deliver exceptional user experiences.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid2.png" alt="grid2" className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I speacialize in Javascript/Typescript with a focus on React and Next.js ecosystems.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe 
                            height={326} 
                            width={326} 
                            backgroundColor="rgba(0, 0, 0, 0)" 
                            backgroundImageOpacity={0.5} 
                            showAtmosphere 
                            showGraticules 
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // change to night to day for daylight
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            // labelsData={[
                            //     {
                            //     lat: 80, lng:80, text: "drop pin location (if required)", color: "white", size: 20,
                            // }]}     
                        />
                    </div>
                    <div>
                        <p className="grid-headtext">I work remotely across most timezones</p>
                        <p className="grid-subtext">I am based in India, with remote work available.</p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>   
                    </div>
                </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid3.png" alt="grid3" className="w-full sm:h-[266px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">My passion for Coding</p>
                        <p className="grid-subtext">I am a passionate developer who thrives on the challenge of coding and creating innovative solutions. Codind isn't just my profession - its my passion</p>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="assets/grid4.png" alt="grid4" className="w-full m:h-[126px] sm:h-[276px] lg:h-[200px] xl:h-[200px] h-fit object-cover sm:object-top"/>
                    <div className="spcace-y-2">
                        <p className="grid-subtext text-center">Contact Me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied?'assets/tick.svg':'assets/copy.svg'} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">abhinavbijith@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </section >
  )
}

export default About
