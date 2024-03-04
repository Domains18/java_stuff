import axios from 'axios';
import { Request, Response, NextFunction } from 'express';


async function generateTimestamp() {
    const date = new Date();
    return date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);
}

interface CustomRequest extends Request {
    token?: string;
}

async function token_controller(req:CustomRequest, res:Response, next:NextFunction) {
    const secret = process.env.CONSUMER_KEY;
    const consumer = process.env.CONSUMER_SECRET;

    const auth = Buffer.from(`${consumer}:${secret}`).toString("base64");

    try {
        const response =  await axios.get("https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
            headers: { Authorization: `Basic ${auth}` }
        });
        req.token = response.data.access_token;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json("internal server error at catch")
    }
}



export async function express_stk(req: CustomRequest, res: Response) {
    const { client, amount } = req.body;
    if (!client || !amount) {
        return res.sendStatus(401)
    }
    const shortCode = process.env.SHORTCODE;
    const passkey = process.env.PASSKEY;
    const timestamp = generateTimestamp();
    const password = Buffer.from(`${shortCode}${passkey}${timestamp}`).toString("base64");

    const data = {
        BusinessShortCode: shortCode,
        Password: password,
        Timestamp: timestamp,
        Amount: amount,
        PartyA: client,
        PartyB: 9324243,
        PhoneNumber: client,
        CallBackURL: "",
        AccountReference: "purchase",
    }
}
