import {
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('exemplos')
export class Exemplo {
  @PrimaryColumn()
  id: string;

  @Column()
  descricao: string;

  @CreateDateColumn({ type: 'date' })
  criadoEm: Date;

  @Column({ type: 'uuid' })
  criadoPorId: string;

  @UpdateDateColumn({ type: 'date' })
  alteradoEm?: Date;

  @Column({ type: 'uuid' })
  alteradorPorId?: string;

  @DeleteDateColumn()
  excluidoEm?: Date;

  @Column({ type: 'varchar', length: 100 })
  atributoUm?: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
