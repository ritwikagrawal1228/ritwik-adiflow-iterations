import React from "react";

import { Img, Text, Line, Button } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const EKYCSignaturePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] mt-[4px] w-[50%]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[492px] md:w-[100%] w-[88%]">
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[71%]"
                  onClick={() => navigate("/dashboardone")}
                >
                  <Img
                    src="images/img_grid_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="grid"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dashboard
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] w-[66%]"
                  onClick={() => navigate("/customer")}
                >
                  <Img
                    src="images/img_save.svg"
                    className="h-[20px] w-[20px]"
                    alt="save"
                  />
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Customer
                  </Text>
                </div>
                <div className="flex flex-row gap-[34px] items-center justify-between mt-[32px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-end justify-start w-[auto]">
                    <Img
                      src="images/img_sort.svg"
                      className="h-[20px] mb-[2px] w-[20px]"
                      alt="sort"
                    />
                    <Text
                      className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Message
                    </Text>
                  </div>
                  <Text
                    className="bg-red_600 flex font-bold h-[24px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[24px]"
                    variant="body1"
                  >
                    3
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[32px] md:w-[100%] w-[39%]"
                  onClick={() => navigate("/filemanagementdefault")}
                >
                  <Img
                    src="images/img_folder.svg"
                    className="h-[20px] w-[20px]"
                    alt="folder"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    File
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-start justify-start mt-[33px] md:w-[100%] w-[63%]"
                  onClick={() => navigate("/calendermonth")}
                >
                  <Img
                    src="images/img_calendar.svg"
                    className="h-[20px] w-[20px]"
                    alt="calendar"
                  />
                  <Text
                    className="font-medium mt-[3px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Calender
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-end justify-start mt-[34px] md:w-[100%] w-[46%]"
                  onClick={() => navigate("/shippinginfo")}
                >
                  <Img
                    src="images/img_trash.svg"
                    className="h-[20px] mb-[2px] w-[20px]"
                    alt="trash"
                  />
                  <Text
                    className="font-medium mt-[5px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Shop
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] w-[43%]"
                  onClick={() => navigate("/cartproductlist")}
                >
                  <Img
                    src="images/img_mail_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="mail"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cart
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[13px] items-end justify-start mt-[31px] md:w-[100%] w-[62%]"
                  onClick={() => navigate("/settings")}
                >
                  <div className="bg-white_A700 flex h-[26px] items-center justify-start p-[3px] w-[26px]">
                    <div className="bg-bluegray_400 h-[20px] rounded-[50%] w-[20px]"></div>
                  </div>
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 md:h-[1px] h-[953px] mb-[71px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[35px] items-center justify-start mb-[72px] mt-[15px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-poppins mb-[2px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    eKYC
                  </Text>
                  <Text
                    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Setting/
                    </span>
                    <span className="text-bluegray_800 text-[16px]"> eKYC</span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[48px] sm:px-[20px] md:px-[40px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col gap-[21px] items-center justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Singature
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Make sure that all your information are precise
                    </Text>
                  </div>
                  <div className="bg-gray_51 border-[2px] border-dashed border-indigo_51 flex items-end justify-end mt-[40px] p-[32px] sm:px-[20px] rounded-[4px] md:w-[100%] w-[65%]">
                    <div className="flex flex-col gap-[36px] justify-start mt-[79px] md:w-[100%] w-[95%]">
                      <Img
                        src="images/img_signatureofka.png"
                        className="h-[236px] md:h-[auto] mr-[47px] object-cover w-[92%]"
                        alt="SignatureofKa"
                      />
                      <div className="flex flex-row gap-[24px] items-center justify-end ml-[auto] md:w-[100%] w-[23%]">
                        <Button
                          className="flex h-[54px] items-center justify-center w-[54px]"
                          shape="icbCircleBorder28"
                          size="xlIcn"
                          variant="icbOutlineBlack9000c"
                        >
                          <Img
                            src="images/img_edit.svg"
                            className="h-[24px]"
                            alt="edit"
                          />
                        </Button>
                        <Button
                          className="flex h-[54px] items-center justify-center w-[54px]"
                          shape="icbCircleBorder28"
                          size="xlIcn"
                          variant="icbOutlineBlack9000c"
                        >
                          <Img
                            src="images/img_refresh.svg"
                            className="h-[24px]"
                            alt="refresh"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[270px] mt-[50px] text-[14px] text-center text-white_A700 w-[auto]"
                    onClick={() => navigate("/ekycsuccessful")}
                    shape="CircleBorder24"
                    size="4xl"
                    variant="FillDeeporange300"
                  >
                    Finish process
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EKYCSignaturePage;
