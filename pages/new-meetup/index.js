import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
   async function MeetUpHandler(meetUpData) {
    console.log("hello");
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      header: { "Content-Type": "application/json" },
    });
    const result = await response.json();

    console.log(result);
  };
  return <NewMeetUpForm onAddMeetup={MeetUpHandler} />;
};

export default NewMeetUp;
