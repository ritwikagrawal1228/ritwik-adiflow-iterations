import React from "react";

import { Img, Text, Line, SelectBox, Button } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const EKYCScanIDCardPage = () => {
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
                    src="images/img_user.svg"
                    className="h-[20px] w-[20px]"
                    alt="user"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
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
                    <div className="bg-deep_orange_300 h-[20px] rounded-[50%] w-[20px]"></div>
                  </div>
                  <Text
                    className="font-medium mb-[2px] mt-[7px] text-bluegray_800 text-left w-[auto]"
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
                <div className="bg-white_A700 flex items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col items-center justify-start mb-[16px] mt-[20px] w-[100%]">
                    <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Scan ID Card
                      </Text>
                      <Text
                        className="font-normal leading-[22.00px] not-italic text-bluegray_400 text-center w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Please ensure that the image that you uploaded is clear
                        and not blurred
                      </Text>
                    </div>
                    <SelectBox
                      className="font-medium mt-[24px] text-[16px] text-bluegray_800 text-left sm:w-[100%] w-[31%]"
                      placeholderClassName="text-bluegray_800"
                      name="group One"
                      placeholder="Select type of Card"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="h-[6px] mr-[24px] w-[11px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder4"
                      variant="OutlineIndigo51_1"
                    ></SelectBox>
                    <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between mt-[40px] w-[100%]">
                      <div className="h-[359px] relative md:w-[100%] w-[50%]">
                        <Text
                          className="font-semibold mt-[36px] mx-[auto] text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Front
                        </Text>
                        <div className="absolute border-[2px] border-dashed border-indigo_51 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[108px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                          <div className="flex flex-col gap-[24px] items-center justify-start mt-[19px] md:w-[100%] w-[47%]">
                            <Button
                              className="flex h-[56px] items-center justify-center rounded-[50%] w-[56px]"
                              size="2xlIcn"
                              variant="icbFillRed52"
                            >
                              <Img
                                src="images/img_plus_24X24.svg"
                                className="h-[20px]"
                                alt="plus"
                              />
                            </Button>
                            <Text
                              className="font-normal leading-[22.00px] not-italic text-bluegray_400 text-center w-[100%]"
                              as="h6"
                              variant="h6"
                            >
                              Drag or click to upload image
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex h-[359px] justify-end relative md:w-[100%] w-[50%]">
                        <div className="flex flex-col gap-[24px] h-[100%] items-center justify-start mb-[108px] mt-[auto] mx-[auto] w-[28%]">
                          <Button
                            className="flex h-[56px] items-center justify-center rounded-[50%] w-[56px]"
                            size="2xlIcn"
                            variant="icbFillRed52"
                          >
                            <Img
                              src="images/img_plus_24X24.svg"
                              className="h-[20px]"
                              alt="plus One"
                            />
                          </Button>
                          <Text
                            className="font-normal leading-[22.00px] not-italic text-bluegray_400 text-center w-[100%]"
                            as="h6"
                            variant="h6"
                          >
                            Drag or click to upload image
                          </Text>
                        </div>
                        <div className="absolute border-[2px] border-dashed border-indigo_51 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[36px] sm:px-[20px] rounded-[4px] w-[100%]">
                          <Text
                            className="font-semibold mb-[270px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Back
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer font-bold min-w-[270px] mt-[58px] text-[14px] text-center text-white_A700 w-[auto]"
                      onClick={() => navigate("/ekycscanidcardaddimage")}
                      shape="CircleBorder24"
                      size="4xl"
                      variant="FillDeeporange300"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EKYCScanIDCardPage;
