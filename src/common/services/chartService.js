import { get } from './resource';

export default function getChartData() {
  const resource = '/chart';
  return get(resource);
}
