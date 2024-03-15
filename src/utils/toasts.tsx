import { Slide, toast } from "react-toastify";

export const showSuccessMessage = (message: string, toastId: string) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 50000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
    toastId,
    className: toastId,
  });
};
