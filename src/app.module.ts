import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'mysql-devops-docker-api',
    //   port: 3306,
    //   username: 'admin',
    //   password: 'root',
    //   database: 'devops-docker-api-db',
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   retryAttempts: 10,
    //   retryDelay: 3000,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
