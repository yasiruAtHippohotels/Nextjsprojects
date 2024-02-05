import Card from "@/components/card";
import Link from "next/link";
import React from "react";

function ArchivedNotification() {
  return (
    <Card>
      <div>ArchivedNotification</div>
      <Link href="/complex-dashborad">Default</Link>
    </Card>
  );
}

export default ArchivedNotification;
