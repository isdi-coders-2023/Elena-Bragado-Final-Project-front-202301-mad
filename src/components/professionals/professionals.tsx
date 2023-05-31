import "./professionals.css";
import { SyntheticEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { Card } from "../../components/card/card";

import { useNavigate } from "react-router-dom";
import { ProfessionalsRepo } from "../../services/professionals/professional.repo";
import { RootState } from "../../store/store";

import { ProfessionalStructure } from "../../models/professional";
import { useProfessionals } from "../../hooks/useProfessionals";

export default function ProfessionalsPage() {
  const [renderNumber, setRenderNumber] = useState(1);
  console.log(renderNumber);
  const galleryArray = useSelector(
    (state: RootState) => state.professionalState.filterProfessionals
  );

  const repoProfessional = new ProfessionalsRepo();
  const { professionals, loadDetailProffesional } =
    useProfessionals(repoProfessional);

  useEffect(() => {
    if (renderNumber === 1) professionals();
    setRenderNumber(renderNumber + 1);
    console.log(renderNumber);
  }, []);

  const navigate = useNavigate();

  const handlerClick = (event: SyntheticEvent) => {
    const valueToDetail =
      event.currentTarget.ariaLabel === null
        ? "123"
        : event.currentTarget.ariaLabel;

    loadDetailProffesional(valueToDetail);
    navigate("/professionals/details");
  };

  return (
    <>
      <div className="professionalsPage__container">
        <label>
          {"Category"}
          <select title="selectCategory">
            <option>Carpenter</option>
            <option>Electrician</option>
            <option>Plumber</option>
          </select>
        </label>
        <ul className="professionalsPage__list">
          {galleryArray.map((item: Partial<ProfessionalStructure>) => (
            <li className="professionalsPageCard" key={item.id}>
              <div className="professionalsPageCard__imageContainer">
                <img
                  className="professionalsPageCard__image"
                  src={item.image}
                  alt={`${item.company} card`}
                ></img>
              </div>
              <div onClick={handlerClick} aria-label={item.id}>
                <span className="professionalsPageCard__viewDetails">
                  View Details
                </span>
              </div>
              <div className="professionalsPageCard__shortDescription">
                <div>Company: {item.company}</div>
                Assessment: {item.assessment}
                <div>Email: {item.email}</div>
                <div>Telephone: {item.telephone}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
