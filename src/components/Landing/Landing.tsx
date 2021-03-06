import Center from "../Center"
import Icon from "./Icon"
import Particles from "react-tsparticles"
import ParticlesConfig from "../../particles.config"
import Typewriter from "./Typewriter"
import { AnimatePresence, motion } from "framer-motion"

const Landing = () => {
	return (
		<section className="w-full h-full bg-bgcolor">
			<AnimatePresence>
				<motion.div
					transition={{ duration: 3 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					<Particles params={ParticlesConfig} />
				</motion.div>
			</AnimatePresence>
			<Center className="text-center xs:mx-2 sm:mx-1">
				<h1 className="text-white select-none xs:text-3xl sm:text-4xl md:text-6xl font-montserrat-regular">
					Hello, I&apos;m <span className="text-secondary">Zechariah Tan</span>
				</h1>
				<Typewriter />

				<Center className="flex xs:mt-8 sm:mt-12 md:mt-16 w-fit">
					<Icon
						icon="github"
						className="p-1 my-1 xs:mx-2 xs:w-12 xs:h-12 sm:mx-3 sm:w-14 sm:h-14 md:mx-4 md:w-16 md:h-16"
					/>
					<Icon
						icon="linkedin"
						className="p-1 xs:mx-2 xs:w-14 xs:h-14 sm:mx-3 sm:w-16 sm:h-16 md:mx-4 md:w-18 md:h-18"
					/>
					<Icon
						icon="stackoverflow"
						className="p-1 my-1 xs:mx-2 xs:w-12 xs:h-12 sm:mx-3 sm:w-14 sm:h-14 md:mx-4 md:w-16 md:h-16"
					/>
				</Center>
			</Center>
		</section>
	)
}

export default Landing
