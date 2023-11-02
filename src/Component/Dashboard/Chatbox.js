import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Chatbox = (props) => {
   const {setMessageData,messageData} = props
   const [messages,setMessages] = useState([])
   
   const apiCall = ()=>{
      axios.get("http://localhost:3001/message/getMessage").then((res)=>{
         console.log(res)
         setMessages(res.data.message)
      })
   }
   useEffect(()=>{
      apiCall()
   },[])
  return (
    <div>
         <body className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10" style={{height:"500px",padding:"2px"}}>
         <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden" >
         <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
         {
            messages.map((mess)=>{
                return (
                     <div>{mess.userId == messageData.userId?  
                               <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                                 <div>
                                 <span>{mess.userName}</span>
                                    <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                       <p className="text-sm">{mess.message}</p>
                                    </div>
                                    <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                                 </div>
                                 <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                                 </div>: <div className="flex w-full mt-2 space-x-3 max-w-xs">
                                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                                                <div>
                                                <span>{mess.userName}</span>
                                                   <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                                      <p className="text-sm">{mess.message}</p>
                                                   </div>
                                                   <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                                                </div>
                                          </div>

                        }</div>
                     

                )
                

            })
         }
      {/* <div className="flex w-full mt-2 space-x-3 max-w-xs">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
        <div>
          <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <span className="text-xs text-gray-500 leading-none">2 min ago</span>
        </div>
      </div> 
       <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
        <div>
          <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          </div>
          <span className="text-xs text-gray-500 leading-none">2 min ago</span>
        </div>
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
      </div> */}
     
      
      
    </div>
  <div className="bg-gray-300 p-4">
    <input value={messageData.message} onChange={(e)=>{
     setMessageData({
      ...messageData,
      message:e.target.value,
       
      
     })
    }} className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…"/>
    <button onClick={()=>{
      console.log(messageData)
      axios.post("http://localhost:3001/message/addMessage",messageData).then((res)=>{
         console.log(res)
         apiCall()
      }).catch((err)=>{
         console.log(err)

      })
    }} >Send</button>
  </div>
</div>


</body>

    </div>
  )
}

export default Chatbox
