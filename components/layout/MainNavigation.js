import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className="w-full h-20 flex items-center justify-between bg-[#77002e] py-0 px-[10%]">
      <div className="text-3xl text-white font-bold">React Meetups</div>
      <nav>
        <ul className="m-0 p-0 flex items-baseline list-none">
          <li className="ml-12">
            <Link
              to="/"
              className="text-2xl text-[#fcb8d2] no-underline hover:white active:white"
            >
              All Meetups
            </Link>
          </li>
          <li className="ml-12">
            <Link
              to="/new-meetup"
              className="text-2xl text-[#fcb8d2] no-underline hover:white active:white"
            >
              Add New Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
