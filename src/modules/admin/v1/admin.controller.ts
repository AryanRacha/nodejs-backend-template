import ApiResponse from "@/utils/ApiResponse";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const getDashboard = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Get Dashboard Successful!" }));
};

const getUsers = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Get All Users Successful!" }));
};

const getUserById = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Get User Successful!" }));
};

const updateUserById = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Update User Successful!" }));
};

const deleteUserById = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Delete User Successful!" }));
};

const banUserById = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Ban User Successful!" }));
};

const unbanUserById = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Unban User Successful!" }));
};

const assignRoleById = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Assign Role Successful!" }));
};

const removeRoleById = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Remove Role Successful!" }));
};

const getRoles = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Get Roles Successful!" }));
};

const createRole = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Create Role Successful!" }));
};

const updateRole = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Update Role Successful!" }));
};

const deleteRole = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Delete Role Successful!" }));
};

const getAuditLogs = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Get Audit Logs Successful!" }));
};

const getAuditLogById = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Get Audit Log Successful!" }));
};

const getStats = async (req: Request, res: Response) => {
  res
    .status(StatusCodes.OK)
    .json(ApiResponse.success({ message: "Get Stats Successful!" }));
};

export default {
  getDashboard,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  banUserById,
  unbanUserById,
  assignRoleById,
  removeRoleById,
  getRoles,
  createRole,
  updateRole,
  deleteRole,
  getAuditLogs,
  getAuditLogById,
  getStats,
};
