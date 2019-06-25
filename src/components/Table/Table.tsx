import React from 'react';
import { withTheme } from 'styled-components';
import { TableColumnsDefinition } from './models';
import { TableHeaderCell } from './TableHeaderCell';
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import {
  getKeysAsNumbers, Identifiable, isLast, shadowed, withBottomPadding,
} from '../shared';
import { styled, Themable } from '../themes';
import { VerticalDivider } from '../VerticalDivider';

const PaddingContainer = styled.div`
  ${props => withBottomPadding(props.theme)}
`;

const MainContainer = styled.div`
  border-radius: ${props => props.theme.table.borderRadius}px;
  border-width: ${props => props.theme.table.borderWidth}px;
  border-style: solid;
  border-color: ${props => props.theme.table.borderColor};
  overflow: hidden;
  ${shadowed}
`;

interface Props<TItem> {
  tableColumnsDefinition: TableColumnsDefinition<TItem>;
  items: TItem[];
}

export function TableInner<TItem extends Identifiable>(
  props: Props<TItem> & Themable,
): JSX.Element {
  const { tableColumnsDefinition, items, theme } = props;
  const columnKeys = getKeysAsNumbers(tableColumnsDefinition);
  return (
    <PaddingContainer>
      <MainContainer>
        <TableHeader>
          <TableRow>
            {columnKeys.map((k, colIndex) => (
              <React.Fragment key={k}>
                <TableHeaderCell width={tableColumnsDefinition[k].width}>
                  {tableColumnsDefinition[k].title}
                </TableHeaderCell>
                {!isLast(columnKeys, colIndex) && (
                  <VerticalDivider
                    color={theme.table.borderColor}
                    width={theme.table.borderWidth}
                  />
                )}
              </React.Fragment>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item: TItem, rowIndex: number) => (
            <TableRow key={item.id} isOdd={rowIndex % 2 === 1}>
              {columnKeys.map((k, colIndex: number) => (
                <React.Fragment key={k}>
                  <TableCell width={tableColumnsDefinition[k].width}>
                    {tableColumnsDefinition[k].renderCellItem(item)}
                  </TableCell>
                  {!isLast(columnKeys, colIndex) && (
                    <VerticalDivider
                      color={theme.table.borderColor}
                      width={theme.table.borderWidth}
                    />
                  )}
                </React.Fragment>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MainContainer>
    </PaddingContainer>
  );
}

export function Table<TItem extends Identifiable>(props: Props<TItem>): JSX.Element {
  const TableWithTheme = withTheme(TableInner);
  const { tableColumnsDefinition } = props;
  return (
    <TableWithTheme
      {...props}
      tableColumnsDefinition={tableColumnsDefinition as TableColumnsDefinition<Identifiable>}
    />
  );
}
