import React from "react";
import "./styles/Services.css";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="services">
      <ServicesCard
        img_url="https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGF5bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title="Automated POS"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde velit necessitatibus architecto 
      voluptate voluptatem doloribus dignissimos, illum consequatur aspernatur dicta?"
        explore="Learn more"
      />
      <ServicesCard
        img_url="https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBheW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="Contactless Payment"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde velit necessitatibus architecto 
      voluptate voluptatem doloribus dignissimos, illum consequatur aspernatur dicta?"
        explore="Learn more"
      />
      <ServicesCard
        img_url="https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBheW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="Secured and Trusted Payment System"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde velit necessitatibus architecto 
      voluptate voluptatem doloribus dignissimos, illum consequatur aspernatur dicta?"
        explore="Learn more"
      />
    </div>
  );
};

export default Services;
