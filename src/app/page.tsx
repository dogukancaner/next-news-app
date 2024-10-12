import HomepageContainer from "@/components/HomepageContainer";

import { getNewsData } from "@/lib/getNewsData";

const Homepage = async () => {
  const data = await getNewsData();

  return (
    <div>
      <HomepageContainer data={data} />
    </div>
  );
};

export default Homepage;
