import * as jwt from "jsonwebtoken";
import { User } from "../types";

export const generateAccessToken = (
  user: Pick<User, "id" | "email">,
): string => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN || "15m",
  } as jwt.SignOptions);
};

export const generateRefreshToken = (
  user: Pick<User, "id" | "email">,
): string => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_REFRESH_SECRET!,
    {
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
    } as jwt.SignOptions,
  );
};

export const verifyAccessToken = (
  token: string,
): Pick<User, "id" | "email"> => {
  return jwt.verify(token, process.env.JWT_SECRET!) as Pick<
    User,
    "id" | "email"
  >;
};

export const verifyRefreshToken = (
  token: string,
): Pick<User, "id" | "email"> => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as Pick<
    User,
    "id" | "email"
  >;
};
