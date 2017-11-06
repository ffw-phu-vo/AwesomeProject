import global from '../components/global';

const getBannerView = () => (
  fetch(global.baseUrl + '/api/slider')
  .then((response) => response.json())
);

export default getBannerView;
