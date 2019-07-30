import { STATUS } from 'foremanReact/constants';

export const minProps = {
  getTableItems: jest.fn(),
  setSort: jest.fn(),
  getBreadcrumbs: jest.fn(),
  changeTablePage: jest.fn(),
  location: { pathname: '' },
  itemCount: 2,
  pagination: {
    page: 1,
    perPage: 10,
  },
  status: STATUS.RESOLVED,
  results: ['a', 'b'],
  sort: {
    by: 'q',
    order: 'w',
  },
};

export default {
  'render with minimal Props': {
    ...minProps,
  },
  'render with no results': {
    ...minProps,
    results: [],
    status: STATUS.RESOLVED,
  },
  'render with error Props': {
    ...minProps,
    results: ['a'],
    status: STATUS.ERROR,
  },
  'render with loading Props': {
    ...minProps,
    results: ['a'],
    status: STATUS.PENDING,
  },
};