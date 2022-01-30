import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'algorithms',
    links: [
      { label: 'BFS', icon: <FaCreditCard /> },
      { label: 'DFS', icon: <FaCreditCard /> },
      { label: 'Dijkstra', icon: <FaCreditCard /> },
      { label: 'AStar', icon: <FaCreditCard /> },
      { label: 'BidirectionalBFS', icon: <FaCreditCard /> },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;
