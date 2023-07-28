import React from 'react'
import { Content, ContentH2, HeaderContainer, HeaderImage } from '../../styles/Header/LectureHeader.style'
import header from '../../assets/img/React_Banner.png'

interface PostBoardProps {}
const PostBoard: React.FC<PostBoardProps> = () => {
  return (
    <HeaderContainer>
      <HeaderImage src={header} />
      <Content>
        <ContentH2>

        </ContentH2>
      </Content>
    </HeaderContainer>
  )
}

export default PostBoard