import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
//import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from './entities/user.entity';
//import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  
  constructor(
    @InjectRepository(User)
    private readonly Userrepository: Repository<User>,
    //private readonly jwtService: JwtService
  ){

  }

   async create(createUserDto: CreateUserDto){
     try{
       const user = this.Userrepository.create(createUserDto);
       console.log(user);
       await this.Userrepository.save(user);
       return user;
     } catch (error) {
       console.log(error);
       throw new InternalServerErrorException('Ayuda')
     }
   }

  // async login( loginUserDto: LoginUserDto ){
  //   try {
  //     // buscamos el usuario del email
  //     const { email, password } = loginUserDto;
  //     const user = await this.Userrepository.findOne({ 
  //       where: { email },
  //       select: { email: true, password: true, usuario: true }
  //      });

  //     if ( !user ) 
  //       throw new UnauthorizedException ('Credenciales no válidas (email)');

  //     //comparamos las contraseñas 
  //     if (!bcrypt.compareSync( password, user.password ))
  //       throw new UnauthorizedException('Credenciales no válidas (contraseña)')
      
  //     return {
  //       user: { ...user }, 
  //       token: this.getJwtToken({ email: user.email })
  //     }
      
  //   } catch (error) {
  //     this.handleDBEerrors(error)
  //   }
  // }

  // async create(createUserDto: CreateUserDto) {
  //   try {
  //     console.log(createUserDto);
  //     const { password, ...userData } = createUserDto;
  //     // const cliente = await this.clientesService.findOne(createUserDto.nif);
  //     // console.log(cliente);
  //     const user = this.Userrepository.create({
  //       ...userData,
  //       password: bcrypt.hashSync( password, 10 )
  //     });
  //     // user.cliente = cliente;
  //     await this.Userrepository.save(user);
  //     // delete user.password;

  //     return {
  //       user: { ...user }, 
  //       token: this.getJwtToken({ email: user.email })
  //     }

  //   } catch (error) {
  //     this.handleDBErrors(error)
  //   }
  // }

  private handleDBErrors (error: any): never{
    if (error.code === '23505')
      throw new BadRequestException(error.detail)
    
    throw new InternalServerErrorException('Please Check Server Error ...')
  }

//token jwt
  //  private getJwtToken( payload: JwtPayload){
  //   const token = this.jwtService.sign(payload);
  //   return token;
  // }

  findAll() {
    return this.Userrepository.find({});
  }

  findOne(cod: string) {
    return this.Userrepository.findOne({
      where: {cod}
    });
  }

  update(id: string, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: string) {
    return `This action removes a #${id} auth`;
  }

  async deleteAllusuarios(){
    const query = this.Userrepository.createQueryBuilder('User');
    try{
      return await query
      .delete()
      .where({})
      .execute()
    }catch(error){
      this.handleDBEerrors(error)
    }
  }
  private handleDBEerrors (error: any): never{
    throw new BadRequestException(error.detail)
  }
  
}
