import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const userDashboard = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return <div>user Dashboard {session?.user?.name}</div>;
};

export default userDashboard;
