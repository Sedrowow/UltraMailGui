import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../database/config';
import Mail from './Mail';

interface ItemAttributes {
    id: number;
    itemType: string;
    amount: number;
    metadata?: string;
    MailId?: number; // Changed from mailId to MailId to match Sequelize convention
    createdAt?: Date;
    updatedAt?: Date;
}

interface ItemCreationAttributes extends Optional<ItemAttributes, 'id' | 'MailId' | 'createdAt' | 'updatedAt'> {}

class Item extends Model<ItemAttributes, ItemCreationAttributes> implements ItemAttributes {
    declare id: number;
    declare itemType: string;
    declare amount: number;
    declare metadata?: string;
    declare MailId?: number;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

Item.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    itemType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    metadata: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Item'
});

Mail.hasMany(Item);
Item.belongsTo(Mail);

export default Item;