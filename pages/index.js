import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const Home = () => {
  const [loadedData, setLoadedData] = useState([]);
  const DUMMY_DATA = [
    {
      id: "m1",
      title: "A swim in Seychelles",
      image:
        "https://www.planetware.com/wpimages/2019/09/seychelles-in-pictures-most-beautiful-places-to-visit-snorkeling-seychelles.jpg",
      address: "No 12 Seychelles Str, Seychelles",
      description: "Let's Go Swimming",
    },
    {
      id: "m2",
      title: "Mountain Climbing in Nepal",
      image:
        "https://lp-cms-production.imgix.net/2021-12/shutterstockRF_667066843.jpg",
      address: "No 13 Nepal Str, Nepal",
      description: "Let's Go Mountain Climbing",
    },
    {
      id: "m3",
      title: "Sky Diving in Morocco",
      image: "https://oklahomaskydiving.com/wp-content/uploads/IMG_1166-1.jpg",
      address: "No 12 Morocco Str, Morocco",
      description: "Let's Go Sky Diving",
    },
  ];
  useEffect(() => {
    setLoadedData(DUMMY_DATA);
  }, []);

  return <MeetupList meetups={loadedData} />;
};

export default Home;
