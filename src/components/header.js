import React from 'react';
//css files
import '../style/header.css';
const Header = () => {
     return (
          <div>
               <nav role="navigation" aria-label = "back" className="header">
                    this is a header
                    <Header>返回</Header>      
               </nav>
          </div>
     )
}

export default Header;
