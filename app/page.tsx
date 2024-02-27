import { Navbar } from "./components/Navbar";
import { gerCurrentUser } from "./lib/sessions";

export default async function Home() {
  const user = await gerCurrentUser();
  // console.log(user);

  return (
    <div className="px-5 max-w-[1200px] mx-auto">
      <Navbar />
    </div>
  );
}
