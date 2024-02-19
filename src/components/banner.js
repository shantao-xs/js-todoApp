import React from "react";

export const Banner = (props)=>{
    const {bgTheme} =props;
    const bgDesktopDark = require('../images/bg-desktop-dark.jpg');
    const bgDesktopLight = require('../images/bg-desktop-light.jpg');


    return(
        <header>
            <div 
                className="bg-img" 
                style={{ 
                backgroundImage: `url(${bgTheme === 'dark' ? bgDesktopDark : bgDesktopLight})`}}>
            </div>
            
        </header>
    )
}