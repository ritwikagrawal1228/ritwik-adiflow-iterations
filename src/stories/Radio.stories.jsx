import React from "react";
import { Radio } from "components";

export default {
  title: "adiflow_prototype1/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  variant: "FillGreen700_1",
  size: "md",
  inputClassName: "mr-1",
};
