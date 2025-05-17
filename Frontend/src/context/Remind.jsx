import { createContext ,useState} from "react";
import { toast } from "react-toastify";

export const Remind = createContext();


const  RemindProvider = ({children})=>{
 const notify=()=>{
    toast("Reminder Set ✅")

 };

 return (
<Remind.Provider value ={{notify}}>
    {children}
 </Remind.Provider>
 );

}

export default RemindProvider;