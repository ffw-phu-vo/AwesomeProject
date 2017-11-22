import global from '../components/global';

const getListViewView = (page) => (
  fetch(global.baseUrl + '/api/list-view?page=' + page)
  .then((response) => response.json())
);

export default getListViewView;
