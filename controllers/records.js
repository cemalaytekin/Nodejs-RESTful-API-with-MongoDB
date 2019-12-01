var express = require('express');
var Record = require('../models/recordModel');

/*
  Post method for getting records.
*/
module.exports.getRecords = async (req, res) => {
    // check request is correct
    var startDate = req.body.startDate;
    var endDate = req.body.endDate;
    var minCount = req.body.minCount;
    var maxCount = req.body.maxCount;

    // generally I add a validation system to check whether the request body is correct or not. But for this case I will handle it with the code below.
    var errmsg = ""

    if(startDate === '' || typeof startDate == 'undefined')
        errmsg += "start date, "
    if(endDate === '' || typeof endDate == 'undefined')
        errmsg += "end date, "
    if(minCount === '' || typeof minCount == 'undefined')
        errmsg += "min count, "
    if(maxCount === '' || typeof maxCount == 'undefined')
        errmsg += "max count "
    
    if(errmsg != ''){
        return res.send({
            code: -1,
            msg: errmsg + "missing"
        })
    }

    Record.find({
        createdAt: {
          '$gte': startDate,
          '$lte': endDate
        }
      },
      function (err, records) {
        if (err) { // if any error occurs
            res.send({
                code: -2,
                msg: err.toString(),
            })
            return;
        }
        // if there is no records in the database
        var isEmpty = true;
        for(var key in records) {
            if(records.hasOwnProperty(key)){
                isEmpty = false
                break
            }
        }
        if (isEmpty) {
            res.send({
                code: -2,
                msg: "There is no instance for your specifications",
            })
            return;
        }
        var results = []; // will be returned
        for (var val of records) { // iterate records and calculate counts
            let count = 0;
            for (var c of val.counts) {
                count += c;
            }
            if (minCount <= count && maxCount >= count) { // check whether it is in between specified range. Min and max included

                var result = {
                    "key": val.key,
                    "createdAt": val.createdAt,
                    "totalCount": count
                };
                results.push(result)
            }
        }
        res.send({
            code: 0,
            msg: "Success",
            records: results
        })
    })
  }
