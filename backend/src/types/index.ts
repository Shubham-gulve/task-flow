import { Request } from "express";

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface TaskRequest {
  title: string;
  description?: string;
  status?: "PENDING" | "IN_PROGRESS" | "COMPLETED";
}

export interface TaskQuery {
  page?: string;
  limit?: string;
  status?: string;
  search?: string;
}
