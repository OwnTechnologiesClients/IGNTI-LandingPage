import React, { useState } from 'react'
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Goverment from '../../components/goverment/Goverment';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './Gallery.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Footers from '../../components/footers/Footers';
import Herosection from '../../components/herosection/Herosection';

// const images = [
//   "https://picsum.photos/2000/2000",
//   "https://picsum.photos/3000/1000",
//   "https://picsum.photos/4000/3000",
//   "https://picsum.photos/3000/1500",
//   "https://picsum.photos/1000/2500",
//   "https://picsum.photos/1500/2000",
// ]

const images = [
  "/img/banner-1.png",
  "/img/banner-2.png",
  "/img/banner-3.png",
  "https://picsum.photos/1500/2000",
  "https://picsum.photos/1400/2000",
  "https://picsum.photos/1600/2000",
  "https://picsum.photos/1600/2000",
  "https://picsum.photos/1700/2000",
  "https://picsum.photos/1800/2000",
]

const Gallery = () => {
  const [data, setData] = useState({ img: '', i: 0 })

  const viewImage = (img, i) => {
    setData({ img, i })

  }
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />

      {/* {data.img &&
        <div style={{
          width: "100%",
          height: "100vh",
          background: "black",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden"

        }}>
          <img src={data.img} style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }} />
        </div>
      } */}
      <div style={{ padding: '10px' }}>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter='20px'>
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: 'pointer' }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <Footers />
    </div>
  )
}

export default Gallery