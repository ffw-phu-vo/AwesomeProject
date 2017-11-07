import global from '../components/global';

const getSliderView = () => (
  fetch(global.baseUrl + '/api/slider')
  .then((response) => response.json())
);

export default getSliderView;
