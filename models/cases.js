module.exports = function (sequelize, DataTypes) {
    var Case = sequelize.define("Case", {
        id: {
            type: DataTypes.INTEGER(4).ZEROFILL,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        details: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        }
    }, {
        timestamps: false
    });
    Case.associate = function(models) {
        Case.belongsTo(models.Patient, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    return Case;
};
