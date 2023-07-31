import React, { useState } from 'react';
import './ImageSlider.css';


const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextImage = () => {
      if (current !== length - 1) {
        setCurrent(current + 1);
      }
    };
  
    const prevImage = () => {
      if (current !== 0) {
        setCurrent(current -1);
      }
    };
  
    if (!Array.isArray(images) || images.length <= 0) {
      return null;
    }

    return (
        <div>
            <div>
              <img src={`/images/desktop/${images[current]}`}/>
            </div>

            <div className="slider-nav">
              <div className="chevrons">
                  <span
                    onClick={prevImage}
                    className={`chevron-left ${current === 0 ? 'inactive' : 'active'}`}
                  >
                    &#8249;
                  </span>


                <div className="circle-menu">
                    {images.map((_, index) => (
                      <div
                        key={index}
                        className={`circle ${current === index ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                      ></div>
                    ))}
                </div>

                  <span
                    onClick={nextImage}
                    className={`chevron-right ${current === images.length - 1 ? 'inactive' : 'active'}`}
                  >
                    &#8250;
                  </span>          
              </div>
            </div>        
        </div>
    )
};

    
export default ImageSlider;



