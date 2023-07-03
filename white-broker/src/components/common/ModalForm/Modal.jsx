import { useMount } from '../../../hooks/useMount';
import ModalLayout from './ModalLayout';
import Portal from './Portal';

const Modal = ({ children, isOpened, onClose }) => {
   const { isMounted } = useMount({ isOpened });

   if (!isMounted) {
      return null;
   }

   return (
      <Portal>
         <ModalLayout onClose={onClose} isOpened={isOpened}>
            {children}
         </ModalLayout>
      </Portal>
   );
};

export default Modal;
