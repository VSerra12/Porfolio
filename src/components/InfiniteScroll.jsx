/* eslint-disable react/prop-types */


const InfiniteScroll = ({ images, speed = 5000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(( image, idx ) => (
              <div className="image" key={idx}>
                <img src={image.src} alt={image.name} className="img" />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(( image, idx ) => (
              <div className="image" key={idx}>
                <img src={image.src} alt={image.name} className="img" />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(( image, idx ) => (
              <div className="image" key={idx}>
                <img src={image.src} alt={image.name} className="img" />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export default InfiniteScroll