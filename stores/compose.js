export const useComposeStore = defineStore("compose", () => {
  const isComposingMail = useState("isComposingMail", () => false);
  const isMinimize = useState("isMinize", () => false);
  const isMaximize = useState("isMaximize", () => false);
  const isFullWidth = useState("isFullWidth", () => false);
  const isSetCarbonCopy = useState("carbonCopy", () => false);
  const isSetBlindCarbonCopy = useState("blindCarbonCopy", () => false);
  const isAddImage = useState("isAddImage", () => false);

  const openAddImageModal = () => {
    isAddImage.value = !isAddImage.value;
  };

  const maximize = () => {
    isMaximize.value = !isMaximize.value;
    isFullWidth.value = !isFullWidth.value;
  };

  const minimize = () => {
    isMinimize.value = !isMinimize.value;
    isFullWidth.value = false;
    isMaximize.value = false;
  };
  const composeMail = () => {
    isComposingMail.value = !isComposingMail.value;
    if (!isComposingMail.value) {
      isMaximize.value = false;
      isMinimize.value = false;
      isFullWidth.value = false;
      isSetCarbonCopy.value = false;
      isSetBlindCarbonCopy.value = false;
    }
  };

  const fullWidth = () => {
    isFullWidth.value = !isFullWidth.value;
    isMaximize.value = !isMaximize.value;
    isMinimize.value = false;
  };

  const setCarbonCopy = () => {
    isSetCarbonCopy.value = true;
    console.log(isSetCarbonCopy.value);
  };

  const setBlindCarbonCopy = () => {
    isSetBlindCarbonCopy.value = true;
  };

  return {
    isComposingMail,
    isMinimize,
    isMaximize,
    isFullWidth,
    maximize,
    minimize,
    composeMail,
    fullWidth,
    isSetCarbonCopy,
    isSetBlindCarbonCopy,
    setCarbonCopy,
    setBlindCarbonCopy,
    openAddImageModal,
    isAddImage,
  };
});
