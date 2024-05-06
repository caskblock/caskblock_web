import ModalTemplate from '../ModalTemplate';
import AvailableNft from './AvailableNft';
import LoadingSaleCard from '../LoadingSaleCard';

const BuyModal = ({closeModal, metadataId}) => {

  return (
    <ModalTemplate closeModal={closeModal} title="Buy" >
      {(metadataId) 
        ? <AvailableNft metadataId={metadataId} /> 
        : <LoadingSaleCard />}
    </ModalTemplate>
  );
};

export default BuyModal;
