
import { styles } from "../../style"
import { useState } from "react"
import { Plus } from "lucide-react"
import { Trash} from "lucide-react"
import {Client,Databases,ID } from "appwrite"
import { json } from "react-router-dom"


const MainForm=()=> {

    

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        console.log('Form submitted:', team, data);
        // Initialize Appwrite
        const appwrite = new Client();
        appwrite
        .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
        .setProject('6609cf68718e8d64253f') // Replace with your Appwrite project ID
        
        const database = new Databases(appwrite);
        // Create a new document in the database collection
        try {
          const response = await database.createDocument('6609cf80971ef648da58','6609cf8d44ab8d8edf3c',ID.unique(),
          {
            "team":team,
            "data":`${JSON.stringify(data)}`
          });
          console.log('Document created successfully:', response);
        } catch (error) {
          console.error('Error creating document:', error);
        }
      };
 

  const [data,setData]=useState([{name:"",email:"",PhoneNumber:""},{name:"",email:"",PhoneNumber:""}])
  const [team,setTeam]=useState("")

  const addmember=()=>{
    if(data.length>=4)
    {
        alert("You can only add 4 members")
        return
    }
    setData([...data,{name:"",email:"",PhoneNumber:""}])

  }

  const handleDeleteTodo = (index) => {
    const updateddata = [...data];
    updateddata.splice(index, 1);
    setData(updateddata);
};
    const handleInputChange = (event,index) => {
        
        const { name, value } = event.target;
        const newdata=[...data]
        newdata[index][name]=value
        console.log(newdata)
        setData(newdata);
    };

    

  return (
    <>
    
        
        <p className={`${styles.sectionSubText}`}>Are You Ready</p>
        <h3 className={`${styles.sectionHeadText}`}> Register</h3>
        <form 
            onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'>

            <label  className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Team Name</span>
                    <input type="text" name='teamname'  onChange={(e)=>setTeam(e.target.value)}
                    value={team}
                    placeholder='Enter Team Leader name' 
                    className='bg-tertiary py-4 px-6 rounded-lg outlined-none border-none font-medium'/>
            </label>
            {data.map((item,index)=>{
                return(
                    <>
                    {index===0 ?(
                        <div key={index}> 
                        <label  className='flex flex-col'>
                            <span className='text-white font-medium my-4'>Leader Name</span>
                            <input type="text" name='name'  onChange={(e)=>handleInputChange(e,index)}
                            value={item.name}
                            placeholder='Enter Team Leader name' 
                            className='bg-tertiary py-4 px-6 rounded-lg outlined-none border-none font-medium'/>
                        </label>
                        <label  className='flex flex-col'>
                            <span className='text-white font-medium my-4'>Leader Email</span>
                            <input type="email" name='email' 
                            placeholder='Enter your email' onChange={(e)=>handleInputChange(e,index)}
                            className='bg-tertiary py-4 px-6 rounded-lg outlined-none border-none font-medium'/>
                        </label>
                        <label  className='flex flex-col'>
                            <span className='text-white font-medium my-4'>Leader Phone Number</span>
                            <input type="number" name='PhoneNumber' 
                            placeholder='Enter your Phone Number' onChange={(e)=>handleInputChange(e,index)}
                            className='bg-tertiary py-4 px-6 rounded-lg outlined-none border-none font-medium'/>
                        </label>
                            <br />
                        </div>
                    ):(
                        <div key={index}> 
                        <label  className='flex flex-col'>
                            <span className='text-white font-medium my-4'>Teammate Name</span>
                            <input type="text" name='name'  
                            placeholder='Enter Team Leader name' onChange={(e)=>handleInputChange(e,index)}
                            className='bg-tertiary py-4 px-6 rounded-lg outlined-none border-none font-medium'/>
                        </label>
                        <label  className='flex flex-col'>
                            <span className='text-white font-medium my-4'>Teammate Email</span>
                            <input type="email" name='email' 
                            placeholder='Enter your email' onChange={(e)=>handleInputChange(e,index)}
                            className='bg-tertiary py-4 px-6 rounded-lg outlined-none border-none font-medium'/>
                        </label>
                        <label  className='flex flex-col'>
                            <span className='text-white font-medium my-4'>Teammate Phone Number</span>
                            <input type="number" name='PhoneNumber' 
                            placeholder='Enter your Phone Number' onChange={(e)=>handleInputChange(e,index)}
                            className='bg-tertiary py-4 px-6 rounded-lg outlined-none border-none font-medium'/>
                        </label>
                        <br />
                       {data.length>2 && <span className="flex gap-2" onClick={()=>handleDeleteTodo(index)}> <Trash size={20} />Remove member</span>}
                            <br />
                        </div>
                        
                    )}
                    
                    
                    </>
                )
            })}
        

        

        {data.length<4 &&<div className="flex justify-center items-center" onClick={addmember}>
            <Plus size={40} />
            <span>Add Team Member</span>
        </div>}

        <button
        type='submit'
        className='bg-tertiary py-3 px-8 rounded-lg outlined-none w-fit border-none font-medium text-white-100 hover:bg-[#915eff] transition-all duration-300 ease-in-out flex items-center justify-center w-40 h-12 mx-auto'
        >{'Send'}</button>
        </form>
    </>
  )
}

export default MainForm