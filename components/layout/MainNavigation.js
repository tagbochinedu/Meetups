import Link from 'next/link'

function MainNavigation() {
  return (
    <header className="w-full h-20 flex items-center justify-between bg-[#77002e] py-0 px-[10%]">
      <div className="text-3xl text-white font-bold">React Meetups</div>
      <nav>
        <ul className="m-0 p-0 flex items-baseline list-none">
          <li className="ml-12 text-[#fcb8d2] text-2xl hover:text-white active:text-white">
            <Link
              href="/"
              className="no-underline"
            >
              All Meetups
            </Link>
          </li>
          <li className="ml-12 text-[#fcb8d2] text-2xl hover:text-white active:text-white">
            <Link
              href="/new-meetup"
              className="no-underline"
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
