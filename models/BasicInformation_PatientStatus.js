module.exports = function (sequelize, DataTypes) {
    var BasicInformation_PatientStatus = sequelize.define("BasicInformation_PatientStatus", {
		specialisedCriticalCare: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		criticalCare: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        highCare: {
            type: DataTypes.STRING,
            allowNull: true,
        },
			
    });
     
     BasicInformation_PatientStatus.associate = function (models) {
        BasicInformation_PatientStatus.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return BasicInformation_PatientStatus;
};