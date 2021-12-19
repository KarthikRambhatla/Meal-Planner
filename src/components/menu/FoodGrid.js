import React, { useState, memo } from 'react';
import { FoodItem } from './FoodItem';
import { FoodCategory } from '../../models/FoodCategory';

const FoodGridBase = () => {

    const baseImagePath = '../../assets/images/foodItems';

    // collection of available food items that can be dropped onto plate
    const [foodItems] = useState([
        { name: 'Apple', type: FoodCategory.good, imagePath: `${baseImagePath}/apple.png`},
        { name: 'Banana', type: FoodCategory.good, imagePath: `${baseImagePath}/Banana.png` },
        { name: 'Raisins', type: FoodCategory.ok, imagePath: `${baseImagePath}/Raisins.png` },
        { name: 'Pear', type: FoodCategory.ok, imagePath: `${baseImagePath}/Pear.png` },
        { name: 'Melon', type: FoodCategory.moderation, imagePath: `${baseImagePath}/Melon.png` },
        { name: 'Kiwi', type: FoodCategory.moderation, imagePath: `${baseImagePath}/Kiwi Fruit.png` },
        { name: 'Pineapple', type: FoodCategory.treat, imagePath: `${baseImagePath}/Pineapple.png` },
        { name: 'Grapes', type: FoodCategory.treat, imagePath: `${baseImagePath}/Grapes.png` }
    ]);

    return (
        <div style={{ overflow: 'hidden', clear: 'both' }}>
            {foodItems.map(({ name, type, imagePath }, index) => 
                (<FoodItem name={name} imagePath={imagePath} type={type} key={index}/>))}
        </div>);
};

export const FoodGrid  = memo(FoodGridBase);