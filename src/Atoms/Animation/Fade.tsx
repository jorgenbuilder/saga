import { HTMLMotionProps, motion } from 'framer-motion';

const Fade:React.FC<HTMLMotionProps<"div">> = (props) => <motion.div
    style={Object.assign({}, props.style, {display: 'flex', flexDirection: 'column', height: '100%'})}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    {...props}
/>

export default Fade;