
module.exports = function (sequelize, DataTypes) {
    var PatientDetails_HospitalInformation = sequelize.define("PatientDetails_HospitalInformation", {
        doctor: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		surgeryBookedTime: {
            type: DataTypes.DATE,
			allowNull: true,
        },
		timeOfArrival: {
            type: DataTypes.DATE,
			allowNull: true,
        },

        wardDetails: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		bedDetails: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        preAdmissionNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
     
     PatientDetails_HospitalInformation.associate = function (models) {
        PatientDetails_HospitalInformation.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return PatientDetails_HospitalInformation;
};