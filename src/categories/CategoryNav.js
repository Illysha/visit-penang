// src/components/categories/CategoryNav.js
import React from 'react';
import './CategoryNav.css';

const CategoryNav = ({ categories, loadCategory }) => {
    return (
        <nav>
            {Object.keys(categories).map((key) => {
                const category = categories[key];
                return category.subcategories ? (
                    <div className="dropdown" key={key}>
                        <a href={`#${key}`} onClick={(e) => { e.preventDefault(); loadCategory(key); }}>
                            {category.title}
                        </a>
                        {/* Dropdown Content Container */}
                        <div className="dropdown-content">
                            {category.subcategories.map((subCategory) => (
                                <a
                                    key={subCategory.id}
                                    href={`#${subCategory.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        loadCategory(subCategory.id);
                                    }}
                                >
                                    {subCategory.title}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : (
                    <a key={key} href={`#${key}`} onClick={(e) => { e.preventDefault(); loadCategory(key); }}>
                        {category.title}
                    </a>
                );
            })}
        </nav>
    );
};

export default CategoryNav;

