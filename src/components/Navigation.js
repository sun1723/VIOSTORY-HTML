import React from 'react' ;
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers,faMicrophone,faBookmark,faUser,faCog} from '@fortawesome/free-solid-svg-icons';

//import css files
import '../style/navigator.css';

const tabs = [{
     route: "/home",
     icon: faUsers,
     label: "voiStory"
},
{
     route: "/share",
     icon: faMicrophone,
     label: "記錄分享"
},
{
     route: "/saved",
     icon: faBookmark,
     label: "收藏"
},
{
     route: "/friends",
     icon: faUser,
     label: "好友"
},
{
     route: "/setting",
     icon: faCog,
     label: "設置"
}
]

const Navigation = (props) => {
     return (
         <div >
           {/* Bottom Tab Navigator*/}
           <nav className="navbar fixed-bottom navbar-light nav " role="navigation">
             <Nav className="w-100">
               <div className=" d-flex flex-row justify-content-around w-100">
                 {
                   tabs.map((tab, index) =>(
                     <NavItem key={`tab-${index}`}>
                       <NavLink to={tab.route} className="nav-link" activeClassName="active"  >
                         <div className="row d-flex flex-column justify-content-center align-items-center nav-item">
                           <FontAwesomeIcon size="lg" icon={tab.icon} />
                           <div>{tab.label}</div>
                         </div>
                       </NavLink>
                     </NavItem>
                   ))
                 }
               </div>
             </Nav>
           </nav>
         </div>
     )
};

export default Navigation;