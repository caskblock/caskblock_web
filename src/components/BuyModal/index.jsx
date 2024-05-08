import ModalTemplate from '../ModalTemplate';
import AvailableNft from './AvailableNft';
import LoadingSaleCard from '../LoadingSaleCard';

const BuyModal = ({closeModal, metadataId, price, success}) => {

  return (
    <ModalTemplate closeModal={closeModal} title="Buy" >
      {(metadataId)
        ? <AvailableNft metadataId={metadataId} price={price} success={success} />
        : <LoadingSaleCard />}
    </ModalTemplate>
  );
};

export default BuyModal;
