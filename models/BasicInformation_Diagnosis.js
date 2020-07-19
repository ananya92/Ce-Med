module.exports = function (sequelize, DataTypes) {
    var BasicInformation_Diagnosis = sequelize.define("BasicInformation_Diagnosis", {
		primaryDiagnosis: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        secondaryDiagnosis: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		surgicalProcedure: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        additionalProcedures: {
            type: DataTypes.STRING,
            allowNull: true,
        },
			
    });
     
     BasicInformation_Diagnosis.associate = function (models) {
        BasicInformation_Diagnosis.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return BasicInformation_Diagnosis;
};