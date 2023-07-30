import React, { useEffect, useState } from "react";
import {
  Content,
  ContentH2,
  HeaderContainer,
  HeaderImage,
} from "../../styles/Header/LectureHeader.style";
import header from "../../assets/img/React_Banner.png";
import Quote from "../../components/Quote";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./PostBoard.css";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface PostBoardProps {}
const PostBoard: React.FC<PostBoardProps> = () => {
  const [input, setInput] = useState<string>("");
  return (
    <>
      <HeaderContainer>
        <HeaderImage src={header} alt="header" />
        <Content>
          <ContentH2>
            Main Title - React <br /> 리액트 부트스트랩
          </ContentH2>
        </Content>
      </HeaderContainer>
      <Quote />
      <div className="BoardWrapper">
        <textarea
          value={input}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setInput(e.target.value);
          }}
          placeholder="text"
        />
        {/* <ReactMarkdown children={input} remarkPlugins={[remarkGfm]} /> */}
        <ReactMarkdown
          children={input}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  {...props}
                  style={materialDark}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
          // remarkPlugins={remarkGfm}
        />
      </div>
    </>
  );
};

export default PostBoard;
