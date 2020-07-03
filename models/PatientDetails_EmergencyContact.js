module.exports = function (sequelize, DataTypes) {
    var PatientDetails_EmergencyContact = sequelize.define("PatientDetails_EmergencyContact", {
        surname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		relationshipToPatient: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		mobileNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },		
		workNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		homeNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		residentialAddressLine1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		residentialAddressLine2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		residentialCity: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		residentialSuburb: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		residentialCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
     
     PatientDetails_EmergencyContact.associate = function (models) {
        PatientDetails_EmergencyContact.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return PatientDetails_EmergencyContact;
};