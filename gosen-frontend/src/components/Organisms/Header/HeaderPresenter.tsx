import HeaderSettingsIcon from '../../Atoms/Header/HeaderSettingIcon';
import HeaderTitle from '../../Atoms/Header/HeaderTitle';
import HeaderUserIcon from '../../Atoms/Header/HeaderUserIcon';
import './HeaderStyle.css';

const HeaderPresenter = () => {
    return(
        <div className="header">
            <HeaderSettingsIcon/>
            <HeaderTitle/>
            <HeaderUserIcon/>            
        </div>
    );
}

export default HeaderPresenter;