import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1654809321826 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "orders",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "total",
              type: "float",
            },
            {
              name: "ordered_at",
              type: "timestamp",
              default: "now()"
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("orders")
    }

}
