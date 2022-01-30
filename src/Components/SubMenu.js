import React, { useState, useRef, useEffect } from 'react';
import { useNavbarContext } from '../Context/NavbarContext';
import { useSearchingContext } from '../Context/SearchingContext';

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useNavbarContext();
  const { setSearchingAlgorithm } = useSearchingContext();

  const setAlgorithm = (e) => {
    setSearchingAlgorithm(e.target.textContent);
  };

  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');
  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    console.log(links);
    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length > 3) {
      setColumns('col-4');
    }
  }, [page, location, links]);
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { icon, label } = link;
            return (
              <button key={index} onClick={(e) => setAlgorithm(e)}>
                {icon}
                {label}
              </button>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
