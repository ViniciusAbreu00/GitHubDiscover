import { makeStyles } from '@mui/styles';

export const useHeaderStyle = makeStyles({
    headerBox: {
        width: '100%',
        height: "100px",
        
        backgroundColor:'#722FE0',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems : 'center'
    },

    logo: {
        width: '65px',
        height: '65px',
    }
})