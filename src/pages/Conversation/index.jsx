import React from "react";

import { Line, Text, Button, Img, List, Input, Radio } from "components";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const ConversationPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="bg-white_A700 sm:h-[1026px] h-[1084px] md:h-[2093px] md:px-[20px] relative w-[100%]">
          <div className="absolute bg-white_A700 flex inset-x-[0] items-center justify-end mx-[auto] sm:pl-[20px] pl-[241px] md:pl-[40px] top-[0] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
              <Line className="bg-indigo_51 md:h-[1px] h-[927px] md:w-[100%] w-[1px]" />
              <Header className="bg-white_A700 flex flex-1 items-center justify-center mb-[867px] w-[100%]" />
            </div>
          </div>
          <div className="absolute bg-gray_51 bottom-[0] flex flex-col font-poppins gap-[32px] items-start justify-center p-[23px] sm:px-[20px] right-[0] w-[84%]">
            <Text
              className="mt-[17px] text-bluegray_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Message
            </Text>
            <div className="bg-white_A700 flex md:flex-col flex-row font-inter gap-[26px] items-center justify-end mb-[158px] sm:pl-[20px] pl-[32px] rounded-[4px] shadow-bs w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[32px] items-start justify-start md:w-[100%] w-[35%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[46%]">
                  <Button
                    className="flex h-[62px] items-center justify-center rounded-[50%] w-[62px]"
                    size="mdIcn"
                    variant="icbOutlineGreen700"
                  >
                    <Img
                      src="images/img_robototoyfacefi.png"
                      className="h-[48px]"
                      alt="Group"
                    />
                  </Button>
                  <div className="flex flex-col gap-[13px] items-start justify-start pr-[5px] pt-[5px] w-[auto]">
                    <Text
                      className="font-bold text-bluegray_800 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Ackerman
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      My accout
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[31px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Online (10)
                  </Text>
                  <div className="flex flex-row gap-[24px] items-center justify-between w-[100%]">
                    <List
                      className="sm:flex-col flex-row gap-[24px] grid grid-cols-5 w-[auto]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[12px] items-center justify-start mb-[3px] sm:ml-[0] w-[100%]">
                        <div className="md:h-[48px] h-[51px] relative w-[100%]">
                          <Img
                            src="images/img_punktoyface1.png"
                            className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                            alt="PunkToyFaceOne"
                          />
                          <div className="absolute bg-green_700 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[50%] w-[11px]"></div>
                        </div>
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Lee
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-center justify-start mb-[4px] sm:ml-[0] w-[100%]">
                        <div className="md:h-[48px] h-[51px] relative w-[100%]">
                          <Img
                            src="images/img_indiahigh.png"
                            className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                            alt="Indiahigh"
                          />
                          <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[50%] w-[11px]"></div>
                        </div>
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Riri
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start mb-[3px] sm:ml-[0] w-[100%]">
                        <div className="md:h-[48px] h-[51px] relative w-[100%]">
                          <Img
                            src="images/img_tintin22.png"
                            className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                            alt="TinTinTwentyTwo"
                          />
                          <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[50%] w-[11px]"></div>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] ml-[3px] text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Jimo
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[12px] items-center justify-start mb-[3px] sm:ml-[0] w-[100%]">
                        <div className="md:h-[48px] h-[51px] relative w-[100%]">
                          <Img
                            src="images/img_vangoghbyamrit.png"
                            className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                            alt="VanGoghByAmrit"
                          />
                          <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[50%] w-[11px]"></div>
                        </div>
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Acker
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] pb-[2px] pr-[2px] w-[100%]">
                        <div className="md:h-[48px] h-[51px] md:ml-[0] ml-[2px] relative w-[96%]">
                          <Img
                            src="images/img_punk9252toyface.png"
                            className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                            alt="Punk9252ToyFace"
                          />
                          <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[50%] w-[11px]"></div>
                        </div>
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Momo
                        </Text>
                      </div>
                    </List>
                    <Img
                      src="images/img_arrowright_bluegray_400.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-medium p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                  wrapClassName="flex sm:w-[100%] w-[99%]"
                  name="SearchBox One"
                  placeholder="Search..."
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[16px] mr-[8px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
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
                  size="smSrc"
                  variant="srcFillGray51"
                ></Input>
                <List
                  className="flex-col grid items-center pb-[20px] w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="md:h-[48px] h-[51px] relative w-[13%]">
                      <Img
                        src="images/img_punktoyface1.png"
                        className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                        alt="PunkToyFaceOne One"
                      />
                      <div className="absolute bg-green_700 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[50%] w-[11px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[83%]">
                      <div className="flex flex-col gap-[13px] items-start justify-end w-[auto]">
                        <Text
                          className="font-bold mt-[5px] text-bluegray_800 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Lee Ankar
                        </Text>
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Hey! Can i meet you for a sec?
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-start justify-end pl-[2px] pt-[2px] w-[auto]">
                        <Text
                          className="font-normal mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          now
                        </Text>
                        <Text
                          className="bg-red_600 flex font-bold h-[24px] items-center justify-center md:ml-[0] ml-[4px] rounded-[50%] text-center text-white_A700 w-[24px]"
                          variant="body1"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-indigo_51 w-[83%]" />
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="md:h-[48px] h-[51px] relative w-[13%]">
                      <Img
                        src="images/img_tintin22.png"
                        className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                        alt="TinTinTwentyTwo One"
                      />
                      <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[50%] w-[11px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[83%]">
                      <div className="flex flex-col gap-[14px] items-start justify-end w-[auto]">
                        <Text
                          className="font-bold mt-[5px] text-bluegray_800 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Jimo
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sorry for my mistaken ✓
                        </Text>
                      </div>
                      <div className="flex items-center justify-start pl-[2px] py-[2px] w-[55px]">
                        <Text
                          className="font-normal mb-[36px] not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          23 mins
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-indigo_51 w-[83%]" />
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="md:h-[48px] h-[51px] relative w-[13%]">
                      <Img
                        src="images/img_punk9252toyface.png"
                        className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                        alt="Punk9252ToyFace One"
                      />
                      <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[50%] w-[11px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[83%]">
                      <div className="flex flex-col gap-[13px] items-start justify-end w-[auto]">
                        <Text
                          className="font-bold mt-[5px] text-bluegray_800 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Momo
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sorry for my mistaken ✓
                        </Text>
                      </div>
                      <div className="flex items-center justify-start pl-[2px] py-[2px] w-[55px]">
                        <Text
                          className="font-normal mb-[36px] not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          23 mins
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-indigo_51 w-[83%]" />
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="md:h-[48px] h-[51px] relative w-[13%]">
                      <Img
                        src="images/img_indiahigh.png"
                        className="absolute h-[48px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[48px]"
                        alt="Indiahigh One"
                      />
                      <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[50%] w-[11px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[83%]">
                      <div className="flex flex-col gap-[14px] items-start justify-end w-[auto]">
                        <Text
                          className="font-bold mt-[5px] text-bluegray_800 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Riri Lee
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sorry for my mistaken ✓
                        </Text>
                      </div>
                      <div className="flex items-center justify-start pl-[2px] py-[2px] w-[55px]">
                        <Text
                          className="font-normal mb-[36px] not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          23 mins
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <Line className="bg-indigo_51 md:h-[1px] h-[747px] md:w-[100%] w-[1px]" />
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[63%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[92%]">
                    <div className="flex flex-col gap-[12px] items-start justify-end pr-[3px] pt-[3px] md:w-[100%] w-[15%]">
                      <Text
                        className="font-bold mt-[2px] text-bluegray_800 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Lee Ankar
                      </Text>
                      <Radio
                        value="Online"
                        className="font-medium text-[14px] text-bluegray_800 text-left"
                        inputClassName="h-[8px] mr-[5px] w-[8px]"
                        checked={false}
                        name="ProfileViewsOne"
                        label="Online"
                        size="md"
                        variant="FillGreen700_2"
                      ></Radio>
                    </div>
                    <Button
                      className="flex h-[48px] items-center justify-center mb-[10px] md:ml-[0] ml-[437px] rounded-[50%] w-[48px]"
                      size="xlIcn"
                      variant="icbFillGray51"
                    >
                      <Img
                        src="images/img_search_bluegray_900.svg"
                        className="h-[20px]"
                        alt="search"
                      />
                    </Button>
                    <Button
                      className="flex h-[48px] items-center justify-center mb-[10px] md:ml-[0] ml-[16px] rounded-[50%] w-[48px]"
                      size="xlIcn"
                      variant="icbFillGray51"
                    >
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="h-[20px]"
                        alt="overflowmenu"
                      />
                    </Button>
                  </div>
                  <Line className="bg-indigo_51 h-[1px] mt-[24px] w-[100%]" />
                  <div className="flex flex-col items-start justify-start mt-[31px] md:w-[100%] w-[92%]">
                    <div className="flex flex-col pt-[4px] relative w-[50%]">
                      <div className="flex flex-col gap-[12px] justify-start mx-[auto] w-[100%]">
                        <Text
                          className="font-normal md:ml-[0] ml-[36px] not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Lee Ankar{" "}
                        </Text>
                        <div className="flex flex-row gap-[12px] items-start justify-between w-[100%]">
                          <Img
                            src="images/img_punktoyface1.png"
                            className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                            alt="PunkToyFaceOne Two"
                          />
                          <div className="bg-gray_51 flex items-start justify-end p-[16px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[auto]">
                            <Text
                              className="font-medium mt-[5px] text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Hey! Can i meet you for a sec?
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="bg-gray_51 border-[2px] border-solid border-white_A700 font-normal h-[28px] ml-[auto] mr-[11px] mt-[-10px] not-italic px-[6px] py-[5px] rounded-[50%] text-black_900 text-left w-[28px] z-[1]"
                        as="h5"
                        variant="h5"
                      >
                        😍
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-end justify-end ml-[auto] mt-[5px] md:w-[100%] w-[49%]">
                      <Input
                        className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                        wrapClassName="sm:w-[100%] w-[91%]"
                        name="Group Three"
                        placeholder="Hey! Can i meet you for a sec?"
                        shape="CustomBorderBL4"
                        size="4xl"
                        variant="FillDeeporange3006c"
                      ></Input>
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="h-[20px] mt-[36px] w-[20px]"
                        alt="checkmark"
                      />
                    </div>
                    <div className="flex flex-row gap-[8px] items-end justify-end ml-[auto] mt-[16px] md:w-[100%] w-[49%]">
                      <div className="bg-gray_51 flex flex-col gap-[16px] items-start justify-start p-[16px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[91%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[133px] items-end justify-end p-[8px] rounded-[8px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group16066.png')",
                          }}
                        >
                          <Button
                            className="cursor-pointer font-medium min-w-[41px] mt-[92px] text-[12px] text-center text-white_A700 w-[auto]"
                            shape="RoundedBorder10"
                            size="md"
                            variant="FillBlack90066"
                          >
                            1:00
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-semibold text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            ☕️ Life Style Coffee
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_401 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            8350 Melrose Ave, Los Angeles
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="h-[20px] mt-[215px] w-[20px]"
                        alt="checkmark One"
                      />
                    </div>
                    <div className="bg-gray_51 flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[105px] p-[9px] rounded-[4px] w-[100%]">
                      <Input
                        className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                        wrapClassName="md:ml-[0] md:w-[100%] ml-[4px] sm:ml-[0] sm:w-[100%] w-[75%]"
                        name="frame3801"
                        placeholder="Enter message..."
                        size="sm"
                        variant="FillGray51"
                      ></Input>
                      <Img
                        src="images/img_share.svg"
                        className="h-[24px] md:ml-[0] ml-[17px] w-[24px]"
                        alt="share"
                      />
                      <Img
                        src="images/img_link.svg"
                        className="h-[24px] md:ml-[0] ml-[24px] w-[24px]"
                        alt="link"
                      />
                      <Img
                        src="images/img_plus_1.svg"
                        className="h-[24px] md:ml-[0] ml-[24px] w-[24px]"
                        alt="plus"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="absolute flex flex-col font-inter md:hidden justify-start left-[0] top-[0] w-[17%]">
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
                      src="images/img_menu.svg"
                      className="h-[20px] mb-[2px] w-[20px]"
                      alt="menu"
                    />
                    <Text
                      className="font-medium mt-[5px] text-bluegray_900 text-left w-[auto]"
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
        </div>
      </div>
    </>
  );
};

export default ConversationPage;
