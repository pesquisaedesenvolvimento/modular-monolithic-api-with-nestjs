import { Module } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { QueueProcessorsModule } from './modules/queue_processors/queue_processors.module';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigType } from '@nestjs/config';
import redisConfig from './common/config/redis.config';


@Module({
  imports: [
    QueueProcessorsModule,
    CatsModule,
    BullModule.forRootAsync({
      imports: [ConfigModule.forRoot({ load: [redisConfig] })],
      useFactory: (configDatabase: ConfigType<typeof redisConfig>) => ({
          redis: {
              port: configDatabase.port,
              host: configDatabase.host,
          },
      }),
      inject: [redisConfig.KEY]
  }),
  ],
})
export class AppModule {}
