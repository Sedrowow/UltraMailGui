// src/api/models/Mail.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/config';

class Mail extends Model {
    declare id: number;
    declare sender: string;
    declare recipient: string;
    declare subject: string;
    declare body: string;
    declare serverName: string;
    declare mcUUID: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Mail.init({
    sender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recipient: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    serverName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mcUUID: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Mail'
});

export default Mail;