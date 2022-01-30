import { dfs } from '../Algorithms/Searching/dfs';
import { astar, getShortestPathAStar } from '../Algorithms/Searching/astar';
import { bfs } from '../Algorithms/Searching/bfs';
import {
  bidrectionalBFS,
  getShortestPathBiDirectional,
} from '../Algorithms/Searching/bidirectionalBFS';
import { dijkstra } from '../Algorithms/Searching/dijkstra';
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
