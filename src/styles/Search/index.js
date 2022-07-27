import styled from "styled-components";

const StyledSearchForm = styled.form`
  position: relative;
`;

const StyledDropdown = styled.div`
  display: ${(props) => (props.searchOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  height: auto;
  border: none;
  z-index: 100;
  background-color: #e3e3e3;
  width: 434px;
  left: -160px;
  top: 60px;
  border-radius: 0px;
  border-radius: 2px;
`;

const StyledArrow = styled.div`
  display: ${(props) => (props.searchOpen ? "flex" : "none")};
  position: absolute;
  width: 30px;
  height: 30px;
  left: 120px;
  top: 60px;
  background-color: #e3e3e3;
  transform: rotate(45deg);
`;

const StyleInput = styled.input`
  width: 238px;
  padding: 12px 18px;
  margin-right: 12px;
  border-radius: 2px;
  border: none;
  background-color: #e3e3e3;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: #000000;
  &::placeholder {
    color: #7e7e7e;
  }
`;

const StyledDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const StyledLi = styled.li`
  display: flex;

  padding: 8px 4px;
  align-items: center;
  &:nth-child(2n + 1) {
    background-color: #f2f2f2;
  }
  &:nth-child(2n + 2) {
    color: #777;
  }
`;

const StyledALink = styled.a`
  display: flex;
  width: 100%;
  &:active,
  &:visited,
  &:link {
    text-decoration: none;
  }
`;

export {
  StyledSearchForm,
  StyledDropdown,
  StyledArrow,
  StyleInput,
  StyledDropdownWrapper,
  StyledUl,
  StyledLi,
  StyledALink,
};
