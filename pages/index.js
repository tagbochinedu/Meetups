import MeetupList from "../components/meetups/MeetupList";


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


const Home = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

//USED TO PRE-RENDER ON THE SERVER INSTEAD. ADVANTAGEOUS WHEN REQUESTS ARE EXPECTED FREQUENTLY
// export async function getServerSideProps(context) {
//   req = context.req;
//   res = context.res;
//   //FETCH API DATA HERE

//   return { props: { meetups: DUMMY_DATA } };
// }

//USED TO PRE-RENDER ONCE DURING PRODUCTION BUILD. ADVANTAGEOUS WHEN REQUESTS ARE NOT EXPECTED FREQUENTLY. THE REVALIDATE KEY SETS A TIME IN SECONDS TAKEN FOR THE PAGE TO RE-RENDER AFTER A NEW REQUEST IS SENT. IF ABSENT THEN NO NEW REQUESTS ARE MADE AND THE PAGE REMAINS STATIC. THUS THE NAME
export async function getStaticProps() {
  //FETCH API DATA HERE

  return { props: { meetups: DUMMY_DATA }, revalidate: 10 };
}

export default Home;
