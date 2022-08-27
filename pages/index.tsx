import type { NextPage } from "next";

import { Button } from "@/components";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Button onClick={() => alert('button clicked')}>I am a button</Button>
    </div>
  );
};

export default Home;
