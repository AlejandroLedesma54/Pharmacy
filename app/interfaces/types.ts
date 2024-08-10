import { Request } from "express";

export type OptionalString = string | undefined;

export interface AuthenticatedRequest extends Request {
    user?: any;
}
