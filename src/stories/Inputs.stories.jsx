import React from "react";

import { Input } from "components";

export default {
  title: "adiflow_prototype1/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder4",
  variant: "OutlineIndigo51",
  size: "2xl",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
