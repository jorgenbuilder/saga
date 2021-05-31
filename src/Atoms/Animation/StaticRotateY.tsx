import { MotionProps } from "framer-motion";

const StaticRotateY:Pick<MotionProps, 'animate' | 'transition'> = {
    animate: {
        rotateY: 360,
    },
    transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
    },
}

export default StaticRotateY;