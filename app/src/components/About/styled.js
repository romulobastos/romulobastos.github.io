import styled from "styled-components"

export const AboutWrapper = styled.section`
  background: var(--background);
  color: var(--white);
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin: 0 auto;
  padding: 5rem;
  text-align: left;

  a {
    font-size: inherit;
    color: var(--highlight);
  }
`
export const AboutTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  border-bottom: 3px solid var(--borders);
  padding: 0 0 1rem;
  margin-bottom: 2rem;
`
export const AboutText = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  letter-spacing: 0.069rem;
  margin: 1rem 0;
  text-align: left;
`
