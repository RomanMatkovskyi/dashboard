import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  width: 157px;
  height: 98px;
  padding: 14px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.5s ease-in-out;

  &:hover {
    border-color: var(--accent);
  }
`;

export const NameWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  gap: 8px;
`;

export const CardName = styled.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  color: rgba(29, 30, 33, 0.4);
`;

export const CarQuantity = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  color: var(--main-black);
`;
