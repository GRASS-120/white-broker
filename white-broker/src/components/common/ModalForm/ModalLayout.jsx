import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import animationStyles from './animation.module.css';
import styles from './styles.module.css';

const overlayAnimation = {
   enter: animationStyles.overlayEnter,
   enterActive: animationStyles.overlayEnterActive,
   exit: animationStyles.overlayExit,
   exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
   enter: animationStyles.contentEnter,
   enterActive: animationStyles.contentEnterActive,
   exit: animationStyles.contentExit,
   exitActive: animationStyles.contentExitActive,
};

const ModalLayout = ({ onClose, isOpened, children }) => {
   const overlayRef = useRef();
   const contentRef = useRef();

   const [animationIn, setAnimationIn] = useState(false);

   useEffect(() => {
      setAnimationIn(isOpened);
   }, [isOpened]);

   return (
      <div className={styles.container}>
         <CSSTransition
            in={animationIn}
            nodeRef={overlayRef}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames={overlayAnimation}
         >
            <div
               className={styles.overlay}
               ref={overlayRef}
               onClick={onClose}
            />
         </CSSTransition>
         <CSSTransition
            in={animationIn}
            nodeRef={contentRef}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames={contentAnimation}
         >
            <div className={styles.content} ref={contentRef}>
               {children}
            </div>
         </CSSTransition>
      </div>
   );
};

export default ModalLayout;
