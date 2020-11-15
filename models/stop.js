module.exports = (sequelize, DataTypes) => {
    return sequelize.define('stop', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
};