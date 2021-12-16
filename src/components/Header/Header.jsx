import React from "react";
import Box from '@mui/material/Box';
import {useHeaderStyle} from './Header.style'
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
    const styles = useHeaderStyle()

    return(
        <Box className={styles.headerBox}>
            <Box><GitHubIcon style={{width: '65px', height: '65px', color: 'white'}}/></Box>
        </Box>
    )
}