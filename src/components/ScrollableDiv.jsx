import React, { useRef } from 'react';

const ScrollableDiv = () => {
  const divRef = useRef(null);

  const handleScroll = (scrollAmount) => {
    if (divRef.current) {
      divRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <>
    <div
      ref={divRef}
      style={{
        width: '300px',
        height: '200px',
        overflowX: 'auto',
        overflowY: 'hidden', // Hide vertical scrollbar
        border: '1px solid #ccc',
      }}
    >
      {/* Your content goes here */}
      <p style={{ whiteSpace: 'nowrap' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        cursus odio eu nisl cursus, eu aliquam turpis malesuada. Nulla facilisi.
        Integer maximus, risus eget vulputate consectetur, velit felis
        consectetur odio, id ultricies arcu ex eget nunc.
      </p>

 
    </div>
         {/* Button to scroll left horizontally */}
         <button onClick={() => handleScroll(-50)}>Scroll Left</button>

         {/* Button to scroll right horizontally */}
         <button onClick={() => handleScroll(50)}>Scroll Right</button>

         </>
  );
};

export default ScrollableDiv;
