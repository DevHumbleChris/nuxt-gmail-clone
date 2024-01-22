export const useMailboxesStore = defineStore("mailboxesStore", () => {
  const mailboxes = useState("mailboxes", () => null);
  const isMailChecked = useState("isMailChecked", () => false);
  const userCheckedMails = useState("userCheckedMails", () => []);
  const reportStatus = useState("reportStatus", () => "");

  const updateReportStatus = (payload) => {
    reportStatus.value = payload;
  };

  const updateIsMailChecked = (payload) => {
    isMailChecked.value = payload;
  };

  const updateUserCheckedMails = (payload) => {
    userCheckedMails.value = payload;
  };

  const setMailboxes = (payload) => {
    mailboxes.value = payload;
  };

  return {
    mailboxes,
    setMailboxes,
    isMailChecked,
    updateIsMailChecked,
    updateUserCheckedMails,
    userCheckedMails,
    reportStatus,
    updateReportStatus,
  };
});
