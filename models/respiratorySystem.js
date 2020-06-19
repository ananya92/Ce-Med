module.exports = function (sequelize, DataTypes) {
    var Respiratory_System = sequelize.define("Respiratory_System", {
        Respiratory_Arrest_within_24hours: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Mechanically_Ventilated_with_FiO2_gt_6per: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Mechanically_Ventilated: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Noninvasive_Positive_Pressure_Ventilation: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Extubation_lt_24hrs: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Intubated_NonVentilated: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Oxygen_O2_gt_40Perc: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        High_Flow_Nasal_Cannula: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Saturation_lt_90per_O2_gt_40Perc: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Respiratory_Acidosis: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Respiratory_Alkalosis: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Respiratory_Rate_gt_30pmin: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Hypoventilation_lt_10pmin: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        Bronchospasm_Stridor: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        lt_2_Hourly_Nebulisation: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        lt_2_Hourly_Suctioning: {
            type: DataTypes.SMALLINT,
            allowNull: true,
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
    Respiratory_System.associate = function (models) {
        Respiratory_System.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Respiratory_System;
};
