import { apiRequest } from "./apiHelper";

export const registerUser = (params) =>
  apiRequest("POST", "/auth/v1/register", params);


