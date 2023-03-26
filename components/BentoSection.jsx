import React from "react";
import BentoCellVideo from "../public/videos/h2chip.mp4";

function BentoSection() {
  return (
    <div
      id="bento-section"
      className="w-full lg:h-[70vh] h-[95vh] flex lg:flex-row flex-col  relative border-y border-y-[#424344]"
    >
      <div className="lg:w-1/2 w-full   h-full flex  items-center justify-center lg:p-32 lg:border-r border-b lg:border-r-[#424344] border-b-[#424344]">
        <video
          muted
          autoPlay
          src={BentoCellVideo}
          className="bento-cell-video"
        ></video>
      </div>
      <div className="lg:w-1/2 w-full  h-full flex items-center justify-center lg:px-24 px-8 ">
        <h1 className="lg:text-3xl text-2xl text-[#6E6F72]">
          <span className="text-white">The brand-new H2 chip</span> carries out
          more functions than ever, using{" "}
          <span className="text-green">computational algorithms</span> to
          deliver even smarter noise cancellation, superior three-dimensional
          sound, and more efficient battery life — all at once.
        </h1>
      </div>
    </div>
  );
}

export default BentoSection;
