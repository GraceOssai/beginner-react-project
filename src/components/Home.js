import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import "./styles/Home.css";

const Home = () => {
  const [showModal, setShowModal] = React.useState(false)

  function toggleModal(){
    setShowModal(true)
  }
  
  
  const inLineStyle = {
    display : showModal ? 'flex' : 'none'
  }


  function handleModal(){
    setShowModal(false)
  }

  // The reason for this event.stopPropagation is this.... before, onClick of both the home__modal and home__modal__container, the display would be none but that's not what we want...we want to narrow it to only the parent div (home__modal). This is the only one we want to click and it displays none..not the both. This is what we call event propagation/bubbling....The event bubbling bubbled down from the parent to the child but with the event.stop propagation, it will not bubble to the child but end at the parent div.
  const handleEventPropagation = (e) => {
    e.stopPropagation()
  }
  return (
    <div className="home">
      <div className="home__modal" style={inLineStyle} onClick={handleModal}>
        <div className="home__modal__container" onClick={handleEventPropagation}>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            officia laboriosam cupiditate, fuga voluptates, non quia debitis
            aliquid eveniet alias soluta veritatis vero, corporis sint culpa
            quibusdam neque nam. Natus accusamus voluptates assumenda
            repellendus fugiat quia sit quasi quos voluptatum. Qui a maiores
            corrupti dicta dolorem soluta eveniet necessitatibus. Porro debitis
            quisquam error quidem suscipit et magnam in recusandae, iste,
            consectetur ut at quaerat consequatur obcaecati? Eaque vitae
            doloremque nisi at, esse voluptas rem quas aspernatur voluptatum
            dolor ipsum, vel quia, illo consequatur corrupti quaerat natus non
            dolores quam! Maiores, culpa officia? Nam quo tempora commodi, dicta
            facilis quae esse. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae vitae, fugiat optio, hic reiciendis
            facere assumenda aliquam exercitationem quo ab unde modi placeat
            praesentium tenetur pariatur autem quaerat odio, at provident amet
            corporis neque eos! Nostrum temporibus voluptatem repellendus minima
            laudantium eum tempora deserunt nesciunt inventore, facere tempore
            unde, quas quibusdam nobis ab voluptate dicta illo ipsa sapiente
            ipsum quam illum harum ratione. Placeat dolores inventore ratione
            eligendi cupiditate tenetur libero mollitia iusto obcaecati
            aspernatur magni quaerat, dignissimos deleniti assumenda ullam quis
            officia rem quas. Quibusdam fugit quo illum ullam. Blanditiis
            possimus assumenda rerum sed maxime velit quo ex esse!
          </p>
        </div>
      </div>
      <Hero toggleShowModal={toggleModal}/>
      <Services />
    </div>
  );
};

export default Home;
