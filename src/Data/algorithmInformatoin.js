const sublinks = [
  {
    name: 'dijkstra',
    text: 'Dijktras algorithm is an algorithm for finding the shortest path in a graph.',
    complexity:
      'The time complexity of Dijkstras is O(V + ELogV) where V is the number of vertices in the graph and E the number of edges',
    url: 'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm',
  },
  {
    name: 'dfs',
    text: 'Depth first search is a path finding algorithm. It does not guarantee the shortest path',
    complexity:
      'The time complexity of Depth first search is O(V) where V is the number of vertices in the graph',
    url: 'https://en.wikipedia.org/wiki/Depth-first_search',
  },
  {
    name: 'bfs',
    text: 'Breadth first search is a path finding algorithm. It does guarantee the shortest path',
    complexity:
      'The time complexity of breadth first search is O(V + E) where V is the number of vertices in the graph and E the number of edges',
    url: 'https://en.wikipedia.org/wiki/Breadth-first_search',
  },
  {
    name: 'astar',
    text: 'A* is a path finding algorithm. It guarantess the shorest path.',
    complexity:
      'The time complexity of A* is dependent on the heuristic used. In general it is O(|V| + |E|) where V is the number of vertices in the graph and E the number of edges.',
    url: 'https://en.wikipedia.org/wiki/A*_search_algorithm',
  },
  {
    name: 'bidirectionalbfs',
    text: 'Bidirectional breadth first seach is path finding algorith. It gurarantees the shortest path',
    complexity:
      'The time complexity of bidirectional breadth first search is O(V + E) where V is the number of vertices in the graph and E the number of edges',
    url: 'https://en.wikipedia.org/wiki/Bidirectional_search',
  },
];

export default sublinks;
