import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('/user')
@ApiBearerAuth('access-token')
@ApiTags('Users')

export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Res() response, @Body() userModel: CreateUserDto) {
    try {
      const newUser = await this.userService.createUser(userModel);
      return response.status(HttpStatus.CREATED).json({
        message: 'User has been created successfully',
        newUser,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: User not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateUser(
    @Res() response,
    @Param('id') userId: number,
    @Body() userModel: CreateUserDto,
  ) {
    try {
      const existingUser = await this.userService.updateUser(userId, userModel);
      return response.status(HttpStatus.OK).json({
        message: 'User has been successfully updated',
        existingUser,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getUsers(@Res() response) {
    try {
      const userData = await this.userService.getAllUsers();
      return response.status(HttpStatus.OK).json({
        message: 'All users data found successfully',
        data: userData,
      });
    } catch (err) {
      return response.status(err.status).json({
        errorMessage: err.message,
        errorCode: err.statusCode,
      });
    }
  }

  @Get('/all-students')
  async getAllStudents(@Res() response) {
    try {
      const allStudents = await this.userService.getAllUsersByRole('Student');
      return response.status(HttpStatus.OK).json({
        message: 'Student found successfully',
        allStudents,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/all-tutors')
  async getAllTutors(@Res() response) {
    try {
      const allTutors = await this.userService.getAllUsersByRole('Tutor');
      return response.status(HttpStatus.OK).json({
        message: 'Tutors found successfully',
        allTutors,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getUser(@Res() response, @Param('id') userId: string) {
    try {
      const existingUser = await this.userService.getUser(userId);
      return response.status(HttpStatus.OK).json({
        message: 'User found successfully',
        existingUser,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteUser(@Res() response, @Param('id') userId: number) {
    try {
      const deletedUser = await this.userService.deleteUser(userId);
      return response.status(HttpStatus.OK).json({
        message: 'User deleted successfully',
        deletedUser,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
