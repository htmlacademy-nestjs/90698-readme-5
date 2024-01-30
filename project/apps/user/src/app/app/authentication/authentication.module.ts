import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { BlogUserModule } from '../blog-user/blog-user.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { getJwtOptions } from '@project/shared/config/user';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';

@Module({
  imports: [BlogUserModule,  NotificationsModule, JwtModule.registerAsync({
    inject: [ConfigService],
    useFactory: getJwtOptions,
  })],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtAccessStrategy],
})
export class AuthenticationModule {}
