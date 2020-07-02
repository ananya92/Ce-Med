
module.exports = function (sequelize, DataTypes) {
    var PatientDetails_AlternateContact = sequelize.define("PatientDetails_AlternateContact", {
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
		homeNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		workNumber: {
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
     
     PatientDetails_AlternateContact.associate = function (models) {
        PatientDetails_AlternateContact.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return PatientDetails_AlternateContact;
};