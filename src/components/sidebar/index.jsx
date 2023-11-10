import sidebar from "../../assets/img/sidebar.jpg"
import './index.css'
import { Button } from "react-bootstrap";

function Sidebar() {

    return ( 
        <div className="sidebar"
        style={{
            position: "fixed",
            height: "100%",
            width: "600px",
            backgroundImage: `url(${sidebar})`,
            right: 0,
            zIndex: 10,
            overflowX: "hidden",
            transition: "0.5s",
        }}>
                <ul className="sidebar-content d-block">
                    <li className="sidebar-item"><a>리딩타임이란</a></li>
                    <li  className="sidebar-item"><a >수업후기</a></li>
                    <li  className="sidebar-item"><a >무료체험 신청</a></li>
                    <li  className="sidebar-item"><a >이용권 구매</a></li>
                    <li  className="sidebar-item"><a >고객센터</a></li>
                    <li  style={{
                        paddingTop: "40px",
                        display: "flex",
                       }}>
                            <Button variant="outline-light" className='rounded-pill me-2' >Login</Button>
                            <Button variant="outline-light" className='rounded-pill' >Join us</Button>
                    </li>
                </ul>
        </div>
     );
}

export default Sidebar;