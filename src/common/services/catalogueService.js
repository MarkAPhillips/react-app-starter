import { get } from './resource';

export default function getCatalogue(name) {
  const resource = '/catalogue';
  return get(resource, { name });
}
