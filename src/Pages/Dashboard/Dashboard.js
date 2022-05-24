import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content m-2">
                <h2 className='text-3xl text-purple-500 mb-3'>Welcome to Your Dashboard</h2>
                <Outlet />

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* Sidebar content here  */}
                    <li><Link to="/dashboard">My Appointment</Link></li>
                    <li><Link to="/dashboard/review">Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;