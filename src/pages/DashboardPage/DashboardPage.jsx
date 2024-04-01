import React from 'react'
import { Navbar, AdminDashboard, MemberDashboard, TrainerDashboard } from "../../components";
// import { AdminDashboard } from "../../components/dashboard"

const DashboardPage = () => {
    // TODO: logic to fetch user role
    const userRole = 'member';

    // Determines which dashboard to render based on the role
    const renderDashboard = () => {
        switch (userRole) {
            case 'admin':
                return <AdminDashboard />;
            case 'member':
                return <MemberDashboard />;
            case 'trainer':
                return <TrainerDashboard />;
            default:
                return <div>No dashboard available for your role</div>;
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            {renderDashboard()}
        </div>
    )
}

export default DashboardPage