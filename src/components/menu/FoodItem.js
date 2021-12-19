import React from 'react';
import { memo } from 'react';
import { useDrag } from 'react-dnd';
// import { ImageBackground } from 'react-native'

const style = {
    cursor: 'move',
    float: 'left',
    textAlign: 'center',
    fontSize: '0.6rem',
    fontWeight: 700,
    minHeight: '3.6rem',
    minWidth: '4.5rem',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
};

const FoodItemBase = ({ name, type, imagePath }) => {
    const [{ opacity }, drag] = useDrag(() => ({
        type,
        item: { name, imagePath },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    }), [name, type]);
    
    return (
        <div ref={drag} style={{ ...style, opacity, backgroundImage: `url(${imagePath})` }}>
			{name}
		</div>
    );
};

export const FoodItem = memo(FoodItemBase);