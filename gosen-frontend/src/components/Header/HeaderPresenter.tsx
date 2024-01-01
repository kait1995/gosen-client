import HeaderSettingsIcon from './HeaderSettingIcon';
import HeaderTitle from './HeaderTitle';
import HeaderUserIcon from './HeaderUserIcon';
import './HeaderStyle.css';

const HeaderPresenter = () => {
    return(
        <div className="header">
            <div>
                {/*<HeaderSettingsIcon/>*/}
            </div>
            <div>
                <HeaderTitle/>
            </div>
            <div>
                {/*<HeaderUserIcon/>*/}
            </div>          
        </div>
    );
}

export default HeaderPresenter;