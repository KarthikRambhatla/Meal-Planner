import React, { memo } from 'react';
import { Image } from "react-bootstrap";
import { useDrag } from 'react-dnd';

const style = {
    cursor: 'move',
    float: 'left',
    textAlign: 'center',
    fontSize: '0.6rem',
    fontWeight: 700,
    height: '4rem',
    width: '5rem'
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
        <div ref={drag} style={{ ...style, opacity }}>
            <Image src={imagePath} style={{height: '80%', width: '80%'}} />
			{name}
		</div>
    );
};

export const FoodItem = memo(FoodItemBase);