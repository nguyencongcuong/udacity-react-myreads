import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';

const HeaderContainer = () => {
	return (
		<div className="flex justify-center items-center gap-8 font-bold uppercase text-neutral-800 p-4">
			<Link to={'/'}>
				<div className="flex items-center gap-2">
					<AiOutlineHome/> <span>Home</span>
				</div>
			</Link>
			<Link to={'/search'}>
				<div className="flex items-center gap-2">
					<AiOutlineSearch/> <span>Search</span>
				</div>
			</Link>
		</div>
	);
};

export default HeaderContainer;