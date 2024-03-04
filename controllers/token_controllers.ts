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


async function token_controller() {
    const secret = process.env.CONSUMER_KEY;
    const onsumer = process.env.CONSUMER_SECRET;
}
