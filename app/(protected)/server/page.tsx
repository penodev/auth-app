import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/session";

const ServerPage = async () => {
  const user = await currentUser();
  return <UserInfo user={user} label='💻 Server component' />;
};

export default ServerPage;
