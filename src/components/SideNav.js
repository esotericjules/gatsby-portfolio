import React from 'react';



const SideNav = () => {
  return (
    <aside className={"sidebar"}>
      <nav className="sidebar__nav">
        <ul>
          <li className="active"><a href="#">Welcome</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">The process</a></li>
          <li><a href="#">Get in touch</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;