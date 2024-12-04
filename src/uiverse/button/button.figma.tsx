import { figma } from "@figma/code-connect";
import React from "react";
import Button from "./button.component";

figma.connect(
  Button,
  "https://www.figma.com/design/RnSf37vR6zLqJdwS6HK9dH/Community---PLAYGROUND?node-id=13039-15041&node-type=symbol&m=dev",
  {
    props: {
      buttonProps: {
        color: "primary",
        height: "48px",
      },
      children: "Button Text",
    },
    example: (props) => <Button>{props.children}</Button>,
  }
);
