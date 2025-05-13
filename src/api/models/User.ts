import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/config';
import bcrypt from 'bcrypt';

interface UserAttributes {
    id: number;
    username: string;
    password: string;
    mcUUID?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface UserCreationAttributes extends Omit<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class User extends Model<UserAttributes, UserCreationAttributes> {
    declare id: number;
    declare username: string;
    declare password: string;
    declare mcUUID?: string;

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mcUUID: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    sequelize,
    modelName: 'User',
    hooks: {
        beforeCreate: async (user: User) => {
            user.password = await bcrypt.hash(user.password, 10);
        }
    }
});

export default User;
