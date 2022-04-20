
export const style = {
    bar: {
        display: "flex",
        background: "rgb(5, 15, 55)",
        background: "linear-gradient(10deg, rgba(0, 0, 0, 1) 10%, rgba(5, 15, 55, 1) 73%)",
        flexDirection: "column",
        boxShadow: "0px 0px 15px 6px rgba(123, 89, 255, 0.25)",
    },
    card: {
        height: "100%",
        zIndex: 6
    },
    frame: {
        height: "25vh",
        borderRadius: "10px",
        '&:hover': {
            boxShadow: "0px 0px 15px 8px rgba(123, 89, 255, 0.7)",
        }
    },
    image: {
        borderRadius: "10px",
        height: "25vh",
        maxWidth: "400px",
        objectFit: "cover",
        cursor: "context-menu"
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "75%",
        bgcolor: 'rgba(5, 15, 55, .86)',
        border: "1px solid rgb(5, 15, 55)",
        borderRadius: '10px',
        boxShadow: 24,
        p: 5,
        color: "white"
    },
    titleBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    titles: {
        fontFamily: "Bebas Neue",
        fontSize: "24px",
        color: "white",
        marginRight: 20
    },
    projectMd: {
        textAlign: "left",
        fontSize: "7vw",
        color: "white",
        fontFamily: "Bebas Neue",
        paddingLeft: "70px",
        textShadow: "0px 0px 7px rgba(123, 89, 255, 0.86)"
    },
    projectSm: {
        textAlign: "center",
        fontSize: "15vw",
        color: "white",
        fontFamily: "Bebas Neue",
        textShadow: "0px 0px 7px rgba(123, 89, 255, 0.86)"
    }
}