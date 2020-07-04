module.exports = function (sequelize, DataTypes) {
    var PatientDetails_ClinicalInformation = sequelize.define("PatientDetails_ClinicalInformation", {
        symptoms: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		diabetes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		diabetesTablets: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		diabetesInsulin: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		diabetesDiet: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		diabetesNone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		hypertension: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		multipleSclerosis: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		cholestrol: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		emphysema: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		asthma: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		epilepsy: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		thyroidDisorder: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		lupus: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		depression: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		heartFailure: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		porphyria: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		others: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
     
     PatientDetails_ClinicalInformation.associate = function (models) {
        PatientDetails_ClinicalInformation.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return PatientDetails_ClinicalInformation;
};

