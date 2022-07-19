import { React, useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Hero() {
    const [elementIsVisbile, setElementIsVisible] = useState(false);
    const bg = {
        true: {
            left: '7rem'
        },
        false: {
            left: '19rem'
        }
    }

    const musicPlayer = {
        true: {
            left: '295px'
        },
        false: {
            left: '235px'
        }
    }

    const rect = {
        true: {
            left: "11rem"
        },
        false: {
            left: "13rem"
        }
    }

    const heart = {
        true: {
            left: '9rem'
        },
        false: {
            left: '12.5rem'
        }

    }
    return (
        <VisibilitySensor
            onChange={(isVisible) => setElementIsVisible(isVisible)} minTopVlua={300}>
            <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative">
                <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
                    <span>
                        Experience The
                    </span>
                    <span><b> Best Quality Music </b></span>
                    <span className="text-[15px] text-[#525D6E]">Lorem ipsum dolor sit amet consecteturt.
                        <br />
                        Omnis rerum consectetur dignissimos vel tempore ea!
                    </span>

                    <div>
                        <span className="text-[13px]">Download now on IOS and Android</span>
                        <DownloadAds />
                    </div>
                </div>
                <div className="images relative w-[50%]">

                    <motion.img
                        transition={{ duration: 1, type: "ease-out" }}
                        variants={bg}
                        animate={`${elementIsVisbile}`}

                        src={require("../img/backgraphics.png")} alt="" className="absolute top-[-8rem] left-[19rem]"
                    />

                    <img src={require("../img/p 1.png")} alt="" className="absolute top-[-15rem] h-[34rem] left-[13rem]" />

                    <motion.img
                        transition={{ duration: 1, type: "ease-out" }}
                        variants={musicPlayer}
                        animate={`${elementIsVisbile}`}

                        src={require("../img/p 2.png")} alt="" className="absolute left-[23px] top-[94px] w-[175px]"
                    />

                    <motion.img
                        variants={rect}
                        animate={`${elementIsVisbile}`}
                        transition={{ duration: 1, type: "ease-out" }}

                        src={require("../img/p 3.png")} alt="" className="absolute w-[5rem] left-[13rem] top-[12rem]"


                    />

                    <motion.img
                        variants={heart}
                        animate={`${elementIsVisbile}`}
                        transition={{ duration: 1, type: "ease-out" }}

                        src={require("../img/p 4.png")} alt="" className="absolute w-[5rem] left-[12.5rem] top-[12rem]" />
                </div>
            </div>
        </VisibilitySensor>
    )


}
export default Hero