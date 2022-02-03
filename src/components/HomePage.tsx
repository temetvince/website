import * as React from "react";
import { CSSProperties } from "react";
import Colors from "../Colors";
import Sidebar from "./aside/Sidebar";
import Main from "./main/Main";

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
   display: "grid",
   gridTemplateRows: "repeat(5, auto)",
   padding: spacing + px,
   alignItems: "center",
   textAlign: "justify",
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

class HomePage extends React.Component {
   render(): JSX.Element {
      return (
         <div
            style={{
               backgroundColor: Colors.Hex.VeryDarkGrey,
               display: "grid",
               gridTemplateColumns: "auto",
               justifyItems: "center",
               height: "100vh",
            }}
         >
            <div
               style={{
                  display: "grid",
                  gridTemplateColumns: "max-content 1fr",
                  columnGap: spacing + px,
                  padding: spacing + px,
                  color: "#222",
                  maxWidth: "1368px",
                  minWidth: "750px",
                  fontSize: "1em",
                  lineHeight: "1.4",
               }}
            >
               <Sidebar />
               <Main />
            </div>
         </div>
      );
   }
}

export default HomePage;
