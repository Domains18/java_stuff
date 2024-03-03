import { Request, Response } from "express";
import prismaConstants from "../constants/consts";


export async function validateTransactions(req: Request, res: Response,) {
    const payload = req.body;
    if (!payload) {
        return res.sendStatus(400);
    }
    const MerchantRequestID = payload.MerchantRequestID;
    const transaction = await prismaConstants.transaction.findFirst({ MerchantRequestID: MerchantRequestID });
    if (transaction == null) {
        return res.status(404).json({ message: "Transaction not found" });
    }
    console.log({ transaction: transaction })
    return res.status(200).json({ message: transaction });
}
