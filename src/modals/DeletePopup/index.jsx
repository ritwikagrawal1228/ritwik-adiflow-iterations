import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, Button } from "components";

const DeletePopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-end p-[32px] md:px-[20px] rounded-[4px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_12.svg"
              className="h-[175px] mt-[32px] w-[42%]"
              alt="Twelve"
            />
            <div className="flex flex-col gap-[21px] items-center justify-start mt-[58px] md:w-[100%] w-[auto]">
              <Text
                className="text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Are you sure to delete item?
              </Text>
              <Text
                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                This item will be delete from your cart
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start mt-[48px] w-[100%]">
              <Button
                className="cursor-pointer font-bold min-w-[199px] text-[14px] text-center text-white_A700 w-[auto]"
                shape="CircleBorder28"
                size="4xl"
                variant="FillRed600"
              >
                Yes, Delete item
              </Button>
              <Button
                className="common-pointer cursor-pointer font-semibold min-w-[199px] text-[14px] text-bluegray_800 text-center w-[auto]"
                onClick={props.onRequestClose}
                shape="CircleBorder28"
                size="7xl"
                variant="FillGray51"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DeletePopupModal;
