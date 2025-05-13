import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class InitialMigration1623456789012 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: "username",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "isAdmin",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
            ],
        }));

        await queryRunner.createTable(new Table({
            name: "mails",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: "senderId",
                    type: "int",
                },
                {
                    name: "receiverId",
                    type: "int",
                },
                {
                    name: "subject",
                    type: "varchar",
                },
                {
                    name: "body",
                    type: "text",
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
            ],
        }));

        await queryRunner.createTable(new Table({
            name: "items",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: "mailId",
                    type: "int",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "text",
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("items");
        await queryRunner.dropTable("mails");
        await queryRunner.dropTable("users");
    }
}