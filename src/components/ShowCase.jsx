import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';


const ShowCase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    useGSAP(() => {
        if(!isTablet){
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#showcase",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                }
            });

            timeline.to('.mask img',{
                transform: 'scale(1.1)',
            }).to('.content',{opacity:1,y:0,ease:'power1.in'})
        }
    },[isTablet]);

  return (
    <section id="showcase">
        <div className="media">
            <video src="/videos/game.mp4" loop muted playsInline autoPlay />
            <div className='mask'>
                <img src="/mask-logo.svg" alt="Apple Logo" />
            </div>
        </div>
        <div className="content">
            <div className="wrapper">
                <div className="lg:max-w-md">
                    <h2> Rocket Chip </h2>

                    <div className="space-y-5 mt-7 pe-10">
                        <p>
                            Introducing {" "}
                            <span className='text-white'>
                                M4, the next generation of Apple silicon
                            </span>
                            . With unparalleled performance and efficiency, M4 takes your computing experience to new heights.
                        </p>
                        <p>
                            Whether you're a creative professional, a developer, or a casual user, M4 delivers exceptional speed and responsiveness for all your tasks.
                        </p>
                        <p>
                            Experience the future of computing with M4 and unlock your full potential.
                        </p>
                        <p className="text-primary">
                            Learn more about M4 Chip &gt;
                        </p>
                    </div>
                </div>

                <div className="max-w-3xs space-y-14">
                    <div className="space-y-2">
                        <p>Up to</p>
                        <h3> 4x faster</h3>
                        <p>than the competition</p>
                    </div>
                    <div className="space-y-2">
                        <p>Up to</p>
                        <h3>2x longer battery life</h3>
                        <p>than previous generation</p>
                    </div>
                </div>
            </div>
            </div>
    </section>
  )
}

export default ShowCase
