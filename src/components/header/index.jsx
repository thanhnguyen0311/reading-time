import Logo from '../../assets/img/header-logo.png'
import UseAnimations from "react-useanimations";
import menu3 from "react-useanimations/lib/menu3"
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleSidebarButton } from '../../features/toggleSidebar';

function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleSidebarButton())
    }

    return (  
        <div className="nav-header"
            style={{
                paddingTop: "10px",
                paddingLeft: "100px",
                paddingRight: "100px",
                height: "100px",
                width: "100%",
                position: "fixed",
                top: 0,
                display: 'flex',
                zIndex: '5',
                background: 'white',
                justifyContent: "space-between",
                alignItems:"center"
            }}>
            <img 
                src={Logo}
                style={{
                    width: "200px",
                    height: "50px"
            }}
                />
            <div className='d-flex'
            style={{
                width: "50%",
                justifyContent: "space-around",
            }}>
                <a>리딩타임이란</a>
                <a>수업후기</a>
                <a>무료체험 신청</a>
                <a>이용권 구매</a>
                <a>고객센터</a>
            </div>  
            <div className='d-flex' style={{justifyContent: "space-around", width: "200px", height: "40px"}}>
                <Button  variant="outline-primary" className='rounded-pill' > 
                     Login
                </Button>
                <Button className='rounded-pill'>
                    Join us
                </Button>
                <div
                    style={{cursor: "pointer",
                    zIndex: 1000}}>
                <UseAnimations 
                    animation={menu3} 
                    size={40}
                    reversed={false}
                    onClick={handleClick}
                    />
                </div>

            </div>
        </div>
    );
}

export default Header;