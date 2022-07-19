import { React, useState } from "react";
import VisibilitySensor from 'react-visibility-sensor'
import { motion } from 'framer-motion'


function Feature({ icon, title }) {
    const variant = {
        true: {
            transform: 'scale(1)'
        },
        false: {
            transform: 'scale(0.5)'
        }
    };

    const [elementIsVisible, setElementIsVisible] = useState(false);
    return (
        <VisibilitySensor
            onChange={(isVisible) => setElementIsVisible(isVisible)}>
            <div className="feature flex items-center flex-col relative text-center mx-12">

                <motion.div
                    variants={variant}
                    transition={{
                        duration: 1,
                        type: "ease-out"
                    }}
                    animate={`${elementIsVisible}`}
                    className="icon bg-[#081730] rounded-2xl p-4"
                >

                    <img
                        src={require(`../img/${icon}.png`)} alt=""
                    />
                </motion.div>

                <span className="mt-5">{title}</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, impedit atque.
                </span>
                <span className="text-[#E600FF] underline mt-[3rem]">
                    Learn More
                </span>
            </div>
        </VisibilitySensor>

    )
}
export default Feature