import {FC, Fragment, useEffect} from "react";
import {Card, CircularProgress, Typography} from '@mui/material';
import {useStore} from "./store";
import {observer} from "mobx-react-lite";

import { styled } from '@mui/material/styles';
import AvatarContent from "./AvatarContent";
import ActionBar from "./ActionBar";



const StylesCard = styled(Card)`
    height : 600px;
    width : 600px;
`;

const UserCard : FC = () => {
    const store = useStore();
    useEffect(() =>{
        store.getUser();
    },[store]);

    return <div>
        <Typography variant={'h2'}> Hello </Typography>
        <StylesCard>
            {store.isImgLoaded &&
            <Fragment>
                <AvatarContent/>
                <ActionBar/>
            </Fragment>
            }

    </StylesCard>
    </div>
}


export default observer(UserCard);
