import { UserIcon } from '@heroicons/react/24/solid'
import '../HeaderStyle.css';

const HeaderUserIcon = () => {
    return(
        <div className="userIcon">
            <UserIcon type="button"/>
        </div>
    );
}

export default HeaderUserIcon;