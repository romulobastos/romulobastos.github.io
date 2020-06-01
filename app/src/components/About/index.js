import React from "react"

import * as S from "./styled"

const About = () => (
  <S.AboutWrapper>
    <S.AboutTitle>About me!</S.AboutTitle>
    <S.AboutText>
      My name is Rômulo Bastos, I'm front-end developer and digital designer
      since 2009 and I am always trying to learn something new.
    </S.AboutText>
    <S.AboutText>
      I love to work in user experience, think about their feelings, emotions
      and desires to create design pieces that easily make sense to them.
    </S.AboutText>
    <S.AboutText>
      Let's talk about your ideas? Please email me on{" "}
      <a href="mailto:romulobastos.design@gmail.com">
        romulobastos.design@gmail.com
      </a>
    </S.AboutText>{" "}
    <S.AboutText>- Thank you!</S.AboutText>
  </S.AboutWrapper>
)

export default About
