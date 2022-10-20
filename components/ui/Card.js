
function Card(props) {
  return (
    <div
      className={`${"bg-white rounded-md shadow-gray-400 shadow-sm border"} ${
        props.className
      }`}
    >
      {props.children}
    </div>
  );
}

export default Card;
