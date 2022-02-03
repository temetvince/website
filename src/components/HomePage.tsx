import * as React from "react";
import Sidebar from "./aside/Sidebar";
import Main from "./main/Main";
import "./HomePage.css";

class HomePage extends React.Component {
   render(): JSX.Element {
      return (
         <div className="homepage-root">
            <div className="homepage-grid">
               <Sidebar />
               <Main />
            </div>
         </div>
      );
   }
}

export default HomePage;
