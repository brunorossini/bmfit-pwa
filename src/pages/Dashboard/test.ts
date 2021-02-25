import { useToast } from "../../context/toast";

const { addToast } = useToast();

export const chamaToast = () => {
  addToast({
    text: "Olá mundo!",
  });
};
