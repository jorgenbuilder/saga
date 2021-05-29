import Routes from '../../System/Constants/Routes'

const DrawSelectionScreen:React.FC = (props) => {
    return (
        <>
            <div><a href={Routes.draw.path}>Future</a></div>
            <div><a href={Routes.draw.path}>Love</a></div>
            <div><a href={Routes.draw.path}>Career</a></div>
        </>
    );
}

export default DrawSelectionScreen;