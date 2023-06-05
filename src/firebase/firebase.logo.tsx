import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { ProfessionalStructure } from "../models/professional";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const newImage = async (
  info: Partial<ProfessionalStructure>,
  file?: File
) => {
  if (!file) {
    info.image =
      "https://console.firebase.google.com/u/0/project/finalproyecthomeclick/storage/finalproyecthomeclick.appspot.com/files?hl=es";
    return info.image;
  }

  const storageRef = ref(storage, info.image);
  await uploadBytes(storageRef, file);

  const imgUrl = await getDownloadURL(storageRef);

  info.image = imgUrl;
};
