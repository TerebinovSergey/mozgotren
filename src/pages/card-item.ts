import { DataGame } from '../types/types';

function renderCardItem({ image, id }: DataGame) {
  return `
  <div class="card-item">
  <img src="${image}" alt="image" class="card-image" />
  

  <div>${id}</div>>
  </div>
  `;
}

export default renderCardItem;
