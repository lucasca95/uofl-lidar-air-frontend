import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        backgroundColor:'#fff',
        textAlign: 'center',
    },
    airDataContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        // backgroundColor: 'black',
    },
    attrBar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 6%',
        // backgroundColor:'rgb(150,150,150,0.2)', 
    },
    attrItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2%',
        minWidth: '100px',
        minHeight: '50px',
        backgroundColor: 'darkgreen',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderRadius: '10%',
        borderColor: '#fff',
        color: '#eee',
    },
    lineContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        // backgroundColor: 'black',
    },
    graphBox: {
        width: '50%',
    }
}));

export default useStyles;
