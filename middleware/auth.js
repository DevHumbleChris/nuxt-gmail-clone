import { Client, Account } from "appwrite";
export default defineNuxtRouteMiddleware(async () => {
  const { account } = useAppwrite()
  try {
    const res = await account.get()
    console.log(res)
  } catch (err) {
    console.log(err.message)
  }
});
