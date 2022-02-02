const sublinks = [
  {
    page: 'algorithms',
    links: [
      { label: 'BFS', menu: 'algos' },
      { label: 'DFS', menu: 'algos' },
      { label: 'Dijkstra', menu: 'algos' },
      { label: 'AStar', menu: 'algos' },
      { label: 'BidirectionalBFS', menu: 'algos' },
    ],
  },

  {
    page: 'speed',
    links: [
      { label: 'fast', menu: 'speed' },
      { label: 'medium', menu: 'speed' },
      { label: 'slow', menu: 'speed' },
    ],
  },
  {
    page: 'terrain',
    links: [
      { label: 'random', menu: 'terrain' },
      { label: 'recursive', menu: 'terrain' },
    ],
  },
  {
    page: 'clear',
    links: [
      { label: 'clear all', menu: 'controls' },
      { label: 'clear walls', menu: 'controls' },
      { label: 'clear path', menu: 'controls' },
    ],
  },
];

export default sublinks;
