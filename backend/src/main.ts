import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aqui habilito CORS para que el Frontend pueda pedir datos sin problemas
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
