
import axios from "axios";

import { env } from "@/config/env";
import { cookieService } from "@/lib/cookies";

export const api = axios.create({
  baseURL: env.apiUrl,
});

api.interceptors.request.use((config) => {
  const token =
    cookieService.getToken();

  if (token) {
    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

