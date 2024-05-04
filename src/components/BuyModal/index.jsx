import ModalTemplate from '../ModalTemplate';
import AvailableNft from './AvailableNft';
import LoadingSaleCard from '../LoadingSaleCard';

const BuyModal = ({closeModal, tokenId}) => {

  return (
    <ModalTemplate closeModal={closeModal} title="Buy" >
      {(tokenId) 
        ? <AvailableNft tokenId={tokenId} /> 
        : <LoadingSaleCard />}
    </ModalTemplate>
  );
};

export default BuyModal;
