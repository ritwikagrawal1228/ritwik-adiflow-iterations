import React from "react";
import ModalProvider from "react-modal";

import { Text, Input, SelectBox, Img, Button } from "components";

const CreateEventPopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col gap-[32px] items-center justify-start mb-[18px] p-[32px] md:px-[20px] rounded-[4px] shadow-bs1 w-[100%]">
            <div className="flex flex-col gap-[20px] items-start justify-end pr-[4px] py-[4px] md:w-[100%] w-[auto]">
              <Text
                className="text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Create new event
              </Text>
              <Text
                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Add new event in the calendar
              </Text>
            </div>
            <div className="flex flex-col gap-[25px] items-center justify-start pt-[3px] w-[100%]">
              <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Event name
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="text"
                  name="Group16025"
                  placeholder="Type name"
                  shape="RoundedBorder4"
                  size="4xl"
                  variant="OutlineIndigo51"
                ></Input>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Select category
                </Text>
                <SelectBox
                  className="font-semibold text-[16px] text-bluegray_800 text-left w-[100%]"
                  placeholderClassName="text-bluegray_800"
                  name="Group16026"
                  placeholder="Data project"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_bluegray_900.svg"
                      className="h-[20px] mr-[20px] w-[20px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder4"
                  variant="OutlineIndigo51_1"
                ></SelectBox>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
              <Button
                className="cursor-pointer font-bold min-w-[199px] text-[14px] text-center text-white_A700 w-[auto]"
                shape="CircleBorder28"
                size="7xl"
                variant="FillDeeporange300"
              >
                Create now
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

export default CreateEventPopupModal;
