import global from '../components/global';

const getBannerView = () => (
  fetch(global.baseUrl + 'api/banner')
  .then((response) => response.json())
);

export default getBannerView;
