import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const AdminContext = createContext();

export const useAdmin = () => {
    return useContext(AdminContext);
}

export const AdminProvider = ({ children }) => {
    const [isSidebarOpen, setIsSideBarOpen] = useState(false);

    const openSidebar = () => {
        setIsSideBarOpen(true);
    }

    const closeSidebar = () => {
        setIsSideBarOpen(false)
    }

    return (
        <AdminContext.Provider
            value={{
                isSidebarOpen,
                openSidebar,
                closeSidebar
            }}>
            {children}
        </AdminContext.Provider>
    )
}

AdminProvider.propTypes = {
    children: PropTypes.node.isRequired
};