import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'algorithms',
    links: [
      { label: 'BFS', icon: <FaCreditCard />, menu: 'algos' },
      { label: 'DFS', icon: <FaCreditCard />, menu: 'algos' },
      { label: 'Dijkstra', icon: <FaCreditCard />, menu: 'algos' },
      { label: 'AStar', icon: <FaCreditCard />, menu: 'algos' },
      { label: 'BidirectionalBFS', icon: <FaCreditCard />, menu: 'algos' },
    ],
  },

  {
    page: 'speed',
    links: [
      { label: 'fast', icon: <FaBriefcase />, menu: 'speed' },
      { label: 'medium', icon: <FaBriefcase />, menu: 'speed' },
      { label: 'slow', icon: <FaBriefcase />, menu: 'speed' },
    ],
  },
  {
    page: 'terrain',
    links: [
      { label: 'random', icon: <FaBriefcase />, menu: '<terrain></terrain>' },
    ],
  },
  {
    page: 'clear',
    links: [
      { label: 'clear all', icon: <FaBriefcase />, menu: 'clear' },
      { label: 'clear walls', icon: <FaBriefcase />, menu: 'controls' },
      { label: 'clear path', icon: <FaBriefcase />, menu: 'controls' },
    ],
  },
];

export default sublinks;
