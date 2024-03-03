import { Request, Response } from "express";
import prismaConstants from "../constants/consts";


export async function validateTransactions(req: Request, res: Response,) {
    const payload = req.body;
    if (!payload) {
        return res.sendStatus(400);
    }
    const MerchantRequestID = payload.MerchantRequestID;
}
