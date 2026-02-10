

import { AuthService } from "./AuthService.js";

export class AuthController {
    constructor() { this.authService = new AuthService(); }
    

    async login(req, res, next) {
        try {
            const{ email, password } = req.body;
            const token = await this.authService.login(req.body);
            res.status(200).json(token);
            
        } catch (error) {
            next(error);
            
        }
        
        
    }


}