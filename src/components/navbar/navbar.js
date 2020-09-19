import React from "react"
import "./navbar.scss"

import profile from "../../assets/profile.jpeg"
import setting from "../../assets/icons/settings.svg"
import notification from "../../assets/icons/notifications.svg"

import useScrollDetect from "../../services/useScrollDetect"

const NavBar = () =>{
    const {shadow} = useScrollDetect()
    return(
        <nav className={shadow ? "shadow" : null}>
            <div className="nav-bar">
                <div className="burger-icon">
                    &#9776;
                </div>
                <div className="icons">
                    <div>
                        <p>&#128270;</p>
                    </div>
                    <div>
                       <img src={notification} />
                    </div>
                    <div>
                    <img src={setting} />
                    </div>
                    <div className="profile">
                        <img  src={profile}/>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default NavBar