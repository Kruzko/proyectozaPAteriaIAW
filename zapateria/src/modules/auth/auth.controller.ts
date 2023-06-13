import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoginUserDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('register')
  // create(@Body() createAuthDto: CreateUserDto) {
  //   return this.authService.create(createAuthDto);
  // }

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    console.log('registro en controller')
    return this.authService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.authService.findOne(cod);
  }

  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() updateAuthDto: UpdateAuthDto) {
    console.log(cod,updateAuthDto)
    return this.authService.update(cod, updateAuthDto);
  }

  @Delete(':cod')
  deleteOne(@Param('cod') cod: string) {
    return this.authService.deleteOne(cod);
   }

  @Delete()
  deleteAllusuarios() {
    return this.authService.deleteAllusuarios();
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(){
    return {
      ok: true,
      msg: 'Hola mundo private'
    }
  }
}
