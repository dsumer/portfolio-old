import { PropsWithChildren } from 'react';
import useViewportSpyOnce from '../hooks/use-viewport-spy-once';
import { motion, useAnimation } from 'framer-motion';

const FadeInSection = (props: PropsWithChildren<unknown>) => {
  const controls = useAnimation();
  const ref = useViewportSpyOnce(() => controls.start('visible'));

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, marginTop: 0 },
        hidden: { opacity: 0, marginTop: 200 },
      }}
    >
      {props.children}
    </motion.div>
  );
};
export default FadeInSection;
