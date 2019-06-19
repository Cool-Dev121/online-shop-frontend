import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { styled, Themable } from '../themes';
import { PageButton } from './PageButton';
import { generatePages, shadowed } from '../shared';
import { VerticalDivider } from '../VerticalDivider';

const FIRST_PAGE = 1;

interface Props extends Themable {
  visiblePagesCount: number;
  pagesCount: number;
  currentPage?: number;
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  border-radius: ${props => props.theme.paginator.borderRadius}px;
  border-width: ${props => props.theme.paginator.borderWidth}px;
  border-style: solid;
  border-color: ${props => props.theme.paginator.borderColor};
  overflow: hidden;
  ${shadowed}
`;

const validateCurrentPage = (currentPage: number, pagesCount: number) => {
  if (currentPage < FIRST_PAGE) {
    return FIRST_PAGE;
  }
  if (currentPage > pagesCount) {
    return pagesCount;
  }
  return currentPage;
};

export const PaginatorInner = (props: Props): JSX.Element => {
  const { visiblePagesCount, pagesCount, theme } = props;
  const [currentPage, setCurrentPage] = useState(
    // eslint-disable-next-line react/destructuring-assignment
    props.currentPage !== undefined ? props.currentPage : FIRST_PAGE,
  );
  return (
    <MainContainer>
      <PageButton onClick={() => setCurrentPage(validateCurrentPage(0, pagesCount))}>
        {'<<'}
      </PageButton>
      <VerticalDivider color={theme.paginator.borderColor} width={theme.paginator.borderWidth} />
      <PageButton onClick={() => setCurrentPage(validateCurrentPage(currentPage - 1, pagesCount))}>
        {'<'}
      </PageButton>
      <VerticalDivider color={theme.paginator.borderColor} width={theme.paginator.borderWidth} />
      {generatePages(currentPage, visiblePagesCount, pagesCount).map(page => (
        <React.Fragment key={page}>
          <PageButton
            onClick={() => setCurrentPage(validateCurrentPage(page, pagesCount))}
            isActive={currentPage === page}
          >
            {page}
          </PageButton>
          <VerticalDivider
            color={theme.paginator.borderColor}
            width={theme.paginator.borderWidth}
          />
        </React.Fragment>
      ))}
      <PageButton onClick={() => setCurrentPage(validateCurrentPage(currentPage + 1, pagesCount))}>
        {'>'}
      </PageButton>
      <VerticalDivider color={theme.paginator.borderColor} width={theme.paginator.borderWidth} />
      <PageButton onClick={() => setCurrentPage(validateCurrentPage(pagesCount, pagesCount))}>
        {'>>'}
      </PageButton>
    </MainContainer>
  );
};

export const Paginator = withTheme(PaginatorInner);
