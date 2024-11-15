import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import Target from "../components/Target.jsx"
import ReactLogo from "../components/ReactLogo.jsx"
import Cube from "../components/Cube.jsx"
import Rings from "../components/Rings.jsx"
import HeroCamera from "../components/HeroCamera.jsx"
const Hero = () => {
  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Abhinav
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products and Brands</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0, -Math.PI, 0]}/>
            </HeroCamera>
            <group>
              <Cube position={sizes.cubePosition}/>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Rings position={sizes.ringPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">

        </a>
      </div>
    </section>
  )
}

export default Hero

// cc "Hacker Room - Stylized" (https://skfb.ly/6UtLP) by Babevid is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).