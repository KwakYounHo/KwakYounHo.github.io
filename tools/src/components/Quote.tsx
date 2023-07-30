import React from 'react'
import { BlockQuote, QuoteH1, QuoteH4, Wrapper } from '../styles/Header/LectureQuote'

interface QuoteProps {}
const Quote: React.FC<QuoteProps> = () => {
  return (
    <Wrapper>
      <BlockQuote>
        <QuoteH1>
          CSS - Framework : 리액트 부트스트랩 연구해 보기
        </QuoteH1>
        <QuoteH4>
          we need help us <br />- Yoonho
        </QuoteH4>
      </BlockQuote>
    </Wrapper>
  )
}

export default Quote