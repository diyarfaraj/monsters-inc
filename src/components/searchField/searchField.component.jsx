import React from 'react';
import './searchField.styles.css';

export const SearchField = ({ placeholder, handleChange }) => (
	<input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
);
