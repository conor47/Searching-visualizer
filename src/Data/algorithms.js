import { dfs } from '../Algorithms/dfs';
import { astar, getShortestPathAStar } from '../Algorithms/astar';
import { bfs } from '../Algorithms/bfs';
import {
  bidrectionalBFS,
  getShortestPathBiDirectional,
} from '../Algorithms/bidirectionalBFS';
import { dijkstra } from '../Algorithms/dijkstra';
import { getShortestPath } from '../Ulilities/gridFunctions';

const algorithms = [
  {
    name: 'dfs',
    algorithm: dfs,
    shortestPath: null,
  },
  {
    name: 'bfs',
    algorithm: bfs,
    shortestPath: getShortestPath,
  },
  {
    name: 'astar',
    algorithm: astar,
    shortestPath: getShortestPathAStar,
  },
  {
    name: 'bidirectionalbfs',
    algorithm: bidrectionalBFS,
    shortestPath: getShortestPathBiDirectional,
  },
  {
    name: 'dijkstra',
    algorithm: dijkstra,
    shortestPath: getShortestPath,
  },
];

export default algorithms;
