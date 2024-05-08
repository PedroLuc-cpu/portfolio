import { API } from "@/axios/api";




async function GetUserGitHub(user: string) {
  try {
    const { data } = await API.get(`/users/${user}/`)
    return data
  } catch (error) {
    console.error(error)
  }

}


export const ServiceUserGitHub = {
  GetUserGitHub
}