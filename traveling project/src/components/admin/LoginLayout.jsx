import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet /> {/* This renders the current page */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default LoginLayout;



//            https://www.youtube.com/watch?v=cH3uFRPE1pg&list=PL8p2I9GklV463WUKdVzUZ17IDZ3SwoSTu&index=19&ab_channel=CodeStepByStep