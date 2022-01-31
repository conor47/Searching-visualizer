import { FaRegHandPointUp } from 'react-icons/fa';
import { AiOutlineDrag } from 'react-icons/ai';
import { BiRun } from 'react-icons/bi';
import React from 'react';
const sublinks = [
  {
    text: 'Click in an empty cell to draw a wall',
    icon: <FaRegHandPointUp />,
  },
  {
    text: 'Grab and drag the start and end nodes to move them around',
    icon: <AiOutlineDrag />,
  },
  {
    text: 'Select an algorithm, select a speed and hit Run !',
    icon: <BiRun />,
  },
];

export default sublinks;
