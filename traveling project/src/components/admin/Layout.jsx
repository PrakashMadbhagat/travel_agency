import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../css/Layout.module.css';
import Sidebar from '../../components/admin/Sidebar.jsx';
import Header from '../../components/admin/Header.jsx';
import Footer from "../../components/admin/Footer.jsx";

const AdminLayout = () => {
  return (
    <>
      <div className={styles.layoutWrapper}>
      <Sidebar />
      <div className={styles.layoutMain}>
        <Header />
        <div className={styles.outletContent}>
          <Outlet /> {/* Your routed page (Dashboard, Settings, etc.) will render here */}
        </div>
        <Footer />
      </div>
    </div>
    </>
  );
};

export default AdminLayout;



//            https://www.youtube.com/watch?v=cH3uFRPE1pg&list=PL8p2I9GklV463WUKdVzUZ17IDZ3SwoSTu&index=19&ab_channel=CodeStepByStep