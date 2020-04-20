import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';

import * as S from './styled';

const Pagination = ({
	isFirst,
	isLast,
	currentPage,
	numPages,
	prevPage,
	nextPage,
}) => (
	<S.PaginationWrapper>
		<div className='prev'>
			{!isFirst && <Link to={prevPage}>← página anterior</Link>}
		</div>
		<div className='curr'>
			<p>
				{currentPage} de {numPages}
			</p>
		</div>
		<div className='next'>
			{!isLast && <Link to={nextPage}>próxima página →</Link>}
		</div>
	</S.PaginationWrapper>
);

Pagination.propTypes = {
	isFirst: propTypes.bool.isRequired,
	isLast: propTypes.bool.isRequired,
	currentPage: propTypes.number.isRequired,
	numPages: propTypes.number.isRequired,
	prevPage: propTypes.string,
	nextPage: propTypes.string,
};

export default Pagination;
