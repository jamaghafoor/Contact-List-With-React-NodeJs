import axios from "axios";
import { BASE_URL } from "../utils";

export const getContactsAPI = async (accessToken) => {
  console.log("accessToken: ", accessToken)
  try {
    let config = {
      url: BASE_URL + `contacts`,
      method: "GET",
      headers:{
        "Accept": "*/*",
        "Authorization": `Bearer ${accessToken}`,
        "ngrok-skip-browser-warning": '1'
      }
      
    };
    const res = await axios(config);
    console.log("res: ", res)
    return res?.data;
  } catch (err) {
    console.log("err from getContactsAPI api", err);
  }
};

export const getCurrentUserAPI = async (accessToken) => {
  console.log("accessToken: ", accessToken)
  try {
    let config = {
      url: BASE_URL + `user/current`,
      method: "GET",
      headers:{
        Accept: "*/*",
        Authorization: `Bearer ${accessToken}`,
        'ngrok-skip-browser-warning': '1'
      }
      
    };
    const res = await axios(config);
    console.log("getCurrentUserAPI: ", res)
    return res?.data;
  } catch (err) {
    console.log("err from getCurrentUserAPI api", err);
  }
};

export const loginAPI = async (payload) => {
    try {
      let config = {
        url: BASE_URL + `user/login`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      };
      const res = await axios(config);
      console.log("Login response", res);
      return res?.data;
    } catch (err) {
      console.log("err filter-category-products api", err);
    }
  };

