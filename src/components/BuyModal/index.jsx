import ModalTemplate from '../ModalTemplate';
import AvailableNft from './AvailableNft';
import LoadingSaleCard from '../LoadingSaleCard';

const BuyModal = ({closeModal, metadataId, price}) => {

  return (
    <ModalTemplate closeModal={closeModal} title="Buy" >
      {(metadataId)
        ? <AvailableNft metadataId={metadataId} price={price} />
        : <LoadingSaleCard />}
    </ModalTemplate>
  );
};

export default BuyModal;
