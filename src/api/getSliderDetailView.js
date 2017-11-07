import global from '../components/global';

const getSliderDetailView = (nid) => (
  fetch(global.baseUrl + '/api/slider/' + nid)
  .then((response) => response.json())
);

export default getSliderDetailView;
