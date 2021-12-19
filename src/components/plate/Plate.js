import React from 'react';
import { PlateSection } from './PlateSection';
import PlateImage from '../../assets/images/plate/Plate_placeholders.png'

const Plate = (props) => {

    return (
        <div style={{ maxWidth: '100%', height: '100%', overflow: 'auto', backgroundImage: `url(${PlateImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            {props.plateSections.map((sectionData, index) => 
                (<PlateSection 
                    foodCategory={sectionData.foodCategory}
                    backgroundColor={sectionData.backgroundColor}
                    count={sectionData.count}
                    parentStyle={sectionData.style}
                    key={index}
                />))}
        </div>
    );
}

export { Plate }
