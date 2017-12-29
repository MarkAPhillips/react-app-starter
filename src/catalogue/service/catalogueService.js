import { get } from '../../common/services/resource';

export default function getCatalogues() {
  const resource = '/catalogue';
  return get(resource);
}
