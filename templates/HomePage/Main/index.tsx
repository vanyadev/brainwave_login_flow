import { NewsFeed } from "@/components/NewsFeed";
import Post from "@/components/SocialsPost/Post";
import { useGlobalContext } from "context";

type MainProps = {};

const Main = ({}: MainProps) => {
  const { userName, email } = useGlobalContext();

  return (
    <div className="p-6  mx-auto w-full overflow-auto ">
      <div>
        Logged In As User: <span className="font-bold	">{userName}</span>
      </div>

      <div className="mt-5 ">
        <NewsFeed />
      </div>
    </div>
  );
};

export default Main;
