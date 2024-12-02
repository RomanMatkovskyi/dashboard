import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgba(29, 30, 33, 0.3);
`;

export const MenuBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  border-right: 1px solid rgba(29, 30, 33, 0.1);
  border-top: 1px solid rgba(29, 30, 33, 0.1);
  width: 78px;
  height: 100%;

  background-color: var(--background-3);
`;

export const MenuCloseBtn = styled.button`
  display: block;
  margin-left: 12px;
  margin-bottom: 40px;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const MenuIcon = styled.li`
  width: 38px;
  height: 38px;
  border-radius: 100%;
  fill: var(--background-3);
  box-shadow: 0 -1px 7px 0 rgba(71, 71, 71, 0.05);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  cursor: pointer;

  &:hover {
    stroke: var(--accent);
  }
`;

export const LogoutBtn = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 100%;
  border: none;
  background-color: var(--accent);
  box-shadow: 0 -1px 7px 0 rgba(71, 71, 71, 0.05);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  cursor: pointer;

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
