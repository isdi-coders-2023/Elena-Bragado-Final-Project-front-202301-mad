import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent } from "react";
import { RootState } from "../../store/store";
import { ProfessionalsRepo } from "../../services/professionals/professional.repo";
import { useProfessionals } from "../../hooks/useProfessionals";
import "./professionaldetail.css";

export default function ProfessionalDetail() {
  const detailsObject = useSelector(
    (state: RootState) => state.professionalState.details
  );
  const repoProfessional = new ProfessionalsRepo();
  const { deleteDetail } = useProfessionals(repoProfessional);
  const { createProffesional } = useProfessionals(repoProfessional);
  const navigate = useNavigate();

  const handlerClickDelete = (event: SyntheticEvent) => {
    const valueToDetail =
      event.currentTarget.ariaLabel === null
        ? "123"
        : event.currentTarget.ariaLabel;

    deleteDetail(valueToDetail);
    navigate("/professionals");
  };
  const handlerClickCreateNewProfessional = (event: SyntheticEvent) => {
    const mockedNewProfessional = [
      {
        email: "new@sample.com",
        company: "New,SL",
        category: "New",
        assessment: 0,
        telephone: 123,
        description: "Creado",
        image:
          "data:image/png;base64,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",
      },
    ];

    createProffesional(mockedNewProfessional[0]);
    navigate("/professionals");
  };

  return (
    <>
      <article className="homepage__list">
        <ul className="homepage__ul">
          <li key={detailsObject.id}>
            <div className="homepage__home">
              <div>
                <img
                  className="homepage__image"
                  src={detailsObject.image}
                  alt={detailsObject.company}
                />
              </div>
              <div className="homepage_info">
                <p>Company: {detailsObject.company}</p>
                <p>Email: {detailsObject.email}</p>
                <p>Telephone: {detailsObject.telephone}</p>
                <p>Description: {detailsObject.description}</p>

                <button className="homepage__edit">Edit</button>
                <button
                  className="homepage__delete"
                  onClick={handlerClickDelete}
                  aria-label={detailsObject.id}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </>
  );
}
