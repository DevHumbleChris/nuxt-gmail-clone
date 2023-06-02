export const useComposeStore = defineStore("compose", () => {

  const isComposingMail = useState("isComposingMail", () => false);
  const isMinimize = useState("isMinize", () => false);
  const isMaximize = useState("isMaximize", () => true);
  const isFullWidth = useState("isFullWidth", () => false);

  const maximize = () => {
    isMaximize.value = !isMaximize.value
    isMinimize.value = !isMinimize.value
  }
  
  const minimize = () => {
    isMinimize.value = !isMinimize.value
    isMaximize.value = !isMaximize.value
  }
  const composeMail = () => {
    isComposingMail.value = !isComposingMail.value
  }

  return {
    isComposingMail,
    isMinimize,
    isMaximize,
    isFullWidth,
    maximize,
    minimize,
    composeMail
  };
});
