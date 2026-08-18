import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { envConfig } from "../config/config";
import User from "../database/models/userModel";

export enum Role {
  Admin = "admin",
  Customer = "customer",
}

interface IExtendedRequest extends Request {
  user?: {
    username: string;
    email: string;
    role: string;
    password: string;
    id: string;
  };
}

class UserMiddleware {
  async isUserLoggedIn(
    req: IExtendedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(403).json({
        message: "Token must be provided",
      });
      return;
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    jwt.verify(
      token,
      envConfig.jwtSecret as string,
      async (err, result: any) => {

        if (err) {
          console.log("JWT ERROR:", err);

          res.status(403).json({
            message: "Invalid token !!!",
          });
          return;
        }

        const userData = await User.findByPk(result.userId);

        if (!userData) {
          res.status(404).json({
            message: "No user with that userId",
          });
          return;
        }

        req.user = userData;
        next();
      }
    );
  }

  accessTo(...roles: Role[]) {
    return (
      req: IExtendedRequest,
      res: Response,
      next: NextFunction
    ) => {

      const userRole = req.user?.role as Role;

      if (!roles.includes(userRole)) {
        res.status(403).json({
          message: "You dont have permission haiii!!",
        });
        return;
      }

      next();
    };
  }
}

export default new UserMiddleware();
