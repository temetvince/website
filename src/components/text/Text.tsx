import React, { CSSProperties } from "react";

export enum TextElements {
   h1 = "h1",
   h2 = "h2",
   h3 = "h3",
   h4 = "h4",
   h5 = "h5",
   h6 = "h6",
   div = "div",
   span = "span",
}

export interface TextProps {
   text: string;
   element: TextElements;
   cssStyle?: CSSProperties;
}

const Text = (props: TextProps): JSX.Element => {
   return <props.element style={props.cssStyle}>{props.text}</props.element>;
};

export default Text;
