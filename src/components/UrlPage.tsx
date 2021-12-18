import * as React from "react";
import { CSSProperties } from "react";
import Colors from "../Colors";
import Card from "./card/Card";
import Text, { TextElements } from "./text/Text";
import { UncontrolledCarousel } from "reactstrap";

const px = "px";
const spacing = 20;
const borderWidth = "5px";
const borderRadius = "20px";

const padding: CSSProperties = {
   padding: spacing + px,
};

const flexContainer: CSSProperties = {
   display: "grid",
   gridTemplateRows: "max-content repeat(4, 1fr)",
   rowGap: spacing + px,
};

const flexItem: CSSProperties = {
   display: "grid",
   justifyItems: "center",
   alignItems: "center",
   backgroundColor: Colors.Hex.VeryDarkGrey,
   color: Colors.Hex.Orange,
   minHeight: 5 * 2 + 39 + spacing * 2 + px,
};

const textOrange: CSSProperties = {
   color: Colors.Hex.Orange,
};

const textBlue: CSSProperties = {
   color: Colors.Hex.Blue,
};

const fullHeight: CSSProperties = {
   height: "100%",
};

const marginTopBottom: CSSProperties = {
   marginTop: spacing + 5 + px,
   marginBottom: spacing + 5 + px,
};

const border: CSSProperties = {
   border: `${borderWidth} solid ${Colors.Hex.Blue}`,
   borderRadius: borderRadius,
};

const borderOrange: CSSProperties = {
   border: `${borderWidth} solid ${Colors.Hex.Orange}`,
   borderRadius: borderRadius,
};

const main: CSSProperties = {
   padding: spacing + px,
};

const box: CSSProperties = {
   display: "flex",
   width: "100%",
   justifyContent: "center",
   justifyItems: "center",
   alignItems: "center",
   alignContent: "center",
   padding: spacing + px,
};

const content: CSSProperties = {
   height: "fit-content",
};

class UrlPage extends React.Component {
   render(): JSX.Element {
      return (
         <div
            style={{
               backgroundColor: Colors.Hex.VeryDarkGrey,
               display: "grid",
               gridTemplateColumns: "max-content 1fr",
               columnGap: spacing + px,
               padding: spacing + px,
               height: "100vh",
               color: "#222",
               fontSize: "1em",
               lineHeight: "1.4",
            }}
         >
            <div style={{ ...flexContainer }}>
               <div style={{ ...border, ...padding, ...content }}>
                  <h4>Emmett Casey</h4>
                  <img
                     src={"profilepic.jpeg"}
                     style={{
                        width: "133px",
                        height: "100px",
                        borderRadius: borderRadius,
                     }}
                  />
               </div>

               <Card
                  cssStyle={{ ...border, ...flexItem, ...padding }}
                  mainText={<Text text={"aatotem"} element={TextElements.h5} />}
                  subText={
                     <Text
                        text={"Miami-Peoria Name"}
                        element={TextElements.div}
                     />
                  }
               />

               <Card
                  cssStyle={{ ...border, ...flexItem, ...padding }}
                  mainText={
                     <Text text={"temetvince"} element={TextElements.h5} />
                  }
                  subText={
                     <Text text={"Online Handle"} element={TextElements.div} />
                  }
               />

               <Card
                  cssStyle={{ ...border, ...flexItem, ...padding }}
                  mainText={<Text text={"WPI025"} element={TextElements.h5} />}
                  subText={
                     <Text text={"Ham Callsign"} element={TextElements.div} />
                  }
               />

               <Card
                  cssStyle={{ ...border, ...flexItem, ...padding }}
                  mainText={<Text text={"WPI025"} element={TextElements.h5} />}
                  subText={
                     <Text text={"GMRS Callsign"} element={TextElements.div} />
                  }
               />
            </div>

            <div style={{ ...main, ...borderOrange }}>
               <iframe
                  src="https://duckduckgo.com/search.html?width=125&prefill=Duck Duck Go&focus=yes"
                  style={{ height: "39px" }}
               />
               <Text
                  text={"Welcome!"}
                  element={TextElements.h1}
                  cssStyle={textOrange}
               />
            </div>
         </div>
      );
   }
}

export default UrlPage;
