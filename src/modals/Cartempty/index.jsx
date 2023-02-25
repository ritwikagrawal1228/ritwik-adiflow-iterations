import React from "react";
import ModalProvider from "react-modal";

import { Text, Img } from "components";

const CartemptyModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[29%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col justify-start p-[48px] md:px-[20px] w-[100%]">
            <div className="flex flex-row items-end justify-between mt-[4px] w-[100%]">
              <Text
                className="mt-[6px] text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                My Cart
              </Text>
              <Img
                src="images/img_close_24X24.svg"
                className="common-pointer h-[32px] w-[32px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </div>
            <Img
              src="images/img_20.svg"
              className="h-[152px] md:ml-[0] ml-[119px] mt-[77px] w-[51%]"
              alt="Twenty"
            />
            <Text
              className="font-normal mb-[92px] md:ml-[0] ml-[127px] mt-[44px] not-italic text-bluegray_400 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              No item. Add more
            </Text>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default CartemptyModal;
