import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    <div className="prev">
      {!isFirst && (
        <AniLink
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
          to={prevPage}
        >
          ← página anterior
        </AniLink>
      )}
    </div>
    <div className="curr">
      <p>
        {currentPage} de {numPages}
      </p>
    </div>
    <div className="next">
      {!isLast && (
        <AniLink
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          to={nextPage}
        >
          próxima página →
        </AniLink>
      )}
    </div>
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
