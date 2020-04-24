const error = require('../../helper/errors/index')
const response = require('../../helper/response')
const db_user = require('../../database/user')
let lang = 'en'

exports.getUserById = async(req,res) => {
    try {
        // check if query id is numeric or not
        if(isNaN(req.params.id_user)) {
            res.json(error[lang].id_user_empty)
        }

        // check db layer if user id is exist or not
        db_user.get_by_id(id, function(error, result){
            if(error){
                throw error
            }

            res.json(response.createResp(200,result))
        })
    }
    catch {
        res.json(response.createResp(400,error[lang].unexpected_error))
    }
}