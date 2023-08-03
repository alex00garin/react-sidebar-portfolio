import React from 'react';
import './Sidebar.css'; // Make sure to import your CSS file

const Sidebar = () => {
  return (
      <div className="sidebar">
        <a href="#page-00">
          <span className='text-2xl font-outfit font-extrabold text-dark-gr sm:text-3xl '>00</span>
        </a>
        <a href="#page-01">
          <span className='text-2xl font-outfit font-extrabold text-dark-gr sm:text-3xl '>01</span>
        </a>
        <a href="#page-02">
          <span className='text-2xl font-outfit font-extrabold text-dark-gr sm:text-3xl '>02</span>
        </a>
        <a id='link3' href="#page-03">
          <span className='text-2xl font-outfit font-extrabold text-dark-gr sm:text-3xl '>03</span>
        </a>
      </div>
  );
};

export default Sidebar;
