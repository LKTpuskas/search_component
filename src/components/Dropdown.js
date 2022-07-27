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
        {searchResult?.map(({ author, title }) => {
          return (
            <StyledDropdownWrapper>
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
      {/* <StyledDropdown>{searchResult.authors.author.map(res => {
      return (

      )
    })}
  */}
    </>
  );
}

export default Dropdown;
/*  className={classnames(
className?.dropdown,
"w-inherit gap-4 items-start flex-col",
{
  "flex d:absolute t:absolute ts:absolute m:hidden m:h-screen left-0 z-70 m:top-0 m:border-none pb-12":
    searchOpen,
  "top-full": searchOpen && !className?.dropdown,

  "pb-12 bg-white border-r border-b border-l border-almost-black":
    searchOpen,
  "d:hidden t:hidden ts:hidden": !searchOpen,
}
)} */
{
  /* <p>map search result here and link to amazon</p>
  <p> http://www.penguinrandomhouse.biz/webservices/rest/#titles</p>
  <p>
    https://taxscouts.notion.site/taxscouts/Practical-Task-Front-End-Engineer-0a3b77bbb3994ba18340d4cb41d0c80e
  </p> */
}
