import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const MeetUpHandler = async (meetUpData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      header: { "Content-type": "application/json" },
    });
    const result = await response.json();
    console.log('hello')
    console.log(result);
  };
  return <NewMeetUpForm onAddMeetup={MeetUpHandler} />;
};

export default NewMeetUp;
