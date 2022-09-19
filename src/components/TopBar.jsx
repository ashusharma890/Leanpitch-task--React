import React from 'react'

const TopBar = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src='https://media.discordapp.net/attachments/939793984786669664/1020317855629189260/productwhite.png' alt="" width="30" height="24" className="d-inline-block align-text-top" />
            LeanPitch
          </a>
          <div className=" text-align-right text-white" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item subs">
                  <a className="nav-link active" aria-current="page" href="/">Subscribe</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" href="/">Contact us</a>
                  </li>
              </ul>
        </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar