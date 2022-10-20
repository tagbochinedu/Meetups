import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const MeetUpHandler = (meetUpData) => {
    console.log(meetUpData);
  };
  return <NewMeetUpForm onAddMeetup={MeetUpHandler} />;
};

export default NewMeetUp;
