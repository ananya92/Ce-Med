module.exports = function (sequelize, DataTypes) {
    var PatientDetails_MedicalAidInformation = sequelize.define("PatientDetails_MedicalAidInformation", {
		medicalAidScheme: {
            type: DataTypes.STRING,
			allowNull: true,
        },
		plan: {
            type: DataTypes.STRING,
			allowNull: true,
        },
		memberNumber: {
            type: DataTypes.STRING,
			allowNull: true,
        },
		authorisationNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		surname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		initials: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		saIdNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },		
		dateOfBirth: {
            type: DataTypes.DATE,
			allowNull: true,
        },
		gender: {
            type: DataTypes.STRING,
            allowNull: true,
        },	
		dependantCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },	
    });
     
     PatientDetails_MedicalAidInformation.associate = function (models) {
        PatientDetails_MedicalAidInformation.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return PatientDetails_MedicalAidInformation;
};
