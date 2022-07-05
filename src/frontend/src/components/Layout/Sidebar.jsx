import React from "react";
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent, } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHouse, faChartSimple, faTableCellsLarge, faBookmark} from '@fortawesome/free-solid-svg-icons'
import "./../../styles/sidebar.scss";

const Sidebar = (collapsed, toggled, handleToggleSidebar) => {
    return (
        <ProSidebar collapsed={collapsed}  toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar}>
            <SidebarHeader>
                <div
                style={{
                    padding: '24px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
                >
                Projeto Integrador
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FontAwesomeIcon icon={faHouse} />}> Início  <Link to="/" /> </MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faTableCellsLarge} />}> Matrizes   <Link to="/" /> </MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faChartSimple} />}> Gráficos   <Link to="/" /> </MenuItem>
                        <SubMenu
                        title={'Guardados'}
                        icon={<FontAwesomeIcon icon={faBookmark}/>}
                        >
                        <MenuItem>Matrizes</MenuItem>
                        <MenuItem>Gráficos</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter>
            <Menu iconShape="circle">
                    <MenuItem icon={<FontAwesomeIcon icon={faUser} />}> Utilizador  <Link to="/" /> </MenuItem>
            </Menu>
            </SidebarFooter>
        </ProSidebar>
    );
};


export default Sidebar;