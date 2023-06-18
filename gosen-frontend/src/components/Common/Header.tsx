import { UserIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <AdjustmentsHorizontalIcon className="settingsIcon" type="button"/>
            <span className="headerTitle">Gosen</span>
            <UserIcon className="userIcon" type="button"/>
        </div>
    );
}

export default Header;