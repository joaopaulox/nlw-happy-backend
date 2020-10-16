import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createImages1602620572331 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'images',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'orphanage_id',
            type: 'int',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'ImageOrphanage',
            columnNames: ['orphanage_id'],
            referencedTableName: 'orphanages',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
}
