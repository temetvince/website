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
   display: "grid",
   gridTemplateRows: "repeat(5, auto)",
   padding: spacing + px,
   alignItems: "center",
   textAlign: "justify"
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
               <div style={{ ...border, ...padding, ...content, ...flexItem }}>
                  <h4>Emmett Casey</h4>
                  <img
                     src={"profilepic.jpeg"}
                     style={{
                        width: "143px",
                        height: "110px",
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
                  mainText={<Text text={"KI5SPL"} element={TextElements.h5} />}
                  subText={
                     <Text text={"Ham Callsign"} element={TextElements.div} />
                  }
               />

               <Card
                  cssStyle={{ ...border, ...flexItem, ...padding }}
                  mainText={<Text text={"WROI825"} element={TextElements.h5} />}
                  subText={
                     <Text text={"GMRS Callsign"} element={TextElements.div} />
                  }
               />
            </div>

            <div style={{ ...main, ...borderOrange }}>
               <div style={{ display: "grid", 
               gridTemplateColumns: "max-content auto",
               columnGap: spacing + px }}>
                  <Text
                  text={"Welcome!"}
                  element={TextElements.h1}
                  cssStyle={{ justifySelf: "start", alignSelf: "center", ...textOrange, marginBottom: "0px" }}
               />
               <iframe
                  src="https://duckduckgo.com/search.html?width=125&prefill=Duck Duck Go&focus=yes"
                  style={{ justifySelf: "end", alignSelf: "center", height: "39px", width: "183px" }}
               />
               </div>
               <div style={{ 
                     display: "grid",
   gridTemplateColumns: "repeat(3, 1fr)",
   alignItems: "center",
   ...textBlue,
   }}>
                  <a style={{ justifySelf: "begin" }} href="https://github.com/temetvince/Resume/blob/master/EmmettCaseyResume.pdf">Emmett&apos;s Resume</a>
                  <a style={{ justifySelf: "center" }} href="https://github.com/temetvince">GitHub Repos</a>
                  <a style={{ justifySelf: "end" }} href="https://www.youtube.com/channel/UCw7tARIJee8gd1OpeSjAEMw">YouTube Channel</a>
                  </div>
               <Text
                  text={"I'm a software engineer with a myriad of hobbies... most recently I've focused on Ham radio. I live on Grand Lake in Oklahoma, where I'm a proud member of the Sons of the Legion and volunteer for the Grove Veterans Ritual Team. I spend a lot of time fishing with my grandfather, enjoy playing music, totally dig saltwater aquariums, and avoid gluten at all costs! :D"}
                  element={TextElements.div}
                  cssStyle={textOrange}
                  />
                  <UncontrolledCarousel
                  items={[
                     {
src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
                     }
                  ]}></UncontrolledCarousel>
                  <Text
                  text={"I'm a bit of a science fiction nut and am the author of two major mods for the space sim X3:AP by German game producer Egosoft: Alaankwa and Star Wars Mayhem 2. I also helped build the foundation for Star Wars Mayhem 3. You can find the links for all three on my GitHub."}
                  element={TextElements.div}
                  cssStyle={textOrange}
                  />
            </div>
         </div>
      );
   }
}

export default UrlPage;
