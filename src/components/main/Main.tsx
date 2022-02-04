import * as React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Carousel } from "react-carousel-minimal";
import "./Main.css";
import Images from "../../Images";

const Main = () => {
   return (
      <main className="main grid border-secondary">
         <h1 className="welcome text-xl centered justify-start secondary">
            Welcome!
         </h1>
         <div className="links grid primary">
            <a
               className="justify-start primary"
               href="https://github.com/temetvince/Resume/blob/master/EmmettCaseyResume.pdf"
            >
               Emmett&apos;s
               <br />
               Resume
            </a>
            <a
               className="justify-center text-center primary"
               href="https://github.com/temetvince"
            >
               GitHub
               <br />
               Repos
            </a>
            <a
               className="justify-end primary"
               href="https://www.youtube.com/channel/UCw7tARIJee8gd1OpeSjAEMw"
            >
               YouTube
               <br />
               Channel
            </a>
         </div>
         <div className="secondary grid centered text-justify">
            I&apos;m a software engineer with a myriad of hobbies... most
            recently I&apos;ve focused on Ham radio. I live on Grand Lake in
            Oklahoma, where I&apos;m a proud member of the Sons of the Legion
            and volunteer for the Grove Veterans Ritual Team. I spend a lot of
            time fishing with my grandfather, enjoy playing music, totally dig
            saltwater aquariums, and avoid gluten at all costs! :D
         </div>
         <div className="grid centered">
            <Carousel
               data={Images}
               time={4000}
               width="100%"
               height="50vh"
               radius="10px"
               slideNumber={false}
               captionPosition="bottom"
               automatic={true}
               dots={false}
               pauseIconColor="white"
               pauseIconSize="40px"
               slideBackgroundColor="darkgrey"
               slideImageFit="cover"
               thumbnails={false}
               thumbnailWidth="100px"
               showNavBtn={false}
               style={{
                  textAlign: "center",
                  margin: "auto",
               }}
            />
         </div>
         <div className="secondary grid centered text-justify">
            I&apos;m a bit of a science fiction nut and am the author of two
            major mods for the space sim X3:AP by German game producer Egosoft:
            Alaankwa and Star Wars Mayhem 2. I also helped build the foundation
            for Star Wars Mayhem 3. You can find the links for all three on my
            GitHub.
         </div>
      </main>
   );
};

export default Main;
