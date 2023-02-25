import React from "react";

import {
  Img,
  Line,
  Text,
  Input,
  Button,
  SelectBox,
  List,
  Radio,
} from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardThreePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[84px]">
            <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-start p-[29px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_bookmark.svg"
                className="h-[28px] mt-[7px] w-[85%]"
                alt="bookmark"
              />
              <div className="flex flex-col gap-[34px] items-center justify-start mb-[930px] w-[100%]">
                <Img
                  src="images/img_grid.svg"
                  className="h-[20px] w-[20px]"
                  alt="grid"
                />
                <Img
                  src="images/img_user.svg"
                  className="h-[20px] w-[20px]"
                  alt="user"
                />
                <Img
                  src="images/img_sort.svg"
                  className="h-[20px] w-[20px]"
                  alt="sort"
                />
                <Img
                  src="images/img_folder.svg"
                  className="h-[20px] w-[20px]"
                  alt="folder"
                />
                <Img
                  src="images/img_calendar.svg"
                  className="h-[20px] w-[20px]"
                  alt="calendar"
                />
                <Img
                  src="images/img_trash.svg"
                  className="h-[20px] w-[20px]"
                  alt="trash"
                />
                <Img
                  src="images/img_mail_20X20.svg"
                  className="h-[20px] w-[20px]"
                  alt="mail"
                />
                <div className="bg-white_A700 flex h-[26px] items-center justify-start p-[3px] w-[26px]">
                  <div className="bg-bluegray_400 h-[20px] rounded-[50%] w-[20px]"></div>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_51 h-[1463px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <header className="bg-white_A700 flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mx-[auto] my-[10px] w-[97%]">
                <div className="header-row mt-[14px] mb-[9px]">
                  <Text
                    className="font-medium text-bluegray_800 text-left"
                    as="h6"
                    variant="h6"
                  >
                    Welcomback, Team!
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-medium sm:hidden p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                  wrapClassName="flex md:ml-[0] md:w-[100%] ml-[305px] sm:hidden sm:w-[100%] w-[33%]"
                  name="SearchBox"
                  placeholder="Search..."
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[16px] mr-[8px] sm:hidden my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#828fa2"
                        className="cursor-pointer ml-[10px] mr-[22px] sm:hidden my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder4"
                  size="smSrc"
                  variant="srcOutlineBluegray200"
                ></Input>
                <Img
                  src="images/img_shoppingbag.svg"
                  className="h-[24px] sm:hidden md:ml-[0] ml-[211px] w-[24px]"
                  alt="shoppingbag"
                />
                <div
                  className="bg-cover bg-no-repeat flex h-[24px] sm:hidden items-end justify-start md:ml-[0] ml-[24px] w-[24px]"
                  style={{
                    backgroundImage: "url('images/img_group16103.svg')",
                  }}
                >
                  <div className="bg-red_600 h-[8px] mb-[14px] outline outline-[2px] outline-white_A700 rounded-[50%] w-[8px]"></div>
                </div>
                <Text
                  className="font-normal sm:hidden md:ml-[0] ml-[24px] not-italic text-gray_500 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  <span className="text-gray_500 text-[16px] font-inter">
                    Hello,
                  </span>
                  <span className="text-bluegray_900 text-[16px] font-inter">
                    {" "}
                  </span>
                  <span className="text-bluegray_900 text-[16px] font-inter font-medium">
                    Sam
                  </span>
                </Text>
                <Img
                  src="images/img_sherlocktoyfa.png"
                  className="h-[40px] md:h-[auto] sm:hidden md:ml-[0] ml-[13px] rounded-[50%] w-[40px]"
                  alt="SherlockToyFa"
                />
              </div>
            </header>
            <div className="bg-gray_51 flex font-poppins items-center justify-start pl-[12px] py-[12px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[74%]">
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Overview
                      </Text>
                      <div className="flex flex-row font-inter gap-[12px] items-center justify-between w-[20%]">
                        <Button
                          className="flex items-center justify-center w-[auto]"
                          shape="icbRoundedBorder4"
                          size="xlIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_download.svg"
                            className="h-[20px]"
                            alt="download"
                          />
                        </Button>
                        <SelectBox
                          className="font-medium text-[14px] text-bluegray_800 text-left w-[auto]"
                          placeholderClassName="text-bluegray_800"
                          name="dropdown"
                          placeholder="Last week"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_bluegray_900.svg"
                              className="h-[20px] mr-[16px] w-[20px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillWhiteA700"
                        ></SelectBox>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-inter gap-[20px] items-center justify-between mt-[24px] w-[100%]">
                      <List
                        className="md:flex-1 flex-col gap-[20px] grid md:w-[100%] w-[21%]"
                        orientation="vertical"
                      >
                        <div className="bg-white_A700 flex items-center justify-end my-[0] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                          <div className="flex flex-col gap-[32px] items-center justify-start mt-[10px] pb-[4px] md:w-[100%] w-[55%]">
                            <Img
                              src="images/img_signal.svg"
                              className="h-[43px] w-[100%]"
                              alt="signal"
                            />
                            <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Total Tasks
                              </Text>
                              <Text
                                className="font-bold text-bluegray_800 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                120
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-center justify-end my-[0] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                          <div className="flex flex-col gap-[33px] items-center justify-start mt-[10px] pb-[4px] md:w-[100%] w-[54%]">
                            <Img
                              src="images/img_signal_43X73.svg"
                              className="h-[43px] w-[100%]"
                              alt="signal One"
                            />
                            <div className="flex flex-col gap-[13px] items-center justify-start w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                New Tasks
                              </Text>
                              <Text
                                className="font-bold text-bluegray_800 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                60
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[44%]">
                        <div className="flex flex-col gap-[23px] items-center justify-start w-[100%]">
                          <div className="flex flex-col gap-[28px] items-center justify-start w-[100%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Statistics
                              </Text>
                              <Img
                                src="images/img_user_32X32.svg"
                                className="h-[32px] w-[32px]"
                                alt="user One"
                              />
                            </div>
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                                <div className="flex flex-row items-end justify-between md:w-[100%] w-[97%]">
                                  <div className="bg-indigo_401 h-[58px] mt-[81px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[3%]"></div>
                                  <div className="bg-indigo_401 h-[95px] mt-[44px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[3%]"></div>
                                  <div className="bg-indigo_401 h-[77px] mt-[62px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[3%]"></div>
                                  <div className="bg-amber_300 h-[139px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[3%]"></div>
                                  <div className="bg-indigo_401 h-[77px] mt-[62px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[3%]"></div>
                                  <div className="bg-indigo_401 h-[40px] mt-[99px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[3%]"></div>
                                  <div className="bg-indigo_401 h-[77px] mt-[62px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[3%]"></div>
                                </div>
                                <div className="flex flex-row gap-[34px] items-start justify-between pb-[2px] px-[2px] w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Mon
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Tue
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Wed
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Thu
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Fri
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Sat
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Sun
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray_103 flex items-center justify-start p-[16px] rounded-[4px] w-[100%]">
                            <div className="flex flex-row gap-[20px] items-center justify-between md:w-[100%] w-[96%]">
                              <div className="flex flex-col items-start justify-start pb-[4px] pr-[4px] w-[auto]">
                                <Text
                                  className="font-semibold text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Data project report
                                </Text>
                                <Text
                                  className="font-normal mt-[4px] not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  • In process
                                </Text>
                              </div>
                              <div className="bg-indigo_52 flex h-[64px] items-center justify-start p-[4px] rounded-[50%] w-[64px]">
                                <div className="bg-indigo_401 h-[56px] rounded-[50%] shadow-bs3 w-[56px]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[32%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Sales
                            </Text>
                            <Img
                              src="images/img_user_32X32.svg"
                              className="h-[32px] w-[32px]"
                              alt="user Two"
                            />
                          </div>
                          <div className="h-[190px] md:h-[222px] mt-[32px] relative w-[190px]">
                            <CircularProgressbar
                              className="border-solid h-[190px] m-[auto] overflow-visible w-[190px]"
                              value={28}
                              strokeWidth={1}
                              styles={{
                                trail: { strokeWidth: 1, stroke: "" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(225deg)",
                                },
                              }}
                            ></CircularProgressbar>
                            <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Total
                              </Text>
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                $2,000
                              </Text>
                            </div>
                          </div>
                          <List
                            className="flex-col gap-[20px] grid items-center mt-[37px] w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row gap-[11px] items-start justify-between w-[100%]">
                              <Radio
                                value="CurrentWeek"
                                className="font-normal not-italic text-[14px] text-bluegray_400 text-left"
                                inputClassName="h-[8px] mr-[5px] w-[8px]"
                                checked={false}
                                name="ProfileViewsTwo"
                                label="Current Week"
                                size="md"
                                variant="FillRed600"
                              ></Radio>
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $1,200
                              </Text>
                              <div className="bg-green_700_63 flex flex-row items-start justify-center pr-[2px] py-[2px] rounded-[4px] w-[auto]">
                                <Img
                                  src="images/img_arrowup.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="arrowup"
                                />
                                <Text
                                  className="font-semibold mt-[2px] text-green_700 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.2%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-row gap-[19px] items-start justify-between w-[100%]">
                              <Radio
                                value="LastWeek"
                                className="font-normal not-italic text-[14px] text-bluegray_400 text-left"
                                inputClassName="h-[8px] mr-[5px] w-[8px]"
                                checked={false}
                                name="ProfileViewsThree"
                                label="Last Week"
                                size="md"
                                variant="FillGreen700"
                              ></Radio>
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $800
                              </Text>
                              <div className="bg-green_700_63 flex flex-row items-start justify-center pr-[2px] py-[2px] rounded-[4px] w-[auto]">
                                <Img
                                  src="images/img_arrowup.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="arrowup One"
                                />
                                <Text
                                  className="font-semibold mt-[2px] text-green_700 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.2%
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-inter gap-[20px] items-center justify-between mt-[20px] w-[100%]">
                      <div className="flex h-[465px] justify-end relative md:w-[100%] w-[55%]">
                        <div className="flex flex-col gap-[11px] h-[100%] items-start justify-start mb-[101px] ml-[auto] mr-[158px] mt-[auto] pr-[4px] pt-[4px] w-[auto]">
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
                        <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                          <div className="flex flex-col items-center justify-start mb-[9px] mt-[2px] md:w-[100%] w-[99%]">
                            <div className="flex flex-row items-center justify-between md:w-[100%] w-[99%]">
                              <Text
                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Statistics
                              </Text>
                              <Button
                                className="flex items-center justify-center text-center"
                                leftIcon={
                                  <Img
                                    src="images/img_calendar_20X20.svg"
                                    className="mr-[10px] text-center"
                                    alt="calendar"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="xl"
                                variant="OutlineBluegray200"
                              >
                                <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-bluegray_800 text-left">
                                  13 Aug - 20 Aug
                                </div>
                              </Button>
                            </div>
                            <div className="flex items-center justify-start mt-[26px] w-[100%]">
                              <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                  <div className="flex sm:flex-1 flex-col gap-[27px] items-start justify-start sm:w-[100%] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Su
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Sa
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Fr
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Th
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      We
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Tu
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Mo
                                    </Text>
                                  </div>
                                  <Line className="bg-indigo_51 sm:h-[1px] h-[256px] sm:w-[100%] w-[1px]" />
                                  <div className="font-poppins h-[256px] relative sm:w-[100%] w-[81%]">
                                    <div className="absolute flex flex-row gap-[24px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[90%]">
                                      <div className="h-[256px] relative w-[75%]">
                                        <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[75%]">
                                          <div className="flex flex-row items-center justify-between w-[100%]">
                                            <Line className="bg-indigo_51 h-[256px] w-[1px]" />
                                            <Line className="bg-indigo_51 h-[256px] w-[1px]" />
                                            <Line className="bg-indigo_51 h-[256px] w-[1px]" />
                                            <Line className="bg-indigo_51 h-[256px] w-[1px]" />
                                          </div>
                                        </div>
                                        <Img
                                          src="images/img_frame_246X252.svg"
                                          className="absolute h-[246px] inset-[0] justify-center m-[auto] w-[100%]"
                                          alt="Frame"
                                        />
                                      </div>
                                      <div className="flex flex-row items-center justify-between w-[19%]">
                                        <Line className="bg-indigo_51 h-[256px] w-[1px]" />
                                        <Line className="bg-indigo_51 h-[256px] w-[1px]" />
                                      </div>
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex h-[48px] items-center justify-end p-[16px] right-[0] shadow-bs2 top-[11%] w-[38%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group_white_A700_48X145.svg')",
                                      }}
                                    >
                                      <div className="flex flex-row gap-[21px] items-center justify-between mt-[2px] md:w-[100%] w-[98%]">
                                        <div className="flex flex-row gap-[8px] items-start justify-start w-[41%]">
                                          <div className="bg-indigo_401 h-[6px] mb-[5px] mt-[2px] rounded-[50%] w-[6px]"></div>
                                          <Text
                                            className="font-semibold text-bluegray_900 text-left w-[auto]"
                                            variant="body1"
                                          >
                                            150.0
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-[8px] items-start justify-start w-[40%]">
                                          <div className="bg-amber_300 h-[6px] mb-[5px] mt-[2px] rounded-[50%] w-[6px]"></div>
                                          <Text
                                            className="font-semibold text-bluegray_900 text-left w-[auto]"
                                            variant="body1"
                                          >
                                            120.0
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-between md:w-[100%] w-[85%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    -300
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    -200
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    -100
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    0
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    100
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    200
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    300
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[24px] items-start justify-center mt-[32px] md:w-[100%] w-[32%]">
                              <div className="flex flex-row gap-[8px] items-start justify-start w-[38%]">
                                <div className="bg-amber_300 h-[6px] mb-[2px] mt-[5px] rounded-[50%] w-[6px]"></div>
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Income
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[47%]">
                                <div className="bg-indigo_401 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                                <Text
                                  className="font-medium text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Expenses
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[44%]">
                        <div className="flex flex-col gap-[29px] items-center justify-start w-[100%]">
                          <div className="flex flex-row items-end justify-between w-[100%]">
                            <Text
                              className="font-bold my-[5px] text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Total projects
                            </Text>
                            <Img
                              src="images/img_user_32X32.svg"
                              className="h-[32px] w-[32px]"
                              alt="user Three"
                            />
                          </div>
                          <List
                            className="flex-col gap-[20px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start pb-[5px] w-[100%]">
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mobile app (4/12)
                              </Text>
                              <div className="flex flex-row gap-[25px] items-end justify-between rounded-[9.09px] w-[100%]">
                                <div className="h-[8px] mt-[9px] overflow-hidden relative w-[auto]">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-indigo_401  rounded-[4px]"
                                    style={{ width: "27%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  34%
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start pb-[5px] w-[100%]">
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Landing page (2/4)
                              </Text>
                              <div className="flex flex-row gap-[26px] items-end justify-between rounded-[9.09px] w-[100%]">
                                <div className="h-[8px] mt-[9px] overflow-hidden relative w-[auto]">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-green_700  rounded-[4px]"
                                    style={{ width: "62%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  50%
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start pb-[5px] w-[100%]">
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Branding (2/2)
                              </Text>
                              <div className="flex flex-row gap-[7px] items-end justify-between rounded-[9.09px] w-[100%]">
                                <div className="h-[8px] mt-[9px] overflow-hidden relative w-[auto]">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-amber_300  rounded-[4px]"
                                    style={{ width: "96%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  100%
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start pb-[5px] w-[100%]">
                              <Text
                                className="font-semibold text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Branding (2/8)
                              </Text>
                              <div className="flex flex-row gap-[15px] items-end justify-between rounded-[9.09px] w-[100%]">
                                <div className="h-[8px] mt-[9px] overflow-hidden relative w-[auto]">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-red_600  rounded-[4px]"
                                    style={{ width: "17%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  25%
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex font-inter items-center justify-start mt-[20px] p-[26px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-center justify-start mb-[6px] md:w-[100%] w-[99%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Transactions history
                            </Text>
                            <Button
                              className="flex items-center justify-center text-center"
                              leftIcon={
                                <Img
                                  src="images/img_calendar_20X20.svg"
                                  className="mr-[10px] text-center"
                                  alt="calendar"
                                />
                              }
                              shape="RoundedBorder4"
                              size="xl"
                              variant="OutlineBluegray200"
                            >
                              <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-bluegray_800 text-left">
                                13 Aug - 20 Aug
                              </div>
                            </Button>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:ml-[0] ml-[20px] mt-[29px] pr-[4px] pt-[4px] md:w-[100%] w-[89%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              No.
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[49px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Customer
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[104px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Date
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[112px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Amount
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[73px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Order No.
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[59px] not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Payment type
                            </Text>
                          </div>
                          <List
                            className="flex-col gap-[0] md:gap-[20px] grid items-center mt-[16px] w-[100%]"
                            orientation="vertical"
                          >
                            <div className="bg-gray_51 flex flex-1 items-center justify-start p-[20px] w-[100%]">
                              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                                <Text
                                  className="font-medium text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  1
                                </Text>
                                <div className="flex md:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[68px] md:w-[100%] w-[14%]">
                                  <Img
                                    src="images/img_robototoyfacefi.png"
                                    className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                                    alt="RobotoToyFaceFi"
                                  />
                                  <div className="flex items-start justify-end pr-[3px] py-[3px] w-[auto]">
                                    <Text
                                      className="font-medium text-bluegray_800 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Ackerman
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="font-medium md:ml-[0] ml-[58px] text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  12.02.2022
                                </Text>
                                <Text
                                  className="font-medium md:ml-[0] ml-[62px] text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  $20.0
                                </Text>
                                <Text
                                  className="font-medium md:ml-[0] ml-[87px] text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  #21033
                                </Text>
                                <Text
                                  className="font-medium md:ml-[0] ml-[74px] text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Visa Card
                                </Text>
                                <Img
                                  src="images/img_user_32X32.svg"
                                  className="h-[24px] md:ml-[0] ml-[107px] w-[24px]"
                                  alt="user Four"
                                />
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-1 items-center justify-start p-[20px] w-[100%]">
                              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                                <Text
                                  className="font-medium text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  2
                                </Text>
                                <div className="flex md:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[65px] md:w-[100%] w-[9%]">
                                  <Img
                                    src="images/img_fidenza978toy.png"
                                    className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                                    alt="Fidenza978Toy"
                                  />
                                  <div className="flex items-center justify-start w-[auto]">
                                    <Text
                                      className="font-medium text-bluegray_800 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Utillia
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="font-medium md:ml-[0] ml-[101px] text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  12.02.2022
                                </Text>
                                <Text
                                  className="font-medium md:ml-[0] ml-[62px] text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  $32.0
                                </Text>
                                <Text
                                  className="font-medium md:ml-[0] ml-[87px] text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  #21034
                                </Text>
                                <Text
                                  className="font-medium md:ml-[0] ml-[74px] text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Visa Card
                                </Text>
                                <Img
                                  src="images/img_user_32X32.svg"
                                  className="h-[24px] md:ml-[0] ml-[107px] w-[24px]"
                                  alt="user Five"
                                />
                              </div>
                            </div>
                          </List>
                        </div>
                        <div className="bg-gray_51 flex items-center justify-start p-[20px] w-[100%]">
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              3
                            </Text>
                            <div className="flex md:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[64px] md:w-[100%] w-[13%]">
                              <Img
                                src="images/img_vangoghbyamrit.png"
                                className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                                alt="VanGoghByAmrit"
                              />
                              <div className="flex items-start justify-end pr-[5px] pt-[5px] w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Benjamin
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-medium md:ml-[0] ml-[65px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              24.01.2022
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] ml-[62px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $16.0
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] ml-[90px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              #21030
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] ml-[74px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              MasterCard
                            </Text>
                            <Img
                              src="images/img_user_32X32.svg"
                              className="h-[24px] md:ml-[0] ml-[91px] w-[24px]"
                              alt="user Six"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-end p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[26%]">
                    <div className="flex flex-col gap-[37px] items-center justify-start mt-[11px] w-[100%]">
                      <div className="flex flex-col gap-[41px] items-center justify-start w-[100%]">
                        <div className="w-[86%]"></div>
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <Line className="bg-indigo_51 h-[1px] w-[100%]" />
                          <div className="flex flex-row items-center justify-between mt-[31px] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Recent activities
                            </Text>
                            <Img
                              src="images/img_user_32X32.svg"
                              className="h-[32px] w-[32px]"
                              alt="user Seven"
                            />
                          </div>
                          <div className="flex flex-col font-inter gap-[24px] items-start justify-start mt-[37px] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Feb 24, 2022
                            </Text>
                            <List
                              className="flex-col grid items-center pr-[10px] w-[100%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-row gap-[16px] items-center justify-between pt-[4px] w-[100%]">
                                <Img
                                  src="images/img_robototoyfacefi.png"
                                  className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                  alt="RobotoToyFaceFi One"
                                />
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Ackerman
                                  </Text>
                                  <Text
                                    className="font-medium leading-[24.00px] mt-[8px] text-bluegray_900 text-left w-[100%]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    <span className="text-bluegray_900 text-[16px] font-inter">
                                      Changelog Revamp{" "}
                                    </span>
                                    <span className="text-red_600 text-[16px] font-inter">
                                      #ver 1.0
                                    </span>
                                    <span className="text-bluegray_900 text-[16px] font-inter">
                                      {" "}
                                      Homescreen{" "}
                                    </span>
                                  </Text>
                                  <Text
                                    className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex flex-1 items-center justify-start w-[100%]">
                                <div className="flex flex-row gap-[16px] items-center justify-between pt-[4px] w-[100%]">
                                  <Img
                                    src="images/img_punktoyface1.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="PunkToyFaceOne"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Blanker
                                    </Text>
                                    <Text
                                      className="font-medium leading-[24.00px] mt-[8px] text-bluegray_900 text-left w-[100%]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Create user flow for Data Projects
                                    </Text>
                                    <Text
                                      className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[96%]">
                                <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_vangoghbyamrit.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="VanGoghByAmrit One"
                                  />
                                  <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Lee Ri
                                    </Text>
                                    <Text
                                      className="font-medium mt-[13px] text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Revision design system
                                    </Text>
                                    <Text
                                      className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex flex-1 items-center justify-start w-[100%]">
                                <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_rarepepenakam.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="RarePepeNakam"
                                  />
                                  <div className="flex flex-col items-start justify-start pr-[4px] pt-[4px] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Jackson
                                    </Text>
                                    <Text
                                      className="font-medium mt-[13px] text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Changelog Scan ID Card
                                    </Text>
                                    <Text
                                      className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[82%]">
                                <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_tintin22.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="TinTinTwentyTwo"
                                  />
                                  <div className="flex flex-col items-start justify-start pr-[4px] pt-[4px] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Yomaha
                                    </Text>
                                    <Text
                                      className="font-medium mt-[13px] text-bluegray_900 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Pitching with client
                                    </Text>
                                    <Text
                                      className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-inter gap-[24px] h-[272px] items-start justify-start w-[272px]">
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Feb 23, 2022
                        </Text>
                        <List
                          className="flex-col grid items-center pr-[10px] w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row gap-[16px] items-center justify-between pt-[4px] w-[100%]">
                            <Img
                              src="images/img_robototoyfacefi.png"
                              className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                              alt="RobotoToyFaceFi Two"
                            />
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Ackerman
                              </Text>
                              <Text
                                className="font-medium leading-[24.00px] mt-[8px] text-bluegray_900 text-left w-[100%]"
                                as="h5"
                                variant="h5"
                              >
                                <span className="text-bluegray_900 text-[16px] font-inter">
                                  Changelog Revamp{" "}
                                </span>
                                <span className="text-red_600 text-[16px] font-inter">
                                  #ver 1.0
                                </span>
                                <span className="text-bluegray_900 text-[16px] font-inter">
                                  {" "}
                                  Homescreen{" "}
                                </span>
                              </Text>
                              <Text
                                className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                2min ago
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_51 w-[100%]" />
                          <div className="flex flex-1 items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-between pt-[4px] w-[100%]">
                              <Img
                                src="images/img_punktoyface1.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="PunkToyFaceOne One"
                              />
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Blanker
                                </Text>
                                <Text
                                  className="font-medium leading-[24.00px] mt-[8px] text-bluegray_900 text-left w-[100%]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Create user flow for Data Projects
                                </Text>
                                <Text
                                  className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  2min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
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

export default DashboardThreePage;
