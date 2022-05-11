import Pagination from 'tui-pagination';
import refs from './refs';

const options = {
  centerAlign: true,
  page: 1,
  visiblePages: 5,
  itemsPerPage: 20,
  totalItems: 1000,
  firsItemClassName: 'first-child',
  lastItemClassName: 'last-child',
};

const pagination = new Pagination(refs.pagination, options);
