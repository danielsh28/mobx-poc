import {FC} from "react";
import {Box} from '@mui/material';
import {useStore} from "./store";
import {observer} from "mobx-react-lite";




const UsersList  : FC =  () => {
const store = useStore();
    return <Box>
        {store.savedUsers?.map(user=> <p>{user.name}</p>)}
    </Box>;

}

export default observer(UsersList);
