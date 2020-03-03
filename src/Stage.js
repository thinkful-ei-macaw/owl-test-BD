import React from 'react';
import './Stage.css';

function Stage(props) {
    
    if (props.onStage){
    return (
        <div className='user'>
            <h2 className="h2">{props.name}<hr></hr></h2>
            <div className='icons'>
            <img className='icon' src="https://assets.dryicons.com/uploads/icon/svg/12209/cc0cdcf8-828c-4c43-8361-3db24f11ada3.svg" alt="muted speaker"/><img className='icon' src="https://as2.ftcdn.net/jpg/01/23/80/31/500_F_123803188_7f2vK45t4fJQ1UwBgb7dSEU2Yj6XEkaB.jpg" alt="magnifying glass"/></div>
            <img src={props.avatar} alt='user' className="user-avatar"/>
        </div>
    )
    }
}

export default Stage;