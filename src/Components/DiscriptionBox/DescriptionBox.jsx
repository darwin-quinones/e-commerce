import React from 'react';
import './DescriptionBox.css'


const DescriptionBox = () => {
    return (
        <div className="description-box">
            <div className="description-box-navigator">
                <div className="description-nav-box">Description</div>
                <div className="description-nav-box fade">Reviews (122)</div>
            </div>
            <div className="description-box-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima quibusdam,
                    cupiditate in nam cumque voluptate laboriosam soluta?
                    Amet esse iste officiis doloribus dolor illum quaerat rerum rem, eum ducimus.
                    Amet esse iste officiis doloribus dolor illum quaerat rerum rem, eum ducimus
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Odit ut eaque non error corrupti molestiae, fugiat repellendus 
                iure praesentium sint accusantium nemo dolorem aspernatur ex 
                tempore delectus excepturi! Praesentium, ipsam!</p>
            </div>
        </div>
    );
}

export default DescriptionBox;
