import NewTicketLayout from "../../../../components/Tickets/NewTicket";
import React from "react";
import DashboardLayout from "../../../../components/DashboardLayout";

function TicketsPage() {
  return (
    <div>
      <DashboardLayout>
        <NewTicketLayout/>
      </DashboardLayout>
    </div>
  );
}

export default TicketsPage;
