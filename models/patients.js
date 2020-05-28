module.exports = function (sequelize, DataTypes) {
    var Patient = sequelize.define("Patient", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Patient;
};
