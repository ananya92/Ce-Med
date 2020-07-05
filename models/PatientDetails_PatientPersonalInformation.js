module.exports = function (sequelize, DataTypes) {
    var PatientDetails_PatientPersonalInformation = sequelize.define("PatientDetails_PatientPersonalInformation", {
		identifierType: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		identifierNumber: {
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
		otherNames: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		knownAs: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		gender: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		dateOfBirth: {
            type: DataTypes.DATE,
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
		methodOfContact: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		receiveMarketing: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		receivestatements: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		emailAddress: {
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
		residentialSuburb: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		residentialCity: {
            type: DataTypes.STRING,
            allowNull: true,
        },		
		residentialCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		postalAddressLine1: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		postalAddressLine2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		postalSuburb: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		postalCity: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		postalCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		maritalStatus: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		dietaryPreference: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		religion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		congregation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		minister: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
     
     PatientDetails_PatientPersonalInformation.associate = function (models) {
        PatientDetails_PatientPersonalInformation.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return PatientDetails_PatientPersonalInformation;
};