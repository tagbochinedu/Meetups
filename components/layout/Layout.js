import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className='mx-auto my-12 w-[90%] max-w-[640px]'>{props.children}</main>
    </div>
  );
}

export default Layout;
