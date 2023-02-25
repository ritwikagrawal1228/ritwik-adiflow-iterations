import React from "react";

import { SelectBox } from "components";

export default {
  title: "adiflow_prototype1/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder4",
  variant: "OutlineIndigo51_1",
  size: "xl",
  className: "w-[300px]",
};
