import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../database/config';
import Mail from './Mail';

interface ItemAttributes {
    id: number;
    itemType: string;
    amount: number;
    metadata?: string;
    mailId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface ItemCreationAttributes extends Optional<ItemAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class Item extends Model<ItemAttributes, ItemCreationAttributes> implements ItemAttributes {
    declare id: number;
    declare itemType: string;
    declare amount: number;
    declare metadata?: string;
    declare mailId: number;
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
    },
    mailId: {
        type: DataTypes.INTEGER,
        references: {
            model: Mail,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Item'
});

Mail.hasMany(Item);
Item.belongsTo(Mail);

export default Item;