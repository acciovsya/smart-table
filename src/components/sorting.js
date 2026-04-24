import { sortCollection, sortMap } from '../lib/sort.js';

export function initSorting(columns) {
  return (data, state, action) => {
    let field = null;
    let order = null;

    if (action && action.name === 'sort') {
      field = action.dataset.field;
      action.dataset.value = sortMap[action.dataset.value];
      order = action.dataset.value;

      columns.forEach((column) => {
        if (column.dataset.field !== action.dataset.field) {
          column.dataset.value = 'none';
        }
      });
    } else {
      columns.forEach((column) => {
        if (column.dataset.sort !== 'none') {
          field = column.dataset.field;
          order = column.dataset.value;
        }
      });
    }

    return sortCollection(data, field, order);
  };
}
