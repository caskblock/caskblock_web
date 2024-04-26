import { MbText } from "mintbase-ui";

export function UnavailableNft(): JSX.Element {
  return (
    <div className="mt-2">
      <div className="bg-gray-50 py-4 text-center">
        <MbText className="p-med-90 text-gray-700">
          <span className="p-med-130 text-black">NFT Not Available</span>
        </MbText>
      </div>
    </div>
  );
}
