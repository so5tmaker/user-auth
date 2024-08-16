import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize } from 'sequelize-typescript';

const PORT = 7777;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sequelize = app.get(Sequelize);

  await sequelize.sync(); // creates tables based on modules

  await app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}
bootstrap();
