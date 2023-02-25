import React from "react";

import { Line, Img, Text, List, Button } from "components";
import Header1 from "components/Header1";
import { useNavigate } from "react-router-dom";

const ShopReviewsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <div className="h-[1024px] md:h-[1026px] md:px-[20px] relative md:w-[100%] w-[17%]">
            <Line className="bg-indigo_51 h-[690px] ml-[auto] mr-[21px] mt-[60px] w-[1px]" />
            <div className="absolute bg-white_A700 flex flex-col gap-[36px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[32px] sm:px-[20px] w-[100%]">
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
          </div>
          <Line className="bg-indigo_51 h-[1979px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex md:flex-1 flex-col items-center justify-start md:px-[20px] md:w-[100%] w-[84%]">
            <Header1 className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_51 flex items-center justify-end p-[22px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col items-center justify-start mb-[10px] mt-[17px] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
                  <Text
                    className="font-poppins text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Shopping centre
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Shop Central/
                    </span>
                    <span className="text-bluegray_800 text-[16px]">
                      {" "}
                      Product detail
                    </span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex items-center justify-start mt-[32px] p-[30px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col gap-[48px] items-center justify-start mb-[50px] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[20px] items-center justify-between md:w-[100%] w-[61%]">
                        <List
                          className="flex-col grid w-[auto]"
                          orientation="vertical"
                        >
                          <Img
                            src="images/img_rectangle.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="Rectangle"
                          />
                          <Img
                            src="images/img_rectangle_126X116.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="Rectangle One"
                          />
                          <Img
                            src="images/img_rectangle_1.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="Rectangle Two"
                          />
                          <Img
                            src="images/img_rectangle_2.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="Rectangle Three"
                          />
                        </List>
                        <Img
                          src="images/img_rectangle_564X524.png"
                          className="h-[564px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                          alt="Rectangle Four"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-end pt-[5px] md:w-[100%] w-[36%]">
                        <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] ml-[3px] pb-[3px] md:w-[100%] w-[53%]">
                          <Text
                            className="text-bluegray_900 text-left w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            Polo Shirt
                          </Text>
                          <div className="flex flex-row gap-[18px] items-center justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Code: #1230
                            </Text>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="h-[14px] md:h-[auto] object-cover w-[auto]"
                              alt="Frame"
                            />
                          </div>
                        </div>
                        <Text
                          className="mt-[32px] text-indigo_401 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $120.0
                        </Text>
                        <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[3px] mt-[32px] pr-[4px] pt-[4px] md:w-[100%] w-[28%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose color
                          </Text>
                          <Img
                            src="images/img_computer_24X52.svg"
                            className="h-[24px] w-[51%]"
                            alt="computer"
                          />
                        </div>
                        <div className="flex flex-col gap-[16px] items-start justify-start md:ml-[0] ml-[3px] mt-[32px] pr-[5px] pt-[5px] md:w-[100%] w-[35%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose quantity
                          </Text>
                          <div className="flex flex-row items-center justify-start md:w-[100%] w-[87%]">
                            <div className="border-[1px] border-indigo_51 border-solid flex h-[32px] items-center justify-start p-[9px] w-[32px]">
                              <div className="bg-bluegray_900 h-[1px] my-[5px] rounded-[0.83px] w-[93%]"></div>
                            </div>
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
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[39%]">
                          <Text
                            className="font-medium mt-[3px] text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose size
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-start mt-[19px] md:w-[100%] w-[75%]">
                            <Button
                              className="cursor-pointer font-medium h-[32px] text-[14px] text-bluegray_800 text-center w-[32px]"
                              size="md"
                              variant="OutlineIndigo51_1"
                            >
                              S
                            </Button>
                            <Button
                              className="cursor-pointer font-medium h-[32px] text-[14px] text-bluegray_800 text-center w-[32px]"
                              size="2xl"
                              variant="OutlineIndigo51_1"
                            >
                              M
                            </Button>
                            <Button
                              className="cursor-pointer font-medium h-[32px] text-[14px] text-bluegray_800 text-center w-[32px]"
                              size="2xl"
                              variant="OutlineIndigo51_1"
                            >
                              L
                            </Button>
                          </div>
                          <Text
                            className="font-normal md:ml-[0] ml-[2px] mt-[21px] not-italic text-indigo_401 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            How to find your size?
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between md:ml-[0] ml-[3px] mt-[32px] w-[100%]">
                          <Button
                            className="common-pointer cursor-pointer font-bold min-w-[186px] text-[14px] text-center text-white_A700 w-[auto]"
                            onClick={() => navigate("/shippinginfo")}
                            shape="CircleBorder24"
                            size="4xl"
                            variant="FillDeeporange300"
                          >
                            Purchase now
                          </Button>
                          <Button
                            className="common-pointer cursor-pointer font-bold min-w-[185px] text-[14px] text-center text-deep_orange_300 w-[auto]"
                            onClick={() => navigate("/cartempty")}
                            shape="CircleBorder24"
                            size="4xl"
                            variant="FillDeeporange50"
                          >
                            Add to cart
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[27px] items-start justify-start md:mt-[0] mt-[4px] md:w-[100%] w-[11%]">
                        <Text
                          className="common-pointer font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                          onClick={() => navigate("/shopdetailitem")}
                        >
                          Product Detail
                        </Text>
                        <div className="flex flex-row gap-[12px] items-center justify-start pr-[2px] py-[2px] w-[100%]">
                          <div className="bg-indigo_401 h-[2px] my-[9px] w-[36%]"></div>
                          <Text
                            className="font-medium text-indigo_401 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Reviews
                          </Text>
                        </div>
                      </div>
                      <List
                        className="md:flex-1 flex-col md:gap-[20px] grid md:w-[100%] w-[66%]"
                        orientation="vertical"
                      >
                        <div className="border-[1px] border-indigo_51 border-solid flex items-center justify-start my-[0] p-[32px] sm:px-[20px] rounded-[4px] w-[100%]">
                          <div className="flex flex-col gap-[40px] items-end justify-start w-[100%]">
                            <div className="flex md:flex-col flex-row md:gap-[52px] items-start justify-between w-[100%]">
                              <div className="flex md:flex-1 sm:flex-col flex-row gap-[20px] items-start justify-between md:w-[100%] w-[78%]">
                                <Img
                                  src="images/img_tintin22.png"
                                  className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                                  alt="TinTinTwentyTwo"
                                />
                                <div className="flex flex-col gap-[15px] items-start justify-end pr-[5px] pt-[5px] sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_800 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Jimo
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Nice T-Shirt, I have a soft spot for buying
                                    this stuff &lt;3 &lt;3
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-normal md:mt-[0] mt-[5px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                20 mins ago
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[30px] items-center justify-end ml-[auto] md:w-[100%] w-[35%]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[60%]">
                                <Img
                                  src="images/img_refresh_24X24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="refresh"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  10 comments
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-between w-[28%]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="favorite"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  200
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[1px] border-indigo_51 border-solid flex items-center justify-start my-[0] p-[32px] sm:px-[20px] rounded-[4px] w-[100%]">
                          <div className="flex flex-col gap-[16px] items-end justify-start w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-start justify-between sm:w-[100%] w-[74%]">
                                <Img
                                  src="images/img_indiahigh.png"
                                  className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                                  alt="Indiahigh"
                                />
                                <div className="flex flex-col items-start justify-start sm:mt-[0] mt-[6px] sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_800 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Ackerman_lhn
                                  </Text>
                                  <Text
                                    className="font-normal leading-[24.00px] mt-[4px] not-italic text-bluegray_800 text-left w-[100%]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Oh my god, i am really addicted to this
                                    brand a lot. I define myself as a big fan
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="font-normal sm:mt-[0] mt-[5px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                20 mins ago
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[30px] items-center justify-end ml-[auto] md:w-[100%] w-[35%]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[60%]">
                                <Img
                                  src="images/img_refresh_24X24.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="refresh One"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  10 comments
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-between w-[28%]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="favorite One"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  200
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-poppins md:gap-[40px] items-start justify-between mt-[36px] w-[100%]">
                  <Text
                    className="mt-[4px] text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Related product
                  </Text>
                  <div className="flex flex-row font-inter gap-[16px] items-center justify-between mb-[4px] w-[8%]">
                    <Text
                      className="font-medium text-bluegray_400 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      See all
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_400_24X24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row font-inter gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[32px] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[353px] items-end justify-start p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group16028.png')",
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
                        backgroundImage: "url('images/img_group16029.png')",
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
                        backgroundImage: "url('images/img_group16030.png')",
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
                            alt="Frame Three"
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
                              alt="plus Three"
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
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[353px] items-end justify-start p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group16033.png')",
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
                            alt="Frame Four"
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
                              alt="plus Four"
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
                              alt="ButtonPrimary Three"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopReviewsPage;
