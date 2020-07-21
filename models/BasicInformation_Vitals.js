
module.exports = function (sequelize, DataTypes) {
    var BasicInformation_Vitals = sequelize.define("BasicInformation_Vitals", {
		dateVitalsAreRead: {
            type: DataTypes.DATE,
			allowNull: true,
        },
		timeVitalsAreRead: {
            type: DataTypes.STRING,
			allowNull: true,
        },
		bPSystolic: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bPDiastolic: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		temp: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pulse: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		respiration: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        saturation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		oxygenMethod: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        oxygenPercentage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		oxygenFlow: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        oxygenPercentageGiven: {
            type: DataTypes.STRING,
            allowNull: true,
        },
			
    });
     
     BasicInformation_Vitals.associate = function (models) {
        BasicInformation_Vitals.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return BasicInformation_Vitals;
};