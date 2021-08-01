import React from "react";
import { useMediaQuery } from "react-responsive";
import Menu from "./slideMenu";
import NavBar from "./navBar";
import "./css/facilities.css";
import Footer from "./footer";

function PhotosPage() {
 const isMobile = useMediaQuery({ query: "(max-width:725px)" });
 return (
  <div>
   {isMobile ? <Menu /> : <NavBar />}
   <div class="container">
    <div class="gallery">
     <figure class="gallery__item gallery__item-1">
      <img
       src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843913/Makarios/pexels-joa%CC%83o-jesus-1094871_bepucv.jpg"
       class="gallery__img"
       alt="Image 1"
      />
     </figure>
     <figure class="gallery__item gallery__item-2">
      <img
       src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627846834/Makarios/pexels-sam-lin-4566527_j9l2ch.jpg"
       class="gallery__img"
       alt="Image 1"
      />
     </figure>
     <figure class="gallery__item gallery__item-3">
      <img
       src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627846861/Makarios/pexels-kampus-production-7551634_zqrshy.jpg"
       class="gallery__img"
       alt="Image 1"
      />
     </figure>
     <figure class="gallery__item gallery__item-4">
      <img
       src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627846866/Makarios/pexels-andrea-piacquadio-3785693_sgwpjt.jpg"
       class="gallery__img"
       alt="Image 1"
      />
     </figure>
     <figure class="gallery__item gallery__item-5">
      <img
       src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627846874/Makarios/pexels-mart-production-7329520_ii0wvb.jpg"
       class="gallery__img"
       alt="Image 1"
      />
     </figure>
     <figure class="gallery__item gallery__item-6">
      <img
       src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843914/Makarios/pexels-pixabay-257360_ntniyr.jpg"
       class="gallery__img"
       alt="Image 1"
      />
     </figure>
     <figure class="gallery__item gallery__item-7">
      <img
       src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843926/Makarios/markus-spiske-g5ZIXjzRGds-unsplash_q3uhd5.jpg"
       class="gallery__img"
       alt="Image 1"
      />
     </figure>
     <figure class="gallery__item gallery__item-8">
      <img
       src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843928/Makarios/pexels-kampus-production-7551608_x8bfg3.jpg"
       class="gallery__img"
       alt="Image 1"
      />
     </figure>
     <figure class="gallery__item gallery__item-9">
      <img
       src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1627843942/Makarios/pexels-mike-126271_iqmnqc.jpg"
       class="gallery__img"
       alt="Image 1"
      />
     </figure>
    </div>
   </div>
  </div>
 );
}

export default PhotosPage;
