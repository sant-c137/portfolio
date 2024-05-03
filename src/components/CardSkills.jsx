import './CardSkills.css';

export const CardSkills = ({ image, name, color}) => {
  return (
    <>
      <div className="Card-div" style={{ '--color': color }}>
        <img src={image} alt={name} />
        <span>{name}</span>
      </div>
    </>
  );
};

export default CardSkills;
