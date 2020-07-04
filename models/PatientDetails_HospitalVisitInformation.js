module.exports = function (sequelize, DataTypes) {
    var PatientDetails_HospitalVisitInformation = sequelize.define("PatientDetails_HospitalVisitInformation", {
		admissionDate: {
            type: DataTypes.DATE,
			allowNull: true,
        },
		surgeryBookedDate: {
            type: DataTypes.DATE,
			allowNull: true,
        },
		surgeryBookedTime: {
            type: DataTypes.STRING,
			allowNull: true,
        },
		admittingDoctor: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		referringDoctor: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		alternateDoctor: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		generalGp: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		icdCodeDiagnosis: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		cptCodeProcedure: {
            type: DataTypes.STRING,
            allowNull: true,
        },		
    });
     
     PatientDetails_HospitalVisitInformation.associate = function (models) {
        PatientDetails_HospitalVisitInformation.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return PatientDetails_HospitalVisitInformation;
};
