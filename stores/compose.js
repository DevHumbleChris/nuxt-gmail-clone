export const useComposeStore = defineStore("compose", () => {
  const isComposingMail = useState("isComposingMail", () => false);
  const isMinimize = useState("isMinize", () => false);
  const isMaximize = useState("isMaximize", () => false);
  const isFullWidth = useState("isFullWidth", () => false);

  const maximize = () => {
    isMaximize.value = !isMaximize.value;
    isFullWidth.value = !isFullWidth.value;
  };

  const minimize = () => {
    isMinimize.value = !isMinimize.value;
  };
  const composeMail = () => {
    isComposingMail.value = !isComposingMail.value;
    if (!isComposingMail.value) {
      isMaximize.value = false;
      isMinimize.value = false;
      isFullWidth.value = false;
    }
  };

  const fullWidth = () => {
    isFullWidth.value = !isFullWidth.value;
    isMaximize.value = !isMaximize.value;
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
  };
});
