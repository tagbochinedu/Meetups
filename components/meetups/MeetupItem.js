import {useRouter} from "next/router";
import Card from "../ui/Card";

function MeetupItem(props) {
const router = useRouter()

const detailsPageHandler = ()=>{
  router.push(`/${props.id}`)
}


  return (
    <li className="my-4 mx-auto max-w-xl">
      <Card>
        <div className="w-full h-80 overflow-hidden rounded-t-md ">
          <img src={props.image} alt={props.title} className="object-cover" />
        </div>
        <div className="text-center">
          <h3 className="text-[#2c292b] text-xl">{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className="p-6 text-center">
          <button
            className="font-inherit cursor-pointer text-[#77002e] border border-solid border-[#77002e] bg-transparent py-2 px-6 rounded hover:bg-[#ffe2ed] active:bg-[#ffe2ed]"
            onClick={detailsPageHandler}
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
