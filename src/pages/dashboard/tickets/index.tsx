import TicketsLayout from "../../../components/Tickets";
import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";

function TicketsPage() {
  return (
    <div>
      <DashboardLayout>
        <TicketsLayout/>
      </DashboardLayout>
    </div>
  );
}

export default TicketsPage;
