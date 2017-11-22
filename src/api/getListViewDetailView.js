import global from '../components/global';

const getListViewDetailView = (nid) => (
  fetch(global.baseUrl + '/api/list-view/' + nid)
  .then((response) => response.json())
);

export default getListViewDetailView;
