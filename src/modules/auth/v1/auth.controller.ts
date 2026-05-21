import ApiResponse from "@/utils/ApiResponse";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const register = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Register Successful!" }));
};

const login = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Login Successful!" }));
};

const logout = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Logout Successful!" }));
};

const logoutAll = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Logout All Successful!" }));
};

const refresh = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Refresh Successful!" }));
};

const resendEmail = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Resend Email Successful!" }));
};

const verifyEmail = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Verify Email Successful!" }));
};

const forgotPassword = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Forgot Password Successful!" }));
};

const resetPassword = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Reset Password Successful!" }));
};

const changePassword = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Change Password Successful!" }));
};

const getSessions = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Get Sessions Successful!" }));
};

const deleteSession = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Delete Session Successful!" }));
};

const google = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Google Login!" }));
};

const github = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Github Login!" }));
};

const googleCallback = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Google Callback!" }));
};

const githubCallback = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Github Callback!" }));
};

export default {
  register,
  login,
  logout,
  logoutAll,
  refresh,
  resendEmail,
  verifyEmail,
  forgotPassword,
  resetPassword,
  changePassword,
  getSessions,
  deleteSession,
  google,
  github,
  googleCallback,
  githubCallback,
};
