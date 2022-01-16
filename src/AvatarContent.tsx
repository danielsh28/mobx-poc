import {FC, useEffect, Fragment, useState} from "react";
import {Box, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";
import {useStore} from "./store";
import {observer} from "mobx-react-lite";
import {styled} from "@mui/material/styles";


const StyledContent = styled(Box)`
.content{
  font-family: poppins;
}
`;

const AvatarContent : FC = () => {
    const store = useStore();
    const {user} = store;
    const [showImg, setShowImg] = useState(false);

    return (
        <StyledContent className={"content"}>
                <CardMedia>
                    <img
                        height="400"
                        src={store.user?.img}
                        style={{visibility : `${showImg ? 'visible' : 'hidden'}` }}
                        onLoad={() => setShowImg(true)}
                        />
                </CardMedia>
                <CardContent>
                    <Typography component={'div'} color={"blue"} variant={'h4'}>{user?.name}</Typography>
                    <Typography color={"black"} variant={'h6'}>{`Gender: ${user?.gender},`}</Typography>
                    <Typography variant={'h6'}> {`From:${user?.from}`}</Typography>
                        </CardContent>
        </StyledContent>
    )
}



export default observer(AvatarContent);
