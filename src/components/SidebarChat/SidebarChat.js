import React, { useState, useEffect } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'
import db from '../../firebase'
import { Link } from 'react-router-dom'

const SidebarChat = ({addNewChat, name, id}) => {
    const [seed, setSeed] = useState('')
    const [messages, setMessages] = useState([])

    const createChat = () => {
        const roomName = prompt("Enter the room Name")  
        if(roomName){
            db.collection('rooms').add({
                name: roomName
            })
        }
    }
    
    useEffect(() =>{
        if(id){
            db.collection('rooms').doc(id).collection('messages')
            .orderBy('timestamp', 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [id])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))    
    }, [])

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
    ) : (
        <div className="sidebarChat" onClick={createChat}>
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
