const db = require("../config/db.config.js");
const Constants = require('../config/Constants.js');

const userMaster = db.users;

sequelize = db.sequelize;

exports.GetDetails = async (req, res) => {
    try {
        let Res = await userMaster.findAll({
            raw: true
        })
        console.log("Res :", Res)
        let result = Res;
        if (Res.length <= 0) {
            result = {
                status: 202,
                reason: 'No Data Found',
            }
        } else {
            result = {
                status: 200,
                data: result,
            }
        }
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "error",
            details: err
        });
    }

};

exports.getByNationality = async (req, res) => {
    var ReqParam = req.params;
    try {
        let Res = await userMaster.findAll({
            raw: true,
            where: {
                Nationality: ReqParam.id
            }
        })
        console.log("Res :", Res)
        let result = Res;
        if (Res.length <= 0) {
            result = {
                status: 202,
                reason: 'No Data Found',
            }
        } else {
            result = {
                status: 200,
                data: result,
            }
        }
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "error",
            details: err
        });
    }

};
exports.getByCourse = async (req, res) => {
    var ReqParam = req.params;
    try {
        let Res = await userMaster.findAll({
            raw: true,
            where: {
                Course: ReqParam.id
            }
        })
        console.log("Res :", Res)
        let result = Res;
        if (Res.length <= 0) {
            result = {
                status: 202,
                reason: 'No Data Found',
            }
        } else {
            result = {
                status: 200,
                data: result,
            }
        }
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "error",
            details: err
        });
    }

};

exports.getByYob = async (req, res) => {
    var ReqParam = req.params;
    try {
        let Res = await userMaster.findAll({
            raw: true,
            where: {
                YoB: ReqParam.id
            }
        })
        console.log("Res :", Res)
        let result = Res;
        if (Res.length <= 0) {
            result = {
                status: 202,
                reason: 'No Data Found',
            }
        } else {
            result = {
                status: 200,
                data: result,
            }
        }
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "error",
            details: err
        });
    }

};

exports.AddDetails = async (req, res) => {
    var result = {};
    var userDetails = req.body;
    userDetails.forEach(element => {
        element.createdAt = Constants.timeInEPOC();
        element.lastModifiedAt = Constants.timeInEPOC();
    });

    console.log(userDetails)
    console.log("================================")

    let transaction;
    try {
        transaction = await sequelize.transaction();

        result = await userMaster.bulkCreate(userDetails, {
            raw: true,
            transaction
        });

        await transaction.commit();
        res.json(result);
    } catch (err) {
        console.log(err);
        result = {
            status: 201,
            reason: 'Error while Adding Users,' + err,
        }
        if (transaction) await transaction.rollback();
        res.json(result);
    }
};


exports.getAvgByType = async (req, res) => {
    var ReqParam = req.params;
    try {
        query = "SELECT AVG(lastscore) AS AverageScore ,\
        MAX(lastscore) AS MaximumScore,\
        MIN(lastscore) AS MinimumScore,\
        COUNT(*) AS TotalStudents,\
        SUM(lastscore) AS TotalScore\
        FROM userdetails\
        WHERE course = '" + ReqParam.id + "'"


        let Res = await sequelize.query(query, {
            // transaction
        }, {
            raw: true,
            type: sequelize.QueryTypes.SELECT
        });

        console.log("Res :", Res[0])
        let result = Res[0];
        if (Res.length <= 0) {
            result = {
                status: 202,
                reason: 'No Data Found',
            }
        } else {
            result = {
                status: 200,
                data: result,
            }
        }
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "error",
            details: err
        });
    }

};


exports.getTotalCountByNationality = async (req, res) => {
    var ReqParam = req.params;
    try {
        query = "SELECT nationality , COUNT(*) as totalcount\
        FROM userdetails\
        GROUP BY nationality"


        let Res = await sequelize.query(query, {
            // transaction
        }, {
            raw: true,
            type: sequelize.QueryTypes.SELECT
        });

        console.log("Res :", Res[0])
        let result = Res[0];
        if (Res.length <= 0) {
            result = {
                status: 202,
                reason: 'No Data Found',
            }
        } else {
            result = {
                status: 200,
                data: result,
            }
        }
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "error",
            details: err
        });
    }

};