import React from "react";

export default class ClickTracker extends React.Component{
    render(){
        return (
            <>
                <button name="First" onClick={this.props.childClick}>
                    <img 
                    src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Decorative-Numbers/Number_One_Neon_Transparent_PNG_Image.png?m=1521603647"
                     onClick={this.props.childClick}
                     name="First"
                     height={'40px'} width={'40px'}
                    />
                </button>
                <button name="Second" onClick={this.props.childClick}>
                    <img
                     src='https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Decorative-Numbers/Number_Two_Neon_Transparent_PNG_Image.png?m=1521603646'
                     onClick={this.props.childClick}
                     name="Second"
                     height={'40px'} width={'40px'}
                    />
                </button>
                <button name="Third" onClick={this.props.childClick}>
                    <img 
                     src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Decorative-Numbers/Number_Three_Neon_Transparent_PNG_Image.png?m=1521603645" 
                     onClick={this.props.childClick} 
                     name="Third"
                     height={'40px'} width={'40px'}
                    />
                </button>
            </>
        )
    }
}