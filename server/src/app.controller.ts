import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) { }

  @Get()
  async getTeams() {
    const teams = await this.prisma.team.findMany()

    return {
      data: teams,
    }
  }
}
