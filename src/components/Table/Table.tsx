import React from 'react';
import { TableColumnsDefinition } from './models';
import { TableHeaderCell } from './TableHeaderCell';
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import { getKeysAsNumbers, Identifiable } from '../shared';

export function Table<TItem extends Identifiable>(props: {
tableColumnsDefinition: TableColumnsDefinition<TItem>;
items: TItem[];
}): JSX.Element {
  const { tableColumnsDefinition, items } = props;
  return (
    <React.Fragment>
      <TableHeader>
        <TableRow>
          {getKeysAsNumbers(tableColumnsDefinition).map(k => (
            <TableHeaderCell key={k} width={tableColumnsDefinition[k].width}>
              {tableColumnsDefinition[k].title}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item: TItem) => (
          <TableRow key={item.id}>
            {getKeysAsNumbers(tableColumnsDefinition).map(k => (
              <TableCell key={k} width={tableColumnsDefinition[k].width}>
                {tableColumnsDefinition[k].renderCellItem(item)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </React.Fragment>
  );
}
