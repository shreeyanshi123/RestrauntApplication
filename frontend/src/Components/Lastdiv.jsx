import React, { useState } from 'react';
import './Lastdiv.css';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';
import img5 from './Images/img5.jpg';
import img6 from './Images/img6.jpg';

export const Lastdiv = () => {
  const buttons = ['Asian', 'Italian', 'Chinese', 'American'];

  const imagesData = {
    Asian: [
      { heading: 'Pumpkin Muffin', url: img1, description: 'A soft and warm pumpkin muffin with a delicious blend of spices.' },
      { heading: 'Baked Beans', url: img2, description: 'Slow-cooked beans with a smoky and savory flavor.' },
      { heading: 'Cheesy Bacon', url: img3, description: 'Crispy bacon paired with melted cheese for a rich and savory taste.' },
      { heading: 'Frozen Fruit', url: img4, description: 'A refreshing mix of frozen fruits, perfect for a light snack.' },
      { heading: 'Mixed Salad', url: img5, description: 'A healthy mix of fresh veggies tossed with a tangy dressing.' },
      { heading: 'Salmon Tacos', url: img6, description: 'Tender salmon served in a soft taco shell with zesty toppings.' },
    ],
    Italian: [
      { heading: 'Risotto', url: img1, description: 'Creamy risotto cooked to perfection with a delicate flavor.' },
      { heading: 'Pasta', url: img2, description: 'Fresh pasta in a rich, savory sauce that’s a true Italian classic.' },
      { heading: 'Gnocchi', url: img3, description: 'Soft and pillowy gnocchi served with a hearty sauce.' },
      { heading: 'Genovese', url: img4, description: 'A flavorful pesto sauce served with pasta in this Italian delight.' },
      { heading: 'Lasagne', url: img5, description: 'Layers of pasta, cheese, and meat sauce, baked to golden perfection.' },
      { heading: 'Parm Ham', url: img6, description: 'Thinly sliced Parma ham, an Italian delicacy known for its rich taste.' },
    ],
    Chinese: [
      { heading: 'Peeking Roasted', url: img1, description: 'A traditional Chinese dish with roasted duck, crispy skin, and tender meat.' },
      { heading: 'Kung Pao Chicken', url: img2, description: 'A stir-fried chicken dish with peanuts, vegetables, and a spicy sauce.' },
      { heading: 'Sweet & Sour Pork', url: img3, description: 'Crispy pork chunks coated in a sweet and tangy sauce.' },
      { heading: 'HotPot', url: img4, description: 'A delicious hot pot with a variety of meats and vegetables in a flavorful broth.' },
      { heading: 'DimSum', url: img5, description: 'Small steamed buns filled with delicious fillings like pork and shrimp.' },
      { heading: 'Dumplings', url: img6, description: 'Steamed dumplings with juicy fillings wrapped in soft dough.' },
    ],
    American: [
      { heading: 'Key Lime Pie', url: img1, description: 'A tangy and creamy dessert made from key limes and a buttery crust.' },
      { heading: 'Tater Tots', url: img2, description: 'Golden crispy potato tots, perfect as a snack or side dish.' },
      { heading: 'Cobb Salad', url: img3, description: 'A hearty salad with greens, chicken, bacon, and blue cheese.' },
      { heading: 'Pot Roast', url: img4, description: 'Slow-cooked roast beef served with potatoes and vegetables.' },
      { heading: 'Jerky', url: img5, description: 'Savory and tender dried meat, perfect for snacking.' },
      { heading: 'Fajitas', url: img6, description: 'Sizzling fajitas with grilled meat and peppers, served with warm tortillas.' },
    ],
  };

  const [category, setCategory] = useState(buttons[0]);

  const renderImages = (images) => images.map((image, index) => (
    <div key={index} className="image-container">
      <div className="image-upper">
        <div className="text2">
          <h2>{image.heading}</h2>
          <p>{image.description}</p>
        </div>

      </div>
      <div className="food-image" style={{ backgroundImage: `url(${image.url})` ,backgroundSize: 'cover'}}></div>
    </div>
  ));

  return (
    <div className="outer-container">
      <div className="text">
        <h2>Favourite Items</h2>
        <h3>For Unique Dining</h3>
      </div>
      <div className="btn" role="group">
        {buttons.map((button, index) => (
          <button
            key={index}
            type="button"
            className={`btn btn-success mybutton ${category === button ? 'active' : ''}`}
            onClick={() => setCategory(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="button-container">
        <div className="image2">{renderImages(imagesData[category]?.slice(0, 3))}</div>
        <div className="image2">{renderImages(imagesData[category]?.slice(3, 6))}</div>
      </div>
    </div>
  );
};
