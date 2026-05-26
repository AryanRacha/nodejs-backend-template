import ApiResponse from "@/utils/ApiResponse";
import { Request, Response } from "express";
import { ValidRequest } from "@/types/request";
import { StatusCodes } from "http-status-codes";
import {
  Register,
  Login,
  ResendEmail,
  VerifyEmail,
  ForgotPassword,
  ResetPassword,
  ChangePassword,
} from "../auth.types";

const register = async (req: ValidRequest<Register>, res: Response) => {
  const { email, password } = req.body;

  res.status(StatusCodes.OK).json(
    ApiResponse.success({
      message: "Register Successful!",
      data: { email, password },
    }),
  );
};

const login = async (req: ValidRequest<Login>, res: Response) => {
  const { email, password } = req.body;

  res.status(StatusCodes.OK).json(
    ApiResponse.success({
      message: "Login Successful!",
      data: { email, password },
    }),
  );
};

const logout = async (req: Request, res: Response) => {
  res.clearCookie("refreshToken");

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

const resendEmail = async (req: ValidRequest<ResendEmail>, res: Response) => {
  const { email } = req.body;

  res.status(StatusCodes.OK).json(
    ApiResponse.success({
      message: "Resend Email Successful!",
      data: { email },
    }),
  );
};

const verifyEmail = async (req: ValidRequest<VerifyEmail>, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Verify Email Successful!" }));
};

const forgotPassword = async (
  req: ValidRequest<ForgotPassword>,
  res: Response,
) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Forgot Password Successful!" }));
};

const resetPassword = async (
  req: ValidRequest<ResetPassword>,
  res: Response,
) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Reset Password Successful!" }));
};

const changePassword = async (
  req: ValidRequest<ChangePassword>,
  res: Response,
) => {
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
