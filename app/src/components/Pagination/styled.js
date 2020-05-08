import styled from "styled-components"

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--borders);
  color: var(--texts);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  div {
    flex-grow: 1;
    flex-basis: 0;
    &.prev {
      text-align: left;
    }
    &.curr {
      text-align: center;
    }
    &.next {
      text-align: right;
    }
  }

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    }
  }
`
