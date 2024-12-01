import styled from "styled-components";

export const HeroSection = styled.section`
  padding-top: 144px;
  padding-bottom: 234px;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const MainTitle = styled.h1`
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 28px;
  line-height: 121%;
  color: var(--main-black);
`;

export const Span = styled.span`
  color: var(--accent);
`;

export const UserEmail = styled.input`
  margin-bottom: 14px;
  width: 100%;
  padding: 13px 18px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
`;

export const UserPass = styled.input`
  margin-bottom: 40px;
  width: 100%;
  padding: 13px 18px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 13px 147px;
  background-color: var(--accent);
  color: var(--background-3);
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  border: none;
  border-radius: 60px;

  cursor: pointer;

  &:hover {
    background-color: var(--hover-color);
  }
`;
