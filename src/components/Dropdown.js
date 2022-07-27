import React from "react";
import { useSelector } from "react-redux";

import {
  StyledArrow,
  StyledDropdown,
  StyledDropdownWrapper,
  StyledUl,
  StyledLi,
  StyledALink,
} from "../styles/Search/index";

function Dropdown({ searchOpen }) {
  const searchResult = useSelector((state) => state.searchResult.data);
  return (
    <>
      <StyledArrow searchOpen={searchOpen} />
      <StyledDropdown searchOpen={searchOpen}>
        {!searchResult?.length && <p>No results</p>}
        {searchResult?.map(({ author, title }, i) => {
          return (
            <StyledDropdownWrapper key={i}>
              {!author && !title && <p>No results</p>}
              {!!author?.length > 0 && (
                <>
                  <h4>Authors</h4>
                  <StyledUl>
                    {author.map(({ authordisplay }, i) => (
                      <StyledLi key={`${i}-${authordisplay}`}>
                        <StyledALink
                          href={`https://www.amazon.co.uk/s?k=${authordisplay}&i=stripbooks&ref=nb_sb_noss`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {authordisplay}
                        </StyledALink>
                      </StyledLi>
                    ))}
                  </StyledUl>
                </>
              )}
              {!!title?.length > 0 && (
                <>
                  <h4>Titles</h4>
                  <StyledUl>
                    {title.map(({ search }, i) => (
                      <StyledLi key={`${i}-${search}`}>
                        <StyledALink
                          href={`https://www.amazon.co.uk/s?k=${search}&i=stripbooks&ref=nb_sb_noss`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {search}
                        </StyledALink>
                      </StyledLi>
                    ))}
                  </StyledUl>
                </>
              )}
            </StyledDropdownWrapper>
          );
        })}
      </StyledDropdown>
    </>
  );
}

export default Dropdown;
