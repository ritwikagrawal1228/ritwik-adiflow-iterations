import React from "react";

import { Img, Text, Line, SeekBar, CheckBox, Button, Input } from "components";
import Header from "components/Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { CloseSVG } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const ShopSearchPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
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
          <Line className="bg-indigo_51 h-[1538px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex font-poppins items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[20px] items-start justify-between mb-[25px] mt-[16px] w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[32px] items-start justify-start md:w-[100%] w-[24%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Shopping centre
                  </Text>
                  <div className="flex font-inter h-[1050px] justify-end relative w-[100%]">
                    <div className="flex flex-col gap-[11px] h-[100%] items-start justify-start mb-[247px] mt-[auto] mx-[auto] pr-[4px] pt-[4px] w-[auto]">
                      <Text
                        className="font-normal md:ml-[0] ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Balance
                      </Text>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        $0.0
                      </Text>
                    </div>
                    <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[31px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-start justify-start mt-[8px] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Categories
                        </Text>
                        <Accordion
                          preExpanded={[0]}
                          className="gap-[21px] mt-[32px] w-[100%]"
                        >
                          {" "}
                          {[...Array(4)].map((item, index) => (
                            <AccordionItem uuid={index} key={Math.random()}>
                              <div className="flex items-center justify-start pb-[21px] w-[100%]">
                                <div className="flex flex-col gap-[22px] items-start justify-start pt-[2px] w-[100%]">
                                  <div className="flex flex-row items-center justify-between w-[100%]">
                                    <Text
                                      className="font-medium text-bluegray_800 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Clothes
                                    </Text>
                                    <Img
                                      src="images/img_arrowup_bluegray_900.svg"
                                      className="h-[20px] w-[20px]"
                                      alt="arrowup"
                                    />
                                  </div>
                                  <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                                    <div className="flex flex-col items-start justify-start p-[3px] w-[100%]">
                                      <Text
                                        className="font-medium md:ml-[0] ml-[5px] text-bluegray_800 text-left w-[auto]"
                                        as="h5"
                                        variant="h5"
                                      >
                                        T-shirts
                                      </Text>
                                      <Text
                                        className="font-medium md:ml-[0] ml-[5px] mt-[24px] text-bluegray_800 text-left w-[auto]"
                                        as="h5"
                                        variant="h5"
                                      >
                                        Jeans
                                      </Text>
                                      <Text
                                        className="font-medium md:ml-[0] ml-[5px] mt-[24px] text-bluegray_800 text-left w-[auto]"
                                        as="h5"
                                        variant="h5"
                                      >
                                        Jackets
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                            </AccordionItem>
                          ))}
                        </Accordion>
                        <div className="flex flex-col gap-[19px] items-start justify-start mt-[23px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Price
                          </Text>
                          <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                            <SeekBar
                              inputValue={[null]}
                              trackColors={["", "#e2e8ed"]}
                              thumbClassName="h-[undefinedpx] w-[undefinedpx] flex justify-center items-center rounded-[50%] outline-none"
                              className="flex h-[14px] w-[100%]"
                              trackClassName="h-[4px] flex w-[100%]"
                            />{" "}
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-medium h-[16px] text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                $0
                              </Text>
                              <Text
                                className="font-medium text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                $10,000
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="font-medium mt-[25px] text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Rating
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-medium text-[14px] text-bluegray_800 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="5 Stars"
                            name="Remember"
                            size="sm"
                          ></CheckBox>
                          <Img
                            src="images/img_frame_11X77.png"
                            className="h-[11px] md:h-[auto] object-cover w-[auto]"
                            alt="Frame One"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-medium text-[14px] text-bluegray_800 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="4 Stars"
                            name="Remember One"
                            size="sm"
                          ></CheckBox>
                          <Img
                            src="images/img_frame_11X61.png"
                            className="h-[11px] md:h-[auto] object-cover w-[auto]"
                            alt="Frame Two"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-medium text-[14px] text-bluegray_800 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="3 Stars"
                            name="Remember Two"
                            size="sm"
                          ></CheckBox>
                          <Img
                            src="images/img_frame_11X45.png"
                            className="h-[11px] md:h-[auto] object-cover w-[auto]"
                            alt="Frame Three"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-medium text-[14px] text-bluegray_800 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="2 Stars"
                            name="Remember Three"
                            size="sm"
                          ></CheckBox>
                          <Img
                            src="images/img_frame_11X28.png"
                            className="h-[11px] md:h-[auto] object-cover w-[auto]"
                            alt="Frame Four"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-medium text-[14px] text-bluegray_800 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="1 Star"
                            name="Remember Four"
                            size="sm"
                          ></CheckBox>
                          <Img
                            src="images/img_vector_11X12.png"
                            className="h-[11px] md:h-[auto] object-cover w-[12px]"
                            alt="Vector One"
                          />
                        </div>
                        <div className="flex flex-col gap-[19px] items-start justify-start mt-[24px] md:w-[100%] w-[73%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Color
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_icon.svg"
                              className="h-[24px] w-[24px]"
                              alt="Icon"
                            />
                            <div className="bg-light_blue_A700 flex h-[24px] items-center justify-start p-[6px] rounded-[50%] w-[24px]">
                              <div className="bg-white_A700 h-[12px] rounded-[50%] w-[12px]"></div>
                            </div>
                            <div className="bg-pink_400 h-[24px] rounded-[50%] w-[24px]"></div>
                            <div className="bg-amber_302 h-[24px] rounded-[50%] w-[24px]"></div>
                            <div className="bg-pink_A100 h-[24px] rounded-[50%] w-[24px]"></div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-center justify-start mt-[32px] w-[100%]">
                          <Button
                            className="flex items-center justify-center text-center"
                            rightIcon={
                              <Img
                                src="images/img_plus.svg"
                                className="ml-[15px] text-center"
                                alt="plus"
                              />
                            }
                            shape="CircleBorder24"
                            size="5xl"
                            variant="FillDeeporange300"
                          >
                            <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-left text-white_A700">
                              Apply filter
                            </div>
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold text-[14px] text-bluegray_900 text-center w-[210px]"
                            shape="CircleBorder24"
                            size="4xl"
                            variant="FillGray51"
                          >
                            Clear all
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:mt-[0] mt-[56px] md:w-[100%] w-[75%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="frame Five"
                    placeholder="Seach name, type,..."
                    prefix={
                      <Img
                        src="images/img_search_bluegray_900.svg"
                        className="cursor-pointer ml-[32px] mr-[16px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                          onClick={() => setInputvalue("")}
                          color="#828fa2"
                        />
                      ) : inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#828fa2"
                          className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="mdSrc"
                    variant="srcOutlineBlack9000c"
                  ></Input>
                  <div className="h-[1186px] md:h-[2407px] sm:h-[3591px] mt-[19px] relative w-[100%]">
                    <div className="absolute bg-white_A700 h-[308px] inset-x-[0] mx-[auto] rounded-[4px] shadow-bs top-[1%] w-[32%]"></div>
                    <div className="bg-white_A700 h-[308px] ml-[auto] mt-[9px] rounded-[4px] shadow-bs w-[32%]"></div>
                    <div className="absolute gap-[0] md:gap-[20px] grid grid-cols-1 inset-[0] justify-center m-[auto] min-h-[auto] w-[100%]">
                      <div className="flex-1 gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat flex h-[353px] items-end justify-start p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group16028.png')",
                            }}
                          >
                            <div className="flex flex-row gap-[8px] items-center justify-end mb-[283px] ml-[auto] md:w-[100%] w-[81%]">
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_airplane.svg"
                                    className="ml-[11px] text-center"
                                    alt="airplane"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillRed40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-left text-red_600">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_offer.svg"
                                    className="ml-[13px] text-center"
                                    alt="offer"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillIndigo40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_401 text-left">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                            <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start pt-[3px] md:w-[100%] w-[96%]">
                                <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                                  <Text
                                    className="font-medium text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Avo T-Shirt
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-[100%]">
                                    <Text
                                      className="font-bold font-inter text-bluegray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-[auto] object-cover w-[72%]"
                                  alt="Frame Eight"
                                />
                              </div>
                              <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillDeeporange300"
                                >
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-[20px]"
                                    alt="plus"
                                  />
                                </Button>
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillGray51"
                                >
                                  <Img
                                    src="images/img_buttonprimary.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat flex h-[353px] items-end justify-start p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group16029.png')",
                            }}
                          >
                            <div className="flex flex-row gap-[8px] items-center justify-end mb-[283px] ml-[auto] md:w-[100%] w-[81%]">
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_airplane.svg"
                                    className="ml-[11px] text-center"
                                    alt="airplane"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillRed40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-left text-red_600">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_offer.svg"
                                    className="ml-[13px] text-center"
                                    alt="offer"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillIndigo40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_401 text-left">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                            <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start pt-[3px] md:w-[100%] w-[96%]">
                                <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                                  <Text
                                    className="font-medium text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Basic T-Shirt
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-[100%]">
                                    <Text
                                      className="font-bold font-inter text-bluegray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-[auto] object-cover w-[72%]"
                                  alt="Frame One"
                                />
                              </div>
                              <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillDeeporange300"
                                >
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-[20px]"
                                    alt="plus One"
                                  />
                                </Button>
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillGray51"
                                >
                                  <Img
                                    src="images/img_buttonprimary.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary One"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat flex h-[353px] items-end justify-start p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group16030.png')",
                            }}
                          >
                            <div className="flex flex-row gap-[8px] items-center justify-end mb-[283px] ml-[auto] md:w-[100%] w-[81%]">
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_airplane.svg"
                                    className="ml-[11px] text-center"
                                    alt="airplane"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillRed40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-left text-red_600">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_offer.svg"
                                    className="ml-[13px] text-center"
                                    alt="offer"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillIndigo40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_401 text-left">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                            <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start pt-[5px] md:w-[100%] w-[96%]">
                                <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                                  <Text
                                    className="font-medium text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Trendy Polo
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-[100%]">
                                    <Text
                                      className="font-bold font-inter text-bluegray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-[auto] object-cover w-[72%]"
                                  alt="Frame Two"
                                />
                              </div>
                              <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillDeeporange300"
                                >
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-[20px]"
                                    alt="plus Two"
                                  />
                                </Button>
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillGray51"
                                >
                                  <Img
                                    src="images/img_buttonprimary.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary Two"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
                        <div
                          className="common-pointer bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]"
                          onClick={() => navigate("/shopdetailitem")}
                        >
                          <div
                            className="bg-cover bg-no-repeat flex h-[353px] items-end justify-start p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group16031.png')",
                            }}
                          >
                            <div className="flex flex-row gap-[8px] items-center justify-end mb-[283px] ml-[auto] md:w-[100%] w-[81%]">
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_airplane.svg"
                                    className="ml-[11px] text-center"
                                    alt="airplane"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillRed40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-left text-red_600">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_offer.svg"
                                    className="ml-[13px] text-center"
                                    alt="offer"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillIndigo40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_401 text-left">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                            <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start pt-[3px] md:w-[100%] w-[96%]">
                                <div className="flex flex-col gap-[17px] justify-start w-[100%]">
                                  <Text
                                    className="font-medium md:ml-[0] ml-[14px] text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Polo Shirt
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-[100%]">
                                    <Text
                                      className="font-bold font-inter text-bluegray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-[auto] object-cover w-[72%]"
                                  alt="Frame Nine"
                                />
                              </div>
                              <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillDeeporange300"
                                >
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-[20px]"
                                    alt="plus One"
                                  />
                                </Button>
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillGray51"
                                >
                                  <Img
                                    src="images/img_buttonprimary.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary One"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat flex h-[353px] items-end justify-start p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group16032.png')",
                            }}
                          >
                            <div className="flex flex-row gap-[8px] items-center justify-end mb-[283px] ml-[auto] md:w-[100%] w-[81%]">
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_airplane.svg"
                                    className="ml-[11px] text-center"
                                    alt="airplane"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillRed40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-left text-red_600">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_offer.svg"
                                    className="ml-[13px] text-center"
                                    alt="offer"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillIndigo40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_401 text-left">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                            <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start pt-[3px] md:w-[100%] w-[96%]">
                                <div className="flex flex-col gap-[17px] justify-start w-[100%]">
                                  <Text
                                    className="font-medium md:ml-[0] ml-[14px] text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Bomber
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-[100%]">
                                    <Text
                                      className="font-bold font-inter text-bluegray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-[auto] object-cover w-[72%]"
                                  alt="Frame One One"
                                />
                              </div>
                              <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillDeeporange300"
                                >
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-[20px]"
                                    alt="plus One One"
                                  />
                                </Button>
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillGray51"
                                >
                                  <Img
                                    src="images/img_buttonprimary.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary One One"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                          <div
                            className="bg-cover bg-no-repeat flex h-[353px] items-end justify-start p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group16033.png')",
                            }}
                          >
                            <div className="flex flex-row gap-[8px] items-center justify-end mb-[283px] ml-[auto] md:w-[100%] w-[81%]">
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_airplane.svg"
                                    className="ml-[11px] text-center"
                                    alt="airplane"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillRed40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-left text-red_600">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="flex items-center justify-center text-center"
                                rightIcon={
                                  <Img
                                    src="images/img_offer.svg"
                                    className="ml-[13px] text-center"
                                    alt="offer"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="lg"
                                variant="FillIndigo40019"
                              >
                                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_401 text-left">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                            <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start pt-[3px] md:w-[100%] w-[96%]">
                                <div className="flex flex-col gap-[17px] justify-start w-[100%]">
                                  <Text
                                    className="font-medium md:ml-[0] ml-[14px] text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Over Shirt
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-[100%]">
                                    <Text
                                      className="font-bold font-inter text-bluegray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-[auto] object-cover w-[72%]"
                                  alt="Frame Two One"
                                />
                              </div>
                              <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillDeeporange300"
                                >
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-[20px]"
                                    alt="plus Two One"
                                  />
                                </Button>
                                <Button
                                  className="flex h-[48px] items-center justify-center rounded-[50%] w-[48px]"
                                  size="xlIcn"
                                  variant="icbFillGray51"
                                >
                                  <Img
                                    src="images/img_buttonprimary.svg"
                                    className="h-[20px]"
                                    alt="ButtonPrimary Two One"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-center mt-[41px] md:w-[100%] w-[28%]">
                    <Button
                      className="flex h-[32px] items-center justify-center w-[32px]"
                      size="mdIcn"
                      variant="icbOutlineIndigo51"
                    >
                      <Img
                        src="images/img_arrowleft.svg"
                        className="h-[20px]"
                        alt="arrowleft"
                      />
                    </Button>
                    <Button
                      className="cursor-pointer font-medium h-[32px] text-[14px] text-bluegray_900 text-center w-[32px]"
                      size="2xl"
                      variant="OutlineBluegray900"
                    >
                      1
                    </Button>
                    <Button
                      className="cursor-pointer font-medium h-[32px] text-[14px] text-bluegray_800 text-center w-[32px]"
                      size="2xl"
                      variant="OutlineIndigo51_1"
                    >
                      2
                    </Button>
                    <Button
                      className="cursor-pointer font-medium h-[32px] text-[14px] text-bluegray_800 text-center w-[32px]"
                      size="2xl"
                      variant="OutlineIndigo51_1"
                    >
                      ...
                    </Button>
                    <Button
                      className="cursor-pointer font-medium h-[32px] text-[14px] text-bluegray_800 text-center w-[32px]"
                      size="md"
                      variant="OutlineIndigo51_1"
                    >
                      9
                    </Button>
                    <Button
                      className="flex h-[32px] items-center justify-center rotate-[180deg] w-[32px]"
                      size="mdIcn"
                      variant="icbOutlineIndigo51"
                    >
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[20px]"
                        alt="arrowright"
                      />
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

export default ShopSearchPage;
