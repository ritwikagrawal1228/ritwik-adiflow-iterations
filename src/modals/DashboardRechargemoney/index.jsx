import React from "react";
import ModalProvider from "react-modal";

import { Text, Input, Img, Button, Line } from "components";

const DashboardRechargemoneyModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[53%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-start justify-start mt-[64px] p-[28px] md:px-[20px] rounded-[4px] shadow-bs1 w-[100%]">
            <Text
              className="mt-[4px] text-bluegray_800 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Pick a wallet
            </Text>
            <Input
              className="font-medium p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
              wrapClassName="flex mt-[32px] sm:w-[100%] w-[99%]"
              name="Textinput"
              placeholder="0.0"
              prefix={
                <Img
                  src="images/img_music.svg"
                  className="ml-[20px] mr-[16px] my-[auto]"
                  alt="music"
                />
              }
              shape="RoundedBorder4"
              size="xl"
              variant="OutlineIndigo51"
            ></Input>
            <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start mt-[32px] md:w-[100%] w-[78%]">
              <Button
                className="cursor-pointer font-semibold min-w-[116px] text-[14px] text-bluegray_800 text-center w-[auto]"
                shape="RoundedBorder4"
                size="4xl"
                variant="FillGray51"
              >
                200.000đ
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[116px] text-[14px] text-bluegray_800 text-center w-[auto]"
                shape="RoundedBorder4"
                size="4xl"
                variant="FillGray51"
              >
                500.000đ
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[126px] text-[14px] text-bluegray_800 text-center w-[auto]"
                shape="RoundedBorder4"
                size="4xl"
                variant="FillGray51"
              >
                1.000.000đ
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[129px] text-[14px] text-bluegray_800 text-center w-[auto]"
                shape="RoundedBorder4"
                size="4xl"
                variant="FillGray51"
              >
                2.000.000đ
              </Button>
            </div>
            <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[99%]" />
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[31px] md:w-[100%] w-[58%]">
              <div className="flex flex-col items-start justify-start sm:w-[100%] w-[85%]">
                <Text
                  className="font-medium text-bluegray_800 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Available Wallet
                </Text>
                <Input
                  className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                  wrapClassName="flex mt-[19px] w-[100%]"
                  name="WalletOptions"
                  placeholder="Torus"
                  prefix={
                    <Img
                      src="images/img_bookmark_32X32.svg"
                      className="ml-[16px] mr-[10px] my-[auto]"
                      alt="bookmark"
                    />
                  }
                  shape="RoundedBorder4"
                  size="5xl"
                  variant="OutlineIndigo51_1"
                ></Input>
                <div className="bg-gray_51 border-[1px] border-indigo_51 border-solid flex flex-row items-center justify-between mt-[16px] p-[16px] rounded-[4px] w-[100%]">
                  <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_metamaskicon0.png"
                      className="h-[32px] md:h-[auto] object-cover rounded-[5px] w-[32px]"
                      alt="MetaMaskIconZero"
                    />
                    <Text
                      className="font-semibold text-bluegray_800 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Metamask
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="h-[20px] w-[20px]"
                    alt="arrowright"
                  />
                </div>
                <div className="border-[1px] border-indigo_51 border-solid flex flex-row gap-[10px] items-center justify-start mt-[16px] p-[16px] rounded-[4px] w-[100%]">
                  <div className="md:h-[26px] h-[32px] p-[2px] relative w-[32px]">
                    <Img
                      src="images/img_portisicon.png"
                      className="absolute h-[26px] inset-[0] justify-center m-[auto] object-cover w-[26px]"
                      alt="PortisIcon"
                    />
                  </div>
                  <Text
                    className="font-semibold text-bluegray_800 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Portis
                  </Text>
                </div>
                <div className="border-[1px] border-indigo_51 border-solid flex flex-row gap-[10px] items-center justify-start mt-[16px] p-[16px] rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_logofortmati.png"
                    className="h-[32px] md:h-[auto] object-cover w-[32px]"
                    alt="LogoFortmati"
                  />
                  <Text
                    className="font-semibold text-bluegray_800 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Fortmatic
                  </Text>
                </div>
              </div>
              <Line className="bg-indigo_51 sm:h-[1px] h-[344px] sm:ml-[0] ml-[32px] sm:w-[100%] w-[1px]" />
              <div className="flex flex-col gap-[19px] items-center justify-start sm:ml-[0] ml-[31px] w-[1%] sm:w-[100%]">
                <div className="flex flex-row items-start justify-between pb-[3px] w-[100%]">
                  <div className="flex-1 mt-[4px] overflow-x-auto w-[100%]">
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        QR Code
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Scan this QR code{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-start py-[2px] w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[20px] items-center justify-end pl-[2px] py-[2px] w-[100%]"
                      style={{
                        backgroundImage:
                          "url('images/img_frame_indigo_401.svg')",
                      }}
                    >
                      <Text
                        className="font-medium text-indigo_401 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Refresh
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_barcodeqr1.svg"
                  className="h-[279px] w-[100%]"
                  alt="barcodeqrOne"
                />
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold mb-[4px] md:min-w-[100%] min-w-[699px] mt-[32px] text-[14px] text-center text-white_A700 w-[auto]"
              shape="CircleBorder28"
              size="7xl"
              variant="FillDeeporange300"
            >
              Pay now
            </Button>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardRechargemoneyModal;
