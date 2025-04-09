import React, { useState } from 'react';
import Modal from './Modal';

const galleryItems = [
  { src: '/images/skull.png', title: 'Skull on fire' },
  { src: '/images/battower.png', title: 'Bat Tower' },
  { src: '/images/Untitled design.jpg', title: 'Tesla' },
  { src: '/images/2seater.png', title: 'Pod' },
  { src: '/images/airlock.png', title: 'Airlock' },
  { src: '/images/arc reactor.png', title: 'Arc Reactor' },
  { src: '/images/bdsc.png', title: 'Storage' },
  { src: '/images/bg.png', title: 'Flower' },
  { src: '/images/constr bot.png', title: 'Construction Robot' },
  { src: '/images/cube.png', title: 'Cube' },
  { src: '/images/dhobi3.png', title: 'Machine' },
  { src: '/images/docking port.png', title: 'Docking Port' },
  { src: '/images/ect. construction.png', title: 'Construction Robot' },
  { src: '/images/ferrari.png', title: 'Ferrari' },
  { src: '/images/finish.png', title: 'Bot' },
  { src: '/images/gamechar.png', title: 'Character' },
  { src: '/images/gearengine.png', title: 'Rotor Engine' },
  { src: '/images/guitar.png', title: 'Guitar' },
  { src: '/images/gun.png', title: 'Gun' },
  { src: '/images/health.png', title: 'Health Bot' },
  { src: '/images/communincation.png', title: '' },
  { src: '/images/impala.png', title: 'Chevy Impala' },
  { src: '/images/intconst.png', title: 'Robot' },
  { src: '/images/jffn.png', title: '' },
  { src: '/images/mb.png', title: 'Mono Bike' },
  { src: '/images/oldcomp.png', title: 'Computer' },
  { src: '/images/piston part.png', title: 'Pistons' },
  { src: '/images/product.png', title: '' },
  { src: '/images/renderfinallancerevo-2.jpg', title: 'Lancer Evo' },
  { src: '/images/sally carrera.png', title: 'Sally Cerrera' },
  { src: '/images/Screenshot 2023-03-19 at 1.05.45 PM.png', title: '' },
  { src: '/images/Screenshot 2023-05-10 at 5.15.25 AM.png', title: 'Sword' },
  { src: '/images/spaceship in 8k quality.png', title: 'Spaceship' },
  { src: '/images/untitleddxgfxg.png', title: '' },
  { src: '/images/V12NEW.png', title: 'V12 Engine' },
  { src: '/images/well.png', title: 'Mystic Well' },


  // ... additional items as needed
];

function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const openModal = (item) => {
    setActiveItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveItem(null);
    setModalOpen(false);
  };

  return (
    <section id="gallery">
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index} onClick={() => openModal(item)}>
            <img src={item.src} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && <Modal item={activeItem} closeModal={closeModal} />}
    </section>
  );
}

export default Gallery;


