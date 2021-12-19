import React, { memo } from 'react';
import { useDrop } from 'react-dnd';
import { FoodItem } from '../menu/FoodItem';

const style = {
    minHeight: 'min(11.8vh, 5.5vw)',
    minWidth: 'min(11.8vh, 5.5vw)',
    margin: '0.25rem 0.4rem',
    color: 'black',
    padding: '0.25rem',
    textAlign: 'center',
    fontSize: '0.6rem',
    fontWeight: 700,
    lineHeight: 'normal',
    borderRadius: '9px'
};

const FoodSlotBase = ({ accept, backgroundColor, lastDroppedItem, onDrop }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: !lastDroppedItem && monitor.canDrop(),
        }),
    });

    const isActive = isOver && canDrop;
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = '#fff952';
    }

    const currentItemDisplay = lastDroppedItem 
        ? <FoodItem name={lastDroppedItem.name} imagePath={lastDroppedItem.imagePath} type={accept}/>
        : null;

    return (
        <div ref={drop} style={{ ...style, backgroundColor }}>
            {currentItemDisplay}
		</div>);
};

export const FoodSlot  = memo(FoodSlotBase);
