import ApiResponse from "@/utils/ApiResponse";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const getUser = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Get Profile Successful!" }));
};

const updateUser = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Update Profile Successful!" }));
};

const deleteUser = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Delete User Successful!" }));
};

const getPreferences = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Get Preferences Successful!" }));
};

const updatePreferences = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Update Preferences Successful!" }));
};

const searchUsers = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Search Users Successful!" }));
};

const getPublicProfile = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(
      ApiResponse.success({ message: "Get User Public Profile Successful!" }),
    );
};

const checkUsername = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Check Username Successful!" }));
};

export default {
  getUser,
  updateUser,
  deleteUser,
  getPreferences,
  updatePreferences,
  getPublicProfile,
  searchUsers,
  checkUsername,
};
