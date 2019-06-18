import React from 'react';

export type TableColumnsDefinition<TItem> = {
  [key: number]: { width: number; title: string; renderCellItem: (item: TItem) => JSX.Element };
};
