import React, { memo, useCallback, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FoodSlot } from './FoodSlot'
import update from 'immutability-helper';

const styles = {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    height: 0
}

const PlateSectionBase = (props) => {
    
    // collection of food slots where food can be dropped
    const foodSlotData = new Array(props.count).fill(
        { accepts: props.foodCategory, backgroundColor: props.backgroundColor, lastDroppedItem: null });
    const [foodSlots, setFoodSlots] = useState(foodSlotData);

    // triggered action when food is dropped onto plate
    const handleDrop = useCallback((index, item) => {
        if (foodSlots[index].lastDroppedItem == null) {
            setFoodSlots(update(foodSlots, {
                [index]: {
                    lastDroppedItem: {
                        $set: item,
                    },
                },
            }));
        }
    }, [foodSlots]);

    return (
        <Container style={{...styles, ...props.parentStyle}}>
            {foodSlots.map(({ accepts, backgroundColor, lastDroppedItem }, index) => 
                (<FoodSlot 
                    accept={accepts}
                    backgroundColor={backgroundColor}
                    lastDroppedItem={lastDroppedItem} 
                    onDrop={(item) => handleDrop(index, item)} 
                    key={index}
                />))}
        </Container>);
};

export const PlateSection  = memo(PlateSectionBase);
