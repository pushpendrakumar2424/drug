const drugModel = require('../models/drugModel');
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
}

const validBody = function (body) {
    return Object.keys(body).length > 0
}

const createDrug = async function (req, res) {
    try {
        let data = req.body;
        let {label,key,isReadonly,order,type,isRequired,unit,items} = data

        if (!validBody(data)) {
            return res.status(400).send({ status: false, message: "please enter data in body" })
        }
        if (!isValid(label)) {
            return res.status(400).send({ status: false, message: "please enter label" })
        }
        if (!isValid(isReadonly) && (isReadonly != true||false)) {
            return res.status(400).send({ status: false, message: "please enter isReadOnly" })
        }
        if (isRequired && (!isValid(isRequired)) && (isRequired !=true||false) ){
            return res.status(400).send({ status: false, message: "please enter isRequired" })
        }
        if (unit && (!isValid(unit))){
            return res.status(400).send({ status: false, message: "please enter unit" })
        }
        if (items && (!isValid(items))){
            return res.status(400).send({ status: false, message: "please enter items" })
        }
        if (!isValid(key)) {
            return res.status(400).send({ status: false, message: "please enter key" })
        }
        if (!isValid(order)) {
            return res.status(400).send({ status: false, message: "please enter order" })
        }
        if (order < 0 || !/\d/.test(order))
            return res.status(400).send({ status: false, message: "pleage enter order in number value" })

        if (type && !isValid(type)) {
            return res.status(400).send({ status: false, message: "please enter type" })
        }
        if (!["number", "date","dropdown"].includes(type)) {
            return res.status(400).send({ status: false, msg: "Type must includes['number', 'date', 'dropdown']" })
        }   
        let drugData = await drugModel.create(data)
        return res.status(201).send({ feilds: drugData })
    }
    
    catch (err) {
        return res.status(500).send({ staus: false, error: err.message })
    }
}

const getDrug = async function(req,res){
    try{
    
        let getDrugData = await drugModel.find().select({_id:0, __v:0})
    
        if (getDrug.length == 0){
        return res.status(404).send({ message: "No such drugData exist" });
        }
        res.status(200).send({ feilds: getDrugData })

    }
    catch(err){
        return res.status(500).send({ staus: false, error: err.message })
    }
}

module.exports = { createDrug, getDrug }