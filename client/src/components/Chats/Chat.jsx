import React from 'react'
import { useLoaderData } from 'react-router-dom'


const Chat = () => {
    const data = useLoaderData();
  return (
    <div className='chatWrapper'>
        Hii
        <div className="chat">

        </div>
        <div className="chatBox">

        </div>
    </div>
  )
}

export const loadChat = ()=>{
   return {rishabh:{
    chats:"hii",
    time:"",
    date:"",
   }
};
}

export default Chat;