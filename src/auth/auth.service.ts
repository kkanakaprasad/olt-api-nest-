import { Injectable, Options } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { sign, verify } from 'jsonwebtoken';
import { UsersService } from 'src/users/users.service';
import { GoogleLoginDto } from './dto/googleLogin.dto';
//import { User } from 'src/users/entities/user.entity';
import { SignUpDTO } from './dto/singup.dto';
import RefreshToken from './entities/refresh-token.entity';

@Injectable()
export class AuthService {

  private refreshTokens: RefreshToken[] = [];

  constructor(private readonly userService: UsersService) {

  }

  async refresh(refreshStr: string): Promise<string | undefined> {
    const refreshToken = await this.retriveRefreshToken(refreshStr);
    if (!refreshToken) {
      return undefined;
    }
    const user = await this.userService.getUser(refreshToken.userId);
    if (!user) {
      return undefined;
    }
    const accessToken = {
      userId: refreshToken.userId
    };

    return sign(accessToken, process.env.ACCESS_SECRET, { expiresIn: '1h' });
  }

  private retriveRefreshToken(refreshStr: string): Promise<RefreshToken | undefined> {

    try {
      const decoded = verify(refreshStr, process.env.REFRESH_SECRET);
      if (typeof decoded === 'string') {
        return undefined;
      }
      return Promise.resolve(
        this.refreshTokens.find((token) => token.id === decoded.id)
      );

    } catch (error) {

    }
  }

  async login(
    email: string,
    password: string,
    values: { userAgent: string; ipAddress: string }): Promise<{ accessToken: string; refreshToken: string } | undefined> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      return undefined;
    }
    if (user.password !== password) {
      return undefined;
    }
    return this.newRreshAndAccessToken(user, values);
  }

  async googleSignIn(body: GoogleLoginDto, values: { userAgent: string; ipAddress: string }) {
    try {
      const userTokenValid = await this.verifyGoogleToken(body.idToken)
    } catch (error) {
      throw new Error(error);
    }
    const user = await this.userService.upsertUser(body);

    return this.newRreshAndAccessToken(user, values);

  }

  async verifyGoogleToken(token: string) {
    const client = new OAuth2Client("925808140824-3ldr2n6tv5hp30nvd7rp3vi2g1c96dqr.apps.googleusercontent.com");

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "925808140824-3ldr2n6tv5hp30nvd7rp3vi2g1c96dqr.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();
    console.log(payload);
  }



  async signup(signUpDTO: SignUpDTO) {
    await this.userService.createUser(signUpDTO);

    return true;
  }

  private async newRreshAndAccessToken(
    user: any,
    values: { userAgent: string; ipAddress: string }
  ): Promise<{ accessToken: string; refreshToken: string }> {

    const refreshObject = new RefreshToken({
      id: this.refreshTokens.length === 0 ? 0 : this.refreshTokens[this.refreshTokens.length - 1].id + 1,
      ...values,
      userId: user.userId
    });
    this.refreshTokens.push(refreshObject);

    return {
      refreshToken: refreshObject.sign(),
      accessToken: sign(
        {
          userId: user.userId,
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: '1h',
        }
      ),
    };

  }

  async logout(refreshStr: string): Promise<void> {
    const refreshToken = await this.retriveRefreshToken(refreshStr);
    if (!refreshToken) {
      return;
    }
    this.refreshTokens = this.refreshTokens.filter((refreshToken) => refreshToken.id !== refreshToken.id,);
  }
}
