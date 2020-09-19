import React from "react"
import Sidebar from "./components/sidebar/sidebar"
import NavBar from "./components/navbar/navbar"
import Resources from "./components/content/resources"
import RightBar from "./components/content/rightbar"

const App = () => {
    return(
        <div>
            <Sidebar >
                <NavBar />
                <Resources />
                <RightBar />
            </Sidebar>
        </div>
    )
}

export default App