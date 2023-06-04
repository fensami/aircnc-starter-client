import React from 'react';
import Container from '../shared/Navbar/Container';
import { categories } from './categoriesData';
import CategoriesBox from './CategoriesBox';
const Categories = () => {
    return (
    
            <Container>
                <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
                    {
                        categories.map((item, index) => <CategoriesBox
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        ></CategoriesBox>)    
                    }

                </div>
            </Container>
        
    );
};

export default Categories;