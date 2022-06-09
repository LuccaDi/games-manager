import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "../../games/entities/Game";
import { User } from "../../users/entities/User";


@Entity('orders')
export class Order{
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User, (user) => user.orders)
  user: User

  @ManyToMany(()  => Game, (game) => game.orders)
  games: Game[]

  @Column()
  total: number

  @CreateDateColumn()
  ordered_at: Date

}