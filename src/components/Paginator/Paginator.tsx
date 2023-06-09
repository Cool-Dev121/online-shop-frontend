import React, { useState, useEffect } from 'react';
import { withTheme } from 'styled-components';
import { styled, Themable } from '../themes';
import { PageButton } from './PageButton';
import { generatePages, shadowed, withBottomPadding } from '../shared';
import { VerticalDivider } from '../VerticalDivider';

const FIRST_PAGE = 1;

interface Props extends Themable {
  visiblePagesCount: number;
  pagesCount: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const PaddingContainer = styled.div`
  ${props => withBottomPadding(props.theme)}
`;

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
  const {
    visiblePagesCount, pagesCount, theme, onPageChange,
  } = props;
  const [currentPage, setCurrentPage] = useState(
    // eslint-disable-next-line react/destructuring-assignment
    props.currentPage !== undefined ? props.currentPage : FIRST_PAGE,
  );
  useEffect(() => {
    onPageChange(currentPage); // eslint-disable-line react-hooks/exhaustive-deps
  }, [currentPage]);
  return (
    <PaddingContainer>
      <MainContainer>
        <PageButton onClick={() => setCurrentPage(validateCurrentPage(0, pagesCount))}>
          {'<<'}
        </PageButton>
        <VerticalDivider color={theme.paginator.borderColor} width={theme.paginator.borderWidth} />
        <PageButton
          onClick={() => setCurrentPage(validateCurrentPage(currentPage - 1, pagesCount))}
        >
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
        <PageButton
          onClick={() => setCurrentPage(validateCurrentPage(currentPage + 1, pagesCount))}
        >
          {'>'}
        </PageButton>
        <VerticalDivider color={theme.paginator.borderColor} width={theme.paginator.borderWidth} />
        <PageButton onClick={() => setCurrentPage(validateCurrentPage(pagesCount, pagesCount))}>
          {'>>'}
        </PageButton>
      </MainContainer>
    </PaddingContainer>
  );
};

export const Paginator = withTheme(PaginatorInner);
