import { PresentationControls } from '@react-three/drei';
import React from 'react'
import { useRef } from 'react'

import MacbookModel16 from '../models/Macbook-16';
import MacbookModel4 from '../models/Macbook-14';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const ANIMATION_DURATION = 1; // seconds
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group,opacity) =>{
    if(!group)return;

    group.traverse((child)=>{
        if(child.isMesh){
            child.material.transparent = true;
            gsap.to(child.material,{opacity,duration:ANIMATION_DURATION})
        }
    })
}

const moveGroup = ( group, x) =>{
    if(!group)return;
    gsap.to(group.position,{x,duration:ANIMATION_DURATION})
}


const ModelSwitcher = ({ scale, isMobile }) => {

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();



    const showLargeMacbook = scale === 0.08 || scale === 0.05;

    useGSAP(() => {
        if (showLargeMacbook) {
            moveGroup(largeMacbookRef.current, 0)
            fadeMeshes(largeMacbookRef.current, 1);
            
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            fadeMeshes(smallMacbookRef.current, 0);
        }else{
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE)
            fadeMeshes(largeMacbookRef.current, 0);


            moveGroup(smallMacbookRef.current, 0);
            fadeMeshes(smallMacbookRef.current, 1);
        }
        },[scale]
    );

    const controlsConfig = {
        snap:true,
        speed: 1,
        zoom:1,
        azimuth: [ -Math.PI / 4, Math.PI / 4 ],
        config: { mass: 1, tension: 170, friction: 26 },
    };
    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>
            <PresentationControls {...controlsConfig}> 
                <group ref={smallMacbookRef}>
                    <MacbookModel4 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    )
}

export default ModelSwitcher
