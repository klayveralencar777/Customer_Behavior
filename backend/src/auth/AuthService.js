import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UnauthorizedError } from '../exceptions/Exceptions.js';
import { UserService } from '../service/UserService.js';

export class AuthService {
    constructor() { this.userService = new UserService(); }

    async login({ email, password }) {
        if (!email || !password) throw new UnauthorizedError(`Credenciais inválidas, tente novamente!`);
        const user = await this.userService.findUserByEmail(email);
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) throw new UnauthorizedError(`Credenciais incorretas, tente novamente!`);

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
        

    }
}