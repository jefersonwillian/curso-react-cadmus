import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in/api/",
});

export const getUser = async () => {
    const { data } = await instance.get('users');
    return data.data;
}

export const createUser = async (body) => {
  const { data } = await instance.post("users", body);
  return data;
};
 