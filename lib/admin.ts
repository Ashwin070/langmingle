import { auth } from "@clerk/nextjs";

const adminIds = ["user_2p9OqkPYR8Bj5ln3m7peZR36iYQ"];

export const isAdmin =  () => {
  const { userId } =  auth();
  if (!userId) {
    return false;
  }
  return adminIds.indexOf(userId) !== -1;
};
