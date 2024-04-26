import { useMetadataByMetadataId } from '../../hooks/useMetadatabyMetadataId';
import { StoreNftsData } from "@mintbase-js/data/lib/api/storeNfts/storeNfts.types";
import { BuyModalInfo } from './BuyModalInfo';
import { BuyModalTemplate } from './BuyModalTemplate';
import { LoadingSaleCard } from './LoadingSaleCard';

function BuyModal({
  closeModal,
  item,
}: {
  closeModal: () => void
  item: StoreNftsData
}): JSX.Element {
  const { metadata_id } = item;

  const modalInfo = useMetadataByMetadataId(metadata_id);

  if (modalInfo?.isTokenListLoading) {
    return (
      <BuyModalTemplate closeModal={closeModal}>
        <LoadingSaleCard />
      </BuyModalTemplate>
    );
  } else {
    return (
      <BuyModalTemplate closeModal={closeModal}>
        <BuyModalInfo data={modalInfo} item={item} />
      </BuyModalTemplate>
    );
  }
}

export default BuyModal;
