import React from "react";
import DashboardLayout from "../../../../components/DashboardLayout";
import VideoTutorialsLayout from "../../../../components/VideoTutorialsLayout";
import videoTutorialData from "../../../../data/videoTutorialData";

function Tutorials() {
  return (
    <div>
      <DashboardLayout>
        <VideoTutorialsLayout data={videoTutorialData} />
      </DashboardLayout>
    </div>
  );
}

export default Tutorials;
