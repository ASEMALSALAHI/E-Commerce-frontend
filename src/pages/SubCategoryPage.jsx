
import React from 'react';
import { useParams } from 'react-router-dom';
import SubCategory from '../components/Products/SubCategory';

const SubCategoryPage = () => {
  // استخدم useParams للوصول إلى قيمة الـ ID من الـ router
  const { subcategoreID } = useParams();
  

  // قم بتخزين قيمة الـ ID في متغير أو قم باتخاذ الإجراء الذي تحتاجه هنا
  const myVariable = subcategoreID;
 // console.log('قيمة المتغير:', myVariable);

  return (
    <div>
      {/* يمكنك استخدام myVariable كما تشاء هنا */}
      <h1>SubCategory Page</h1>
      <SubCategory myVariable={myVariable} />
    </div>
  );
};

export default SubCategoryPage;