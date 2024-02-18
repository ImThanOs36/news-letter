import React, { useRef,useState } from 'react';
import CategoryCard from './CategoryCard';

function Categories() {
  const divRef = useRef(null);
  const[vissible, setVissible] = useState(false)

  const toggleVisible=()=>{

    setVissible(vissible)
  }

  const handleScroll = (scrollAmount) => {
    if (divRef.current) {
      divRef.current.scrollLeft += scrollAmount;
    }
    toggleVisible();
  };

  return (
    <>
      <div className="container" >
        <div className="categories__main">
        <button className={`${vissible ? "visible" : "hidden"}`} onClick={() => handleScroll(-250)}><i className="fa-solid fa-angle-left"></i></button>
          <div
            className="categories"
            ref={divRef}
            style={{
              width: '100%', // Set the width to 100% to allow horizontal scrolling
              overflowX: 'auto',
              overflowY: 'hidden', // Hide vertical scrollbar
              whiteSpace: 'nowrap', // Prevent items from wrapping to the next line
            }}
          >
            <CategoryCard name={"#Food1"} />
            <CategoryCard name={"#Food2"} />
            <CategoryCard name={"#Food3"} />
            <CategoryCard name={"#Food4"} />
            <CategoryCard name={"#Food5"} />
            <CategoryCard name={"#Food6"} />
            <CategoryCard name={"#Food7"} />
            <CategoryCard name={"#Food8"} />
            <CategoryCard name={"#Food9"} />



          </div>


            
              {/* Button to scroll left horizontally */}
       

              {/* Button to scroll right horizontally */}
              <button onClick={() => handleScroll(300)}><i class="fa-solid fa-angle-right"></i></button>
            


        </div>
      </div>
    </>
  );
}

export default Categories;
