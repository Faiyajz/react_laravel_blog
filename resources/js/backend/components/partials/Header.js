import React from 'react';

const Header = (props) => {
    return (
        <header className="main-header">
            <a href="#" className="logo">
                <span className="logo-mini"><b>F-</b>BLOG</span>
                <span className="logo-lg"><b>F-</b>BLOG</span>
            </a>
            <nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>

                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">

                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="assets/backend/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                                <span className="hidden-xs">Md. Faiyaj Zaman</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <img src="assets/backend/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />

                                    <p>
                                        Md. Faiyaj Zaman - Software Engineer
                                        <small>Member since Nov. 2016</small>
                                    </p>
                                </li>
                                <li className="user-body">

                                </li>
                                <li className="user-footer">
                                    <div className="pull-left">
                                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                                    </div>
                                    <div className="pull-right">
                                        <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
