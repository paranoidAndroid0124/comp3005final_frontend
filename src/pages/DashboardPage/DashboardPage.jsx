import React from 'react'
import { Navbar, AdminDashboard, MemberDashboard, TrainerDashboard } from "../../components";

const DashboardPage = () => {
    // TODO: logic to fetch user role
    const userRoleId = localStorage.getItem("roleId");
    console.log("userRoleId: ", userRoleId);
    // Determines which dashboard to render based on the role
    const renderDashboard = () => {
        switch (userRoleId) {
            case '1':
                // admin
                return <AdminDashboard />;
            case '2':
                // member
                return <MemberDashboard />;
            case '3':
                // trainer
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