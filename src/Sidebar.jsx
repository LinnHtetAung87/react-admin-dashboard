import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
    return (
        <div className='d-flex justify-content-between flex-column bg-dark text-white p-3'>
            <div>
                <a href=''>
                    <i className='bi bi-code-slash fs-4 me-4'></i>
                    <span className='fs-4'>Code With Linn Htet Aung</span>
                </a>
                <hr className='text-secondary' />
                <ul className='nav nav-pills flex-column'>
                    <li className='nav-item'>
                        <a href=''>
                            <i className='bi bi-speedometer2 me-3'></i>
                            <span><strong>Dashboard</strong></span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href=''>
                            <i className='bi bi-people me-3'></i>
                            <span><strong>User</strong></span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href=''>
                            <i className='bi bi-speedometer2 me-3'></i>
                            <span><strong>Dashboard</strong></span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href=''>
                            <i className='bi bi-speedometer2 me-3'></i>
                            <span><strong>Dashboard</strong></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar