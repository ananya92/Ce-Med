module.exports = function (sequelize, DataTypes) {
    var PatientDetails_PatientDeclaration = sequelize.define("PatientDetails_PatientDeclaration", {
		isAgree: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		dateOfBirth: {
            type: DataTypes.DATE,
			allowNull: true,
        },		
    });
     
     PatientDetails_PatientDeclaration.associate = function (models) {
        PatientDetails_PatientDeclaration.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return PatientDetails_PatientDeclaration;
};