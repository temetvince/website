import React, { CSSProperties } from "react";

export interface CardProps {
   mainText: JSX.Element;
   subText?: JSX.Element;
   cssStyle?: CSSProperties;
}

class Card extends React.Component<CardProps> {
   style: CSSProperties = {};

   constructor(props: CardProps) {
      super(props);

      this.style.display = "flex";
      this.style.flexDirection = "column";
      this.style.justifyContent = "center";
      this.style.alignContent = "center";
   }

   render(): JSX.Element {
      return (
         <div style={{ ...this.style, ...this.props.cssStyle }}>
            {this.props.mainText}
            {this.props.subText}
         </div>
      );
   }
}

export default Card;
