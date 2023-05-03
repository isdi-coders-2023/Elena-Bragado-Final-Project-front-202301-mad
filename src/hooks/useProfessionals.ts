import { useDispatch, useSelector } from "react-redux";
import { ProfessionalStructure } from "../models/professional";
import { UserStructure } from "../models/user";
import {
  detailProfessionals,
  loadProfessionals,
} from "../reducer/professionals/professionals.slice";
import { ProfessionalsRepo } from "../services/professionals/professional.repo";
import { AppDispatch, RootState } from "../store/store";

export function useProfessionals(repo: ProfessionalsRepo) {
  // const professionalState = useSelector(
  //   (state: RootState) => state.professionalState
  // );
  const userState = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  // const tokenLocalStorage = localStorage.token;

  const professionals = async () => {
    try {
      const professionalServerResponse: any = await repo.readProfessionals(
        // userState.userLoggedToken,
        userState.token,
        "professionals"
        // professionalState.filter
      );

      await dispatch(loadProfessionals(professionalServerResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const loadDetailProffesional = async (id: string) => {
    try {
      const professionalServerResponse: any = await repo.readProffesionalById(
        userState.token,
        "professionals",
        id
      );

      await dispatch(detailProfessionals(professionalServerResponse.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const createProffesional = async (
    mockedNewProfessional: Partial<ProfessionalStructure>
  ) => {
    try {
      const professionalServerResponse: any = await repo.create(
        userState.token,
        mockedNewProfessional,
        "professionals"
      );
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const deleteDetail = async (id: string) => {
    try {
      await repo.delete(userState.token, id);
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    professionals,
    loadProfessionals,
    loadDetailProffesional,
    detailProfessionals,
    deleteDetail,
    createProffesional,
  };
}
