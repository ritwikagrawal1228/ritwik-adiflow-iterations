import React from "react";

import {
  Img,
  Text,
  Line,
  Input,
  TextArea,
  SelectBox,
  Button,
} from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const ShippingInfoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[240px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[31px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_logo.svg"
                className="h-[28px] mt-[5px] w-[50%]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[493px] md:w-[100%] w-[88%]">
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
                <div className="flex flex-row gap-[16px] items-end justify-start mt-[34px] md:w-[100%] w-[46%]">
                  <Img
                    src="images/img_trash_20X20.svg"
                    className="h-[20px] mb-[2px] w-[20px]"
                    alt="trash"
                  />
                  <Text
                    className="font-medium mt-[5px] text-bluegray_800 text-left w-[auto]"
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
          <Line className="bg-indigo_51 md:h-[1px] h-[990px] mb-[34px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[35px] items-center justify-start mb-[43px] mt-[14px] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[99%]">
                  <Text
                    className="font-poppins mb-[3px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Checkout
                  </Text>
                  <Text
                    className="font-inter font-normal sm:mt-[0] mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Shop Central/
                    </span>
                    <span className="text-bluegray_800 text-[16px]"> </span>
                    <span className="text-bluegray_400 text-[16px]">
                      Product detail/
                    </span>
                    <span className="text-bluegray_800 text-[16px]">
                      {" "}
                      Checkout
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[67%]">
                    <div className="flex flex-col items-start justify-start mb-[4px] w-[100%]">
                      <div className="flex flex-col gap-[12px] items-start justify-end pr-[4px] py-[4px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold mt-[2px] text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Shipping information
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fill form below
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-[36px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Name
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          wrapClassName="w-[100%]"
                          type="text"
                          name="Group16079"
                          placeholder="Enter your name"
                          shape="RoundedBorder4"
                          size="4xl"
                          variant="OutlineIndigo51"
                        ></Input>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between mt-[27px] w-[100%]">
                        <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start md:w-[100%] w-[49%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Email address
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                            wrapClassName="w-[100%]"
                            type="email"
                            name="group One"
                            placeholder="Enter your email"
                            shape="RoundedBorder4"
                            size="4xl"
                            variant="OutlineIndigo51"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start md:w-[100%] w-[49%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Phone number
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                            wrapClassName="w-[100%]"
                            type="number"
                            name="group Two"
                            placeholder="Enter your phone number"
                            shape="RoundedBorder4"
                            size="4xl"
                            variant="OutlineIndigo51"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-[28px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Your address
                        </Text>
                        <TextArea
                          className="font-normal not-italic text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          name="group Three"
                          placeholder="Enter full address"
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineIndigo51"
                        ></TextArea>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start mt-[29px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Country
                        </Text>
                        <SelectBox
                          className="font-semibold text-[16px] text-bluegray_800 text-left w-[100%]"
                          placeholderClassName="text-bluegray_800"
                          name="country One"
                          placeholder="Vietnam"
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
                          size="lg"
                          variant="OutlineIndigo51_1"
                        ></SelectBox>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start mt-[27px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Note
                        </Text>
                        <TextArea
                          className="font-normal not-italic text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          name="group Four"
                          placeholder="Write somethhing for us..."
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineIndigo51"
                        ></TextArea>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] w-[33%]">
                    <div className="bg-white_A700 flex items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row gap-[24px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_rectangle_564X524.png"
                            className="h-[118px] md:h-[auto] object-cover w-[auto]"
                            alt="Rectangle"
                          />
                          <div className="flex flex-col gap-[41px] items-start justify-start pb-[4px] w-[auto]">
                            <div className="flex flex-col gap-[19px] items-start justify-start md:w-[100%] w-[auto]">
                              <Text
                                className="font-bold mt-[4px] text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Polo Shirt
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Color: Grey, S
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Price
                              </Text>
                              <Text
                                className="font-semibold text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $120.0
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[100%]" />
                        <Input
                          className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          wrapClassName="mt-[31px] w-[100%]"
                          name="group Five"
                          placeholder="Enter reffered code"
                          shape="RoundedBorder8"
                          size="2xl"
                          variant="OutlineIndigo51"
                        ></Input>
                        <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[100%]" />
                        <div className="flex flex-col gap-[20px] items-center justify-start mt-[31px] pt-[4px] w-[100%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Price
                            </Text>
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $120.0
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between pl-[3px] pt-[3px] w-[100%]">
                            <Text
                              className="font-normal mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Shipping fee
                            </Text>
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $10.0
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-indigo_51 h-[1px] mt-[32px] w-[100%]" />
                        <div className="flex flex-row items-start justify-between mt-[31px] w-[100%]">
                          <Text
                            className="font-normal mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Total
                          </Text>
                          <Text
                            className="font-bold mt-[4px] text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            $130.0
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[16px] items-center justify-start mt-[32px] w-[100%]">
                          <Button
                            className="common-pointer cursor-pointer font-bold min-w-[306px] text-[14px] text-center text-white_A700 w-[auto]"
                            onClick={() => navigate("/paymentinfo")}
                            shape="CircleBorder24"
                            size="4xl"
                            variant="FillDeeporange300"
                          >
                            Purchase now
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[306px] text-[14px] text-bluegray_800 text-center w-[auto]"
                            shape="CircleBorder24"
                            size="4xl"
                            variant="FillGray51"
                          >
                            Scan QR code
                          </Button>
                        </div>
                        <Text
                          className="font-normal leading-[22.00px] mt-[32px] not-italic text-bluegray_400 text-center sm:w-[100%] w-[98%]"
                          as="h6"
                          variant="h6"
                        >
                          By clicking “Purchase” button, I agree with RiriBa
                          Term and Policy
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="flex items-center justify-center text-center"
                      leftIcon={
                        <Img
                          src="images/img_arrowleft_indigo_401.svg"
                          className="mr-[16px] text-center"
                          alt="arrow_left"
                        />
                      }
                      size="sm"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[16px] text-indigo_401 text-left">
                        Back to shopping cart
                      </div>
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

export default ShippingInfoPage;
