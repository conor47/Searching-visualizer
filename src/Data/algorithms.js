import { dfs } from '../Algorithms/dfs';
import { astar } from '../Algorithms/astar';
import { bfs } from '../Algorithms/bfs';
import { bidrectionalBFS } from '../Algorithms/bidirectionalBFS';
import { dijkstra } from '../Algorithms/dijkstra';

const algorithms = [
  {
    name: 'dfs',
    algorithm: dfs,
  },
  {
    name: 'bfs',
    algorithm: bfs,
  },
  {
    name: 'astar',
    algorithm: astar,
  },
  {
    name: 'bidirectionalbfs',
    algorithm: bidrectionalBFS,
  },
  {
    name: 'dijkstra',
    algorithm: dijkstra,
  },
];

export default algorithms;
