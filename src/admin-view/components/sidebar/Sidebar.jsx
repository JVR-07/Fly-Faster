//Dependiences
import { FaChartPie, FaUserTie, FaUserFriends } from 'react-icons/fa';
import { RiFlightTakeoffLine, RiAccountCircleFill } from "react-icons/ri";
import { IoIosAirplane } from "react-icons/io";
import { TbBuildingAirport } from "react-icons/tb";

//style
import './sidebar.css'

function Sidebar() {
    return (
        <>
            <nav className="side-container">
                <img src='/vite.svg' />
                <ul>
                    <li><FaChartPie/>Dashboard</li>
                    <li><RiFlightTakeoffLine/>Flight</li>
                    <li><FaUserTie/>Pilots</li>
                    <li><IoIosAirplane/>Airplanes</li>
                    <li><FaUserFriends/>Crew</li>
                    <li><TbBuildingAirport/>Airports</li>
                </ul>
                <RiAccountCircleFill/><a>Account</a>
            </nav>
        </>
    )
}

export default Sidebar