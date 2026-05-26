import { z } from "zod";

const register = {
  body: z.object({
    email: z.email(),
    password: z.string().min(6).max(20),
  }),
};

const login = {
  body: z.object({
    email: z.email(),
    password: z.string().min(6).max(20),
  }),
};

const resendEmail = {
  body: z.object({
    email: z.email(),
  }),
};

const verifyEmail = {
  body: z.object({
    token: z.string(),
  }),
};

const forgotPassword = {
  body: z.object({
    email: z.email(),
  }),
};

const resetPassword = {
  body: z.object({
    token: z.string(),
    password: z.string().min(6).max(20),
  }),
};

const changePassword = {
  body: z.object({
    oldPassword: z.string().min(6).max(20),
    newPassword: z.string().min(6).max(20),
  }),
};

export default {
  register,
  login,
  resendEmail,
  verifyEmail,
  forgotPassword,
  resetPassword,
  changePassword,
};
