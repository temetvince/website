import Card from "../card/Card";
import Text, { TextElements } from "../text/Text";
import * as React from "react";
import "../../Style.css";
import { CSSProperties } from "react";
import Colors from "../../Colors";
import Style from "../../Style";

const borderRadius = Style.borderRadius;
const borderWidth = Style.borderWidth;
const px = Style.px;
const spacing = Style.spacing;

const border: CSSProperties = {
   border: `${borderWidth} solid ${Colors.Hex.Blue}`,
   borderRadius: borderRadius,
};

const content: CSSProperties = {
   height: "fit-content",
};

const gridContainer: CSSProperties = {
   display: "grid",
   gridTemplateRows: "max-content repeat(4, 1fr)",
   rowGap: spacing + px,
};

const gridItem: CSSProperties = {
   display: "grid",
   justifyItems: "center",
   alignItems: "center",
   backgroundColor: Colors.Hex.VeryDarkGrey,
   color: Colors.Hex.Orange,
   minHeight: 5 * 2 + 39 + spacing * 2 + px,
};

const padding: CSSProperties = {
   padding: spacing + px,
};

const Sidebar = () => {
   return (
      <aside style={{ ...gridContainer }}>
         <div style={{ ...border, ...padding, ...content, ...gridItem }}>
            <h3>Emmett Casey</h3>
            <img
               src={"profilepic.jpeg"}
               style={{
                  marginTop: "10px",
                  width: "143px",
                  height: "110px",
                  borderRadius: borderRadius,
               }}
            />
         </div>

         <Card
            cssStyle={{ ...border, ...gridItem, ...padding }}
            mainText={<Text text={"aatotem"} element={TextElements.h3} />}
            subText={
               <Text text={"Miami-Peoria Name"} element={TextElements.div} />
            }
         />

         <Card
            cssStyle={{ ...border, ...gridItem, ...padding }}
            mainText={<Text text={"temetvince"} element={TextElements.h3} />}
            subText={<Text text={"Online Handle"} element={TextElements.div} />}
         />

         <Card
            cssStyle={{ ...border, ...gridItem, ...padding }}
            mainText={<Text text={"KI5SPL"} element={TextElements.h3} />}
            subText={<Text text={"Ham Callsign"} element={TextElements.div} />}
         />

         <Card
            cssStyle={{ ...border, ...gridItem, ...padding }}
            mainText={<Text text={"WROI825"} element={TextElements.h3} />}
            subText={<Text text={"GMRS Callsign"} element={TextElements.div} />}
         />
      </aside>
   );
};

export default Sidebar;
