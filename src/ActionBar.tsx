import {FC} from "react";
import {Button} from "@mui/material";
import {useStore} from "./store";
import {observer} from "mobx-react-lite";


const ActionBar :FC = () =>{
    const store = useStore();
    const {user} = store;
    return (
        <div>
            <Button onClick={() => store.getUser()}>Choose Another</Button>
            <Button onClick={() => store.savedUsers.push({name : user?.name, from : user?.from,gender : user?.gender, img:user?.img})}>SaveUser</Button>
        </div>
    )
}

export  default  observer(ActionBar);
