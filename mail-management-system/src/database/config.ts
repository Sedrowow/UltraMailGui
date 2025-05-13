import { Sequelize } from 'sequelize';
import path from 'path';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../../database.sqlite'),
    logging: false
});

export const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('SQLite connected');
    } catch (error) {
        console.error('SQLite connection error:', error);
        process.exit(1);
    }
};

export default sequelize;
