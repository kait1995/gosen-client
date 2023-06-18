import Header from './Header';
import './Common.css';
import Main from './Main';

const Common = () => {
    return (
        <div>
            <div className="grid">
                <Header/>
                <Main/>
            </div>
        </div>
    );
}

export default Common;