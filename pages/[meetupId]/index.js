const MeetUpDetails = () => {
  return (
    <section className="max-w-2xl">
      <img src="https://www.planetware.com/wpimages/2019/09/seychelles-in-pictures-most-beautiful-places-to-visit-snorkeling-seychelles.jpg" alt="bye" className="" />
      <div>
        <h3></h3>
        <h4></h4>
        <p></p>
      </div>
    </section>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetUpData: {
        img: "https://www.planetware.com/wpimages/2019/09/seychelles-in-pictures-most-beautiful-places-to-visit-snorkeling-seychelles.jpg",
        id: meetupId,
        title: "A swim in Seychelles",
        address: "No 12 Seychelles Str, Seychelles",
        description: "Let's Go Swimming",
      },
    },
  };
}

export default MeetUpDetails;
