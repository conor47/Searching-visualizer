import { dfs } from '../Algorithms/dfs';
import { astar, getShortestPathAStar } from '../Algorithms/astar';
import { bfs } from '../Algorithms/bfs';
import {
  bidrectionalBFS,
  getShortestPathBiDirectional,
} from '../Algorithms/bidirectionalBFS';
import { dijkstra } from '../Algorithms/dijkstra';
import { getShortestPath, animatePath } from '../Ulilities/gridFunctions';

const algorithms = [
  {
    name: 'dfs',
    algorithm: dfs,
    animatePath,
    shortestPath: animatePath,
  },
  {
    name: 'bfs',
    algorithm: bfs,
    animatePath,
    shortestPath: getShortestPath,
  },
  {
    name: 'astar',
    algorithm: astar,
    animatePath,
    shortestPath: getShortestPathAStar,
  },
  {
    name: 'bidirectionalbfs',
    algorithm: bidrectionalBFS,
    animatePath,
    shortestPath: getShortestPathBiDirectional,
  },
  {
    name: 'dijkstra',
    algorithm: dijkstra,
    animatePath,
    shortestPath: getShortestPath,
  },
];

export default algorithms;
