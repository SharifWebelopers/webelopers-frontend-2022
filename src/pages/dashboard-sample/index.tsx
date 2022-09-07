import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import ScoreReport from "../../components/ScoreReport";

function DashboardSamplePage() {
  return (
    <div>
      <DashboardLayout>
        <div style={{ padding: 32, color: "#fff" }}>سلام و درود</div>
        <ScoreReport />
      </DashboardLayout>
    </div>
  );
}

export default DashboardSamplePage;
