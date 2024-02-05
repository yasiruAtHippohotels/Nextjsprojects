import Card from "@/components/card";
import Link from "next/link";
import React from "react";

function Notification() {
  return (
    <Card>
      <div>Notification</div>
      <Link href="/complex-dashborad/archived">Archived</Link>
    </Card>
  );
}

export default Notification;
