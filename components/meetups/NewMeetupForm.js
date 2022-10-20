import { useRef } from "react";

import Card from "../ui/Card";


function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card className="max-w-2xl mx-auto mt-20">
      <form className="p-4" onSubmit={submitHandler}>
        <div className="mb-2">
          <label htmlFor="title" className="block font-bold mb-2">
            Meetup Title
          </label>
          <input
            type="text"
            required
            id="title"
            className="block rounded border border-solid border-[#ccc] p-1 w-full"
            ref={titleInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="image" className="block font-bold mb-2">
            Meetup Image
          </label>
          <input
            type="url"
            required
            id="image"
            className="block rounded border border-solid border-[#ccc] p-1 w-full"
            ref={imageInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="address" className="block font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            required
            id="address"
            className="block rounded border border-solid border-[#ccc] p-1 w-full"
            ref={addressInputRef}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="block font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            required
            rows="5"
            className="block rounded border border-solid border-[#ccc] p-1 w-full"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className="mt-4 text-right">
          <button className="cursor-pointer bg-[#77002e] text-white py-2 px-6 border border-[#77002e] rounded font-bold hover:bg-[#a50e48] hover:border-[#a50e48] active:bg-[#a50e48] active:border-[#a50e48]">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
