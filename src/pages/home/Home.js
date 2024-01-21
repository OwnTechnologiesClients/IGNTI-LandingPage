import React, { useState, useEffect } from "react";
import Footers from "../../components/footers/Footers";
import Goverment from "../../components/goverment/Goverment";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import Modal from "react-modal";
import Herosection from "../../components/herosection/Herosection";
import Igt from "../../components/igt/Igt";
import Form from "../../components/from/Form";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    setModalIsOpen(true);
  }, []);
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            zIndex: 1000,
            background: "none",
            pointerEvents: "none"

          },
          content: {
            position: "relative",
            padding: 0,
            border: "none",
            background: "none",
            pointerEvents: "auto"

          },
        }}
      >
        <Form closeModal={closeModal} />
      </Modal>
      <Igt />
      <Goverment />
      <Footers />
    </div>
  );
};

export default Home;
