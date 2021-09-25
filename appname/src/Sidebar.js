import React from 'react'

import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material';
import { SearchOutlined } from '@material-ui/icons';



function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">

                
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <SearchOutlined/>
                <input placeholder="Search" type="text"/>

            </div>
            <div className="sidebar__chats"></div>        
            </div>
    )
}



export default Sidebar
