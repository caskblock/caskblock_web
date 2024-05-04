import ModalTemplate from '../ModalTemplate';
import Burner from './Burner';
import LoadingSaleCard from '../LoadingSaleCard';

const BurnModal = ({closeModal, tokenId}) => {

  return (
    <ModalTemplate closeModal={closeModal} title="Burn" >
      {(tokenId) 
        ? <Burner tokenId={tokenId} /> 
        : <LoadingSaleCard />}
    </ModalTemplate>
  );
};

export default BurnModal;
