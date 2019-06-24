import React from 'react';
import { Identifiable } from '../shared';
import { styled } from '../themes';
import { TableColumnsDefinition, Table } from '../Table';
import { Paginator } from '../Paginator';

const PaginatorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface Props<TItem extends Identifiable> {
  itemsPerPage: number;
  totalItemsCount: number;
  maxVisiblePagesCount: number;
  items: TItem[];
  tableColumnsDefinition: TableColumnsDefinition<TItem>;
  onPageChange: (page: number) => void;
}

function getPagesCount(totalItems: number, itemsPerPage: number): number {
  return Math.ceil(totalItems / itemsPerPage);
}

function getVisiblePagesCount(maxVisiblePagesCount: number, pagesCount: number): number {
  return maxVisiblePagesCount <= pagesCount ? maxVisiblePagesCount : pagesCount;
}

export function PaginatedTable<TItem extends Identifiable>(props: Props<TItem>): JSX.Element {
  const {
    itemsPerPage,
    totalItemsCount,
    items,
    tableColumnsDefinition,
    onPageChange,
    maxVisiblePagesCount,
  } = props;

  const pagesCount = getPagesCount(totalItemsCount, itemsPerPage);
  return (
    <React.Fragment>
      <Table tableColumnsDefinition={tableColumnsDefinition} items={items} />
      <PaginatorContainer>
        <Paginator
          visiblePagesCount={getVisiblePagesCount(maxVisiblePagesCount, pagesCount)}
          pagesCount={pagesCount}
          onPageChange={onPageChange}
        />
      </PaginatorContainer>
    </React.Fragment>
  );
}
