import { Link } from 'react-router-dom'
import Routes from '../../System/Constants/Routes'

const DrawSelectionScreen:React.FC = (props) => {
    return (
        <>
            <div><Link to={Routes.draw.path}>Future</Link></div>
            <div><Link to={Routes.draw.path}>Love</Link></div>
            <div><Link to={Routes.draw.path}>Career</Link></div>
        </>
    );
}

export default DrawSelectionScreen;