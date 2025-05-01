import React from 'react'

const Profile = () => {
    
const {user} = useContext(UserContext);
  
    if(!user ){
        return <div>Please Login </div>
    }else{
        return <div>Welcome</div>
    }
  
}

export default Profile
