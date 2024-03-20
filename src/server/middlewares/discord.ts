import { NextFunction, Request, Response } from "express"

export default function (req: Request, res: Response, next: NextFunction) {
    const { token } = req.params;
    if(!token) return res.status(400).json({ message: "Unauthorized" })
    next()
}
  