import React from "react";
import { CheckBox } from "components";

export default {
  title: "adiflow_prototype1/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  label: "Checkbox",
  variant: "OutlineBluegray40087",
  size: "sm",
  inputClassName: "mr-1",
};
