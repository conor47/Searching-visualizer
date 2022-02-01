const modalInformation = [
  {
    page: 1,
    title: 'Welcome to algorithm vizualizer',
    p1: 'Continue reading to learn about some of this applications features or hit exit',
    p2: '',
    url: '',
  },
  {
    page: 2,
    title: 'What this application does',
    p1: 'This application was designed with the intention of visualizing the most popular pathfinding and sorting algorithms. Pathfinding algorithms seek out the shortest path between two vertices on a graph. In this application a vertice is represented as a cell on the grid and an edge represented as a 90 degree path between adjancet cells',
    p2: 'Sorting algorithms place elements of a list in sorted order, in this case that is in increasing order of height / numeric value',
    url: '',
  },
  {
    page: 3,
    title: 'Walls and Weights',
    p1: 'To draw a wall click and drag on an empty cell in the grid. To erase walls click and drag on a filled cell. Walls are not explored by the pathfinding algorithms.',
    p2: 'To draw a wall click and drag on an empty cell in the grid. To erase walls click and drag on a filled cell. Walls are not explored by the pathfinding algorithms.',
    url: '',
  },
  {
    page: 4,
    title: 'Moving start and end nodes',
    p1: 'The green node is the start node and the red node is the end node. You can move the start and end nodes by clicking and dragging their respective tiles.',
    p2: 'After the algorithm has finished feel free to drag the nodes around to visualize the algorithm instantly in varying positions',
    url: '',
  },
  {
    page: 5,
    title: 'The algorithms',
    p1: `Dijkstra's Algorithm (weighted): The most fundamental pathfinding algorithm, it uses path costs to guarantee the shortest path. Out of these algorithms, it is the most expensive to perform and often checks the most nodes.
    A* Search (weighted): Uses both path costs and heuristics to guarantee the shortest path while exploring less nodes than Dijkstra. Widely considered to be one of the best pathfinding algorithms.
    Best First Search (unweighted): Uses heuristics to explore nodes closer to the goal. Explores a low amount of nodes, but doesn't guarantee the shortest path.
    Breadth First Search (unweighted): A solid algorithm that guarantees the shortest path on unweighted grids, however it will fail to find the shortest path on weighted grids. Very cheap to perform on small grids.
    Depth First Search (unweighted): A poor algorithm for pathfinding that doesn't guarantee the shortest path.',
    p2: 'After the algorithm has finished feel free to drag the nodes around to visualize the algorithm instantly in varying positions`,
    url: '',
  },
  {
    page: 6,
    title: 'Sorting visualizer',
    p2: 'Use the navigation button in the top left corner to navigate the the sorting visualizer. Here you will be able to see some of the most common sorting algorithms in action,',
    p2: 'Use the sliders to change the size of the array and the speed of the algorithm',
    url: '',
  },
];

export default modalInformation;
