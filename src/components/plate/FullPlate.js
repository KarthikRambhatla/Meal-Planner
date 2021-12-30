import React, { useState } from 'react';
import { Plate } from './Plate';
import { FoodCategory, FoodCategorySlotColor } from '../../models/FoodCategory'

const FullPlate = () => {
    const [plateSections] = useState([
        { foodCategory: FoodCategory.good, backgroundColor: FoodCategorySlotColor.good, count: 5, style: { width: '50%', top: '14%', left: '25%'} },
        { foodCategory: FoodCategory.ok, backgroundColor: FoodCategorySlotColor.ok, count: 3, style: { width: '35%', top: '42%', left: '16%'} },
        { foodCategory: FoodCategory.moderation, backgroundColor: FoodCategorySlotColor.moderation, count: 2, style: { width: '17%', top: '46%', left: '50%'}  },
        { foodCategory: FoodCategory.treat, backgroundColor: FoodCategorySlotColor.treat, count: 1, style: { width: '17%', top: '37.5%', left: '72%'}  }
    ]);

    return (
        <Plate plateSections={plateSections}/>
    );
}

export { FullPlate }
