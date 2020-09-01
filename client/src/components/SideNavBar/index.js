import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

// import Logo from '../../images/android-chrome-192x192.png';
import './style.scss';
import sidebarBg from '../../images/ac512x512.png';

const sideNavBar = {
    background: 'none',
    height: '100vh',
    marginTop: '4.7%',
    float:'left',
};

// const inlineStyle2 = {
//     backgroundColor: 'white',
//     borderRight: '1px solid black',
// };

// const inlineStyle3 = {
//     background:'white',
//     borderRight: '1px solid black',
//     color: 'black',
//     // marginBottom:"100px",
// };

// const sideMenu = {
//     background:'white',
//     borderRight: '1px solid black',
//     color: 'black',
// };

// const sideNavHeader = {
//     borderRight: '1px solid black',
//     color: 'black',
//     height: '25%',
//     // marginBottom:"100px",
// };

// const imageStyle = {
//     height: '150px',
//     width: '150px',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     display: 'block',
// };

function SideNavBar({ image, collapsed, rtl, toggled, handleToggleSidebar }) {
  return (
    <div style={sideNavBar}>
      <ProSidebar image={image ? sidebarBg : false}
        rtl={rtl}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar} >
                {/* <SidebarHeader >
                    <Image style={imageStyle} src={Logo}></Image>

                </SidebarHeader>
                <SidebarContent >
                    <Menu > */}
                        {/* <SubMenu title="Components"> */}
                            {/* <MenuItem icon={Logo}> */}
                                {/* Dashboard
                      <Link to="/" />
                            </MenuItem> */}
                        {/* <MenuItem>Component 1</MenuItem>
                            <SubMenu title="Sub Component 1">
                               
                            </SubMenu> */}
                        {/* </SubMenu> */}
                    {/* </Menu>
                    <MenuItem>
                        Create New Base
                      <Link to="/" />
                    </MenuItem>
                    <MenuItem>
                        Create New Base
                    <Link to="/" />
                    </MenuItem>
                    <MenuItem>
                        Create New Base
                      <Link to="/" />
                    </MenuItem>
                </SidebarContent>
                <SidebarFooter>
                    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
     {/* <MenuItem>
                        Logout
  <Link to="/Login" />
                    </MenuItem>
                </SidebarFooter>
            </ProSidebar>  */}
        <SidebarHeader>
          <div
            style={{
              padding: '0 24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            Build-A-Base
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red"></span>}
            >Dashboard
              
            </MenuItem>
            <MenuItem icon={<FaGem />}> </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <SubMenu
              suffix={<span className="badge yellow">3</span>}
            
              icon={<FaRegLaughWink />}
            >
              <MenuItem> 1</MenuItem>
              <MenuItem> 2</MenuItem>
              <MenuItem> 3</MenuItem>
            </SubMenu>
            <SubMenu
              prefix={<span className="badge gray">3</span>}
              
              icon={<FaHeart />}
            >
              <MenuItem> 1</MenuItem>
              <MenuItem> 2</MenuItem>
              <MenuItem> 3</MenuItem>
            </SubMenu>
            <SubMenu  icon={<FaList />}>
              <MenuItem> 1 </MenuItem>
              <MenuItem> 2 </MenuItem>
              <SubMenu  >
                <MenuItem> 3.1 </MenuItem>
                <MenuItem> 3.2 </MenuItem>
                <SubMenu >
                  <MenuItem> 3.3.1 </MenuItem>
                  <MenuItem> 3.3.2 </MenuItem>
                  <MenuItem> 3.3.3 </MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
          <div className="sidebar-btn-wrapper">
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  )
};

export default SideNavBar;