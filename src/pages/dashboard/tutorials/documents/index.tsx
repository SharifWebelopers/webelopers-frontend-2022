import React from "react";
import DashboardLayout from "../../../../components/DashboardLayout";
import DocumentTutorialsLayout from "../../../../components/DocumentTutorialsLayout";
import documentTutorialData from "../../../../data/documentTutorialData";

function Tutorials() {
  return (
    <div>
      <DashboardLayout>
        <DocumentTutorialsLayout data={documentTutorialData} />
      </DashboardLayout>
    </div>
  );
}

export default Tutorials;
