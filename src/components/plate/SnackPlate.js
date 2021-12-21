import React, { useState } from 'react';
import { Plate } from './Plate';
import { FoodCategory, FoodCategorySlotColor } from '../../models/FoodCategory'

const SnackPlate = () => {
    const [plateSections] = useState([
        { foodCategory: FoodCategory.good, backgroundColor: FoodCategorySlotColor.good, count: 2, style: { width: '50%', top: '20%', left: '25%'} },
        { foodCategory: FoodCategory.ok, backgroundColor: FoodCategorySlotColor.ok, count: 1, style: { width: '15%', top: '45%', left: '32.5%'} },
        { foodCategory: FoodCategory.moderation, backgroundColor: FoodCategorySlotColor.moderation, count: 1, style: { width: '17%', top: '48%', left: '51%'}  },
        { foodCategory: FoodCategory.treat, backgroundColor: FoodCategorySlotColor.treat, count: 1, style: { width: '17%', top: '37.5%', left: '72%'}  }
    ]);

    return (
        <Plate plateSections={plateSections}/>
    );
}

export { SnackPlate }
