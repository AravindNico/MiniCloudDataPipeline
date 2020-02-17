/* jshint indent: 1 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('userMaster', {
        StudentId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'studentid'
        },
        StudentName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'studentname'
        },
        YoB: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'yob'
        },
        Gender: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'gender'
        },
        Height: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'height'
        },
        Weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'weight'
        },
        Nationality: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'nationality'
        },
        Course: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'course'
        },
        Source: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'source'
        },
        LastScore: {
            type: DataTypes.FLOAT,
            allowNull: false,
            field: 'lastscore'
        },
        Ailments: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'ailments'
        },
        createdAt: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: 'createdat'
        },
        lastModifiedAt: {
            type: DataTypes.BIGINT,
            allowNull: true,
            field: 'lastmodifiedat'
        }
    }, {
        tableName: 'userdetails'
    });
};