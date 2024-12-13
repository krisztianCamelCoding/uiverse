import React from "react";
import { Preview as StorybookPreview } from "@storybook/react";
import { Uiverse } from "../uiverse/utils";

const Preview: StorybookPreview = {
  decorators: [
    (Story, { parameters }) => {
      return (
        <Uiverse config={parameters?.config}>
          <Story />
        </Uiverse>
      );
    },
  ],
};

export default Preview;
