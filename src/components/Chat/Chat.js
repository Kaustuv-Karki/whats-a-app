import React, {useState, useEffect} from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {

    const [input, setInput] = useState('')
    const [seed, setseed] = useState('')

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        console.log(input)
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen At...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">
                        Kaustuv
                    </span>
                    He
                    <span className="chat__timestamp">
                        3:33pm
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message"/>
                <button  onClick={sendMessage} type="submit">Send A Message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
