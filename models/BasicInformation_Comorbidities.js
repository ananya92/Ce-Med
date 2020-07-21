
module.exports = function (sequelize, DataTypes) {
    var BasicInformation_Comorbidities = sequelize.define("BasicInformation_Comorbidities", {
		chronicIscaemicHeartDisease: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        congestiveHeartFailure: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		unstableAngina: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hypertension: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		hypothyroidism: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hyperlipidaemia: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		diabetesInsulinDependant: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        diabetesNonInsulinDependant: {
            type: DataTypes.STRING,
            allowNull: true,
        },	
		chronicRenalFailure: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        acuteRenalFailure: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		renalDialysis: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        chronicObstructivePulmonaryDisease: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		asthma: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		chronicArterialFibrilation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		epilepsy: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		smoking: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		noOfSticks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		useAlcohol: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        noOfStandardDrinks: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		height: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: true,
        },
			
    });
     
     BasicInformation_Comorbidities.associate = function (models) {
        BasicInformation_Comorbidities.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return BasicInformation_Comorbidities;
};
