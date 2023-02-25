import React from "react";

import { Img, Text, CheckBox, List, Line, Button, Input } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const CartProductListPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
          <div className="flex flex-col gap-[36px] items-center justify-start mb-[524px] ml-[32px] mr-[54px] mt-[36px] w-[65%]">
            <Img
              src="images/img_logo.svg"
              className="h-[28px] w-[57%]"
              alt="Logo"
            />
            <div className="flex flex-col items-start justify-start w-[100%]">
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
              <div className="flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] w-[43%]">
                <Img
                  src="images/img_trash_1.svg"
                  className="h-[20px] w-[20px]"
                  alt="trash One"
                />
                <Text
                  className="font-medium text-bluegray_800 text-left w-[auto]"
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
        <div className="flex-1 h-[1071px] md:px-[20px] relative w-[100%]">
          <div className="absolute bg-gray_51 bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[35px] items-center justify-start mt-[14px] w-[100%]">
              <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <Text
                  className="font-poppins mb-[2px] text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Cart
                </Text>
                <Text
                  className="font-inter font-normal mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-bluegray_400 text-[16px]">
                    Ecommerce/
                  </span>
                  <span className="text-bluegray_800 text-[16px]"> Cart</span>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[20px] items-start justify-between w-[100%]">
                <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-end p-[24px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[67%]">
                  <Text
                    className="font-bold md:ml-[0] ml-[8px] mt-[13px] text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Product List
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[28px] mt-[39px] md:w-[100%] w-[93%]">
                    <div className="flex h-[20px] items-center justify-end sm:w-[100%] w-[20px]">
                      <CheckBox
                        className="h-[16px]"
                        inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                        name="file One"
                      ></CheckBox>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] ml-[32px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Product
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[201px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[74px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Quantity
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[96px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Total
                    </Text>
                  </div>
                  <List
                    className="flex-col gap-[12px] grid items-center md:ml-[0] ml-[8px] mt-[16px] w-[98%]"
                    orientation="vertical"
                  >
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                        <CheckBox
                          className="h-[16px] md:ml-[0] ml-[13px] md:mt-[0] mt-[34px]"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          name="file Two"
                        ></CheckBox>
                        <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[33px] md:w-[100%] w-[34%]">
                          <Img
                            src="images/img_rectangle_564X524.png"
                            className="h-[86px] md:h-[auto] object-cover w-[35%]"
                            alt="Rectangle"
                          />
                          <div className="flex flex-col gap-[13px] items-start justify-start w-[55%]">
                            <div className="flex items-start justify-end pr-[4px] py-[4px] w-[100%]">
                              <Text
                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Polo Shirt
                              </Text>
                            </div>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Color: Grey, S
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="font-semibold md:ml-[0] ml-[30px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $120.0
                        </Text>
                        <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[66px] md:w-[100%] w-[17%]">
                          <Button
                            className="common-pointer flex h-[32px] items-center justify-center w-[32px]"
                            onClick={() => navigate("/deletepopup")}
                            size="mdIcn"
                            variant="icbOutlineIndigo51"
                          >
                            <Img
                              src="images/img_minus.svg"
                              className="h-[20px]"
                              alt="minus"
                            />
                          </Button>
                          <Text
                            className="font-medium ml-[20px] text-bluegray_900 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            1
                          </Text>
                          <Button
                            className="flex h-[32px] items-center justify-center ml-[21px] w-[32px]"
                            size="lgIcn"
                            variant="icbOutlineIndigo51"
                          >
                            <Img
                              src="images/img_plus_32X32.svg"
                              className="h-[13px]"
                              alt="plus"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-semibold md:ml-[0] ml-[49px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $120.0
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_51 w-[90%]" />
                    <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                      <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[12px] md:mt-[0] mt-[33px] sm:w-[100%] w-[20px]">
                        <CheckBox
                          className="h-[16px]"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          name="file Three"
                        ></CheckBox>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[32px] md:w-[100%] w-[34%]">
                        <Img
                          src="images/img_group16029.png"
                          className="h-[86px] md:h-[auto] object-cover w-[35%]"
                          alt="Rectangle One"
                        />
                        <div className="flex flex-col gap-[13px] items-start justify-start w-[55%]">
                          <div className="flex items-start justify-end pr-[4px] py-[4px] w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Basic T- Shirt
                            </Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Color: Grey, S
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[30px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                      <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[66px] md:w-[100%] w-[17%]">
                        <Button
                          className="flex h-[32px] items-center justify-center w-[32px]"
                          size="mdIcn"
                          variant="icbOutlineIndigo51"
                        >
                          <Img
                            src="images/img_minus.svg"
                            className="h-[20px]"
                            alt="minus One"
                          />
                        </Button>
                        <Text
                          className="font-medium ml-[20px] text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          1
                        </Text>
                        <Button
                          className="flex h-[32px] items-center justify-center ml-[21px] w-[32px]"
                          size="lgIcn"
                          variant="icbOutlineIndigo51"
                        >
                          <Img
                            src="images/img_plus_32X32.svg"
                            className="h-[13px]"
                            alt="plus One"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[49px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_51 w-[90%]" />
                    <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                      <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[12px] md:mt-[0] mt-[33px] sm:w-[100%] w-[20px]">
                        <CheckBox
                          className="h-[16px]"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          name="file Four"
                        ></CheckBox>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[32px] md:w-[100%] w-[34%]">
                        <Img
                          src="images/img_group16030.png"
                          className="h-[86px] md:h-[auto] object-cover w-[35%]"
                          alt="Rectangle Two"
                        />
                        <div className="flex flex-col gap-[13px] items-start justify-start w-[55%]">
                          <div className="flex items-start justify-end w-[100%]">
                            <Text
                              className="font-bold mt-[7px] text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Trendy Polo
                            </Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Color: Grey, S
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[30px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                      <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[66px] md:w-[100%] w-[17%]">
                        <Button
                          className="flex h-[32px] items-center justify-center w-[32px]"
                          size="mdIcn"
                          variant="icbOutlineIndigo51"
                        >
                          <Img
                            src="images/img_minus.svg"
                            className="h-[20px]"
                            alt="minus Two"
                          />
                        </Button>
                        <Text
                          className="font-medium ml-[20px] text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          1
                        </Text>
                        <Button
                          className="flex h-[32px] items-center justify-center ml-[21px] w-[32px]"
                          size="lgIcn"
                          variant="icbOutlineIndigo51"
                        >
                          <Img
                            src="images/img_plus_32X32.svg"
                            className="h-[13px]"
                            alt="plus Two"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[49px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_51 w-[90%]" />
                    <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                      <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[12px] md:mt-[0] mt-[33px] sm:w-[100%] w-[20px]">
                        <CheckBox
                          className="h-[16px]"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          name="file Five"
                        ></CheckBox>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[32px] md:w-[100%] w-[34%]">
                        <Img
                          src="images/img_group16033.png"
                          className="h-[86px] md:h-[auto] object-cover w-[35%]"
                          alt="Rectangle Three"
                        />
                        <div className="flex flex-col gap-[13px] items-start justify-start w-[55%]">
                          <div className="flex items-start justify-end pr-[4px] py-[4px] w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Over Shirt
                            </Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Color: Grey, S
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[30px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                      <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[66px] md:w-[100%] w-[17%]">
                        <Button
                          className="flex h-[32px] items-center justify-center w-[32px]"
                          size="mdIcn"
                          variant="icbOutlineIndigo51"
                        >
                          <Img
                            src="images/img_minus.svg"
                            className="h-[20px]"
                            alt="minus Three"
                          />
                        </Button>
                        <Text
                          className="font-medium ml-[20px] text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          1
                        </Text>
                        <Button
                          className="flex h-[32px] items-center justify-center ml-[21px] w-[32px]"
                          size="lgIcn"
                          variant="icbOutlineIndigo51"
                        >
                          <Img
                            src="images/img_plus_32X32.svg"
                            className="h-[13px]"
                            alt="plus Three"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[49px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_51 w-[90%]" />
                    <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                      <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[12px] md:mt-[0] mt-[33px] sm:w-[100%] w-[20px]">
                        <CheckBox
                          className="h-[16px]"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          name="file Six"
                        ></CheckBox>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[32px] md:w-[100%] w-[34%]">
                        <Img
                          src="images/img_group16028.png"
                          className="h-[86px] md:h-[auto] object-cover w-[35%]"
                          alt="Rectangle Four"
                        />
                        <div className="flex flex-col gap-[13px] items-start justify-start w-[55%]">
                          <div className="flex items-start justify-end pr-[4px] py-[4px] w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Avo T-Shirt
                            </Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Color: Grey, S
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[30px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                      <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[66px] md:w-[100%] w-[17%]">
                        <Button
                          className="flex h-[32px] items-center justify-center w-[32px]"
                          size="mdIcn"
                          variant="icbOutlineIndigo51"
                        >
                          <Img
                            src="images/img_minus.svg"
                            className="h-[20px]"
                            alt="minus Four"
                          />
                        </Button>
                        <Text
                          className="font-medium ml-[20px] text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          1
                        </Text>
                        <Button
                          className="flex h-[32px] items-center justify-center ml-[21px] w-[32px]"
                          size="lgIcn"
                          variant="icbOutlineIndigo51"
                        >
                          <Img
                            src="images/img_plus_32X32.svg"
                            className="h-[13px]"
                            alt="plus Four"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[49px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_51 w-[90%]" />
                    <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                      <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[12px] md:mt-[0] mt-[33px] sm:w-[100%] w-[20px]">
                        <CheckBox
                          className="h-[16px]"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          name="file Seven"
                        ></CheckBox>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[32px] md:w-[100%] w-[34%]">
                        <Img
                          src="images/img_group16032.png"
                          className="h-[86px] md:h-[auto] object-cover w-[35%]"
                          alt="Rectangle Five"
                        />
                        <div className="flex flex-col gap-[13px] items-start justify-start w-[55%]">
                          <div className="flex items-start justify-end pr-[4px] py-[4px] w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Bomber
                            </Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Color: Grey, S
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[30px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                      <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[66px] md:w-[100%] w-[17%]">
                        <Button
                          className="flex h-[32px] items-center justify-center w-[32px]"
                          size="mdIcn"
                          variant="icbOutlineIndigo51"
                        >
                          <Img
                            src="images/img_minus.svg"
                            className="h-[20px]"
                            alt="minus Five"
                          />
                        </Button>
                        <Text
                          className="font-medium ml-[20px] text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          1
                        </Text>
                        <Button
                          className="flex h-[32px] items-center justify-center ml-[21px] w-[32px]"
                          size="lgIcn"
                          variant="icbOutlineIndigo51"
                        >
                          <Img
                            src="images/img_plus_32X32.svg"
                            className="h-[13px]"
                            alt="plus Five"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[49px] md:mt-[0] mt-[3px] text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="flex md:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] w-[33%]">
                  <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-end p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col gap-[12px] items-start justify-start mt-[3px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Promotion
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                        wrapClassName="w-[100%]"
                        name="Group16068"
                        placeholder="Enter code"
                        shape="RoundedBorder4"
                        size="2xl"
                        variant="OutlineIndigo51"
                      ></Input>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-center md:w-[100%] w-[70%]">
                      <Img
                        src="images/img_offer.svg"
                        className="h-[20px] w-[20px]"
                        alt="offer"
                      />
                      <Text
                        className="font-medium mr-[27px] text-indigo_401 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Click to find Promotion
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[25px] items-center justify-start pt-[4px] w-[100%]">
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
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
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
                            $0
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
                          $120.0
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start mt-[32px] w-[100%]">
                        <Button
                          className="cursor-pointer font-bold min-w-[306px] text-[14px] text-center text-white_A700 w-[auto]"
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
                        By clicking “Purchase” button, I agree with RiriBa Term
                        and Policy
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Header className="absolute bg-white_A700 flex inset-x-[0] items-center justify-center mx-[auto] top-[0] w-[100%]" />
          <Line className="absolute bg-indigo_51 h-[1071px] inset-y-[0] left-[0] my-[auto] w-[1px]" />
        </div>
      </div>
    </>
  );
};

export default CartProductListPage;
