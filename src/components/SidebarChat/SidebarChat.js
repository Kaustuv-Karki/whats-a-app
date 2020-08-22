import React, { useState, useEffect } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'

const SidebarChat = ({addNewChat}) => {
    const [seed, setSeed] = useState('')

    const createChat = () => {
        const roomName = prompt("Enter the room Name")
        console.log("MAme")
    }

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))    
    }, [])

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last Chat...</p>
            </div>
        </div>
    ) : (
        <div className="sidebarChat" onCLick={createChat}>
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
