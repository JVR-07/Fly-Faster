//Dependiences
import { FaChartPie, FaUserTie, FaUserFriends } from 'react-icons/fa';
import { RiFlightTakeoffLine, RiAccountCircleFill } from "react-icons/ri";
import { IoIosAirplane } from "react-icons/io";
import { TbBuildingAirport } from "react-icons/tb";

import { useState } from 'react';

//style
import './sidebar.css'

function Sidebar() {

    const [activeTab, setActiveTab] = useState('Dashboard')

    return (
        <>
            <nav className="side-container">
                <div className='logo-container'>
                    <img className='logo' src='/vite.svg' />
                </div>
                <ul className='side-item'>
                    <li className={activeTab === 'Dashboard' ? 'active-tab' : ''}><FaChartPie className='side-icon' />Dashboard</li>
                    <li><RiFlightTakeoffLine className='side-icon' />Flight</li>
                    <li><FaUserTie className='side-icon' />Pilots</li>
                    <li><IoIosAirplane className='side-icon' />Airplanes</li>
                    <li><FaUserFriends className='side-icon' />Crew</li>
                    <li><TbBuildingAirport className='side-icon' />Airports</li>
                </ul>
                <div className='side-item bottom-item'>
                    <li><RiAccountCircleFill className='side-icon' /><a>Account</a></li>
                </div>
            </nav>
        </>
    )
}

export default Sidebar