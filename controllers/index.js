const identityQueries = require('../queries')

module.exports = {
    async createIdentify(req,res){
        let phoneNumber = req.body.phoneNumber
            let email = req.body.email
            let linkedId = null
            let linkPrecedence = "primary"
            let outputEmail = []
            let outputPhoneNumber =[]
            let outputId = []
            
            if (!phoneNumber || !email) return res.status(422).send({ code: 422, status: 'failed', msg: 'Data is required.' });

        try{

            let identityExistEmail = await identityQueries.getIdentityByEmail(email)
            let identityExistPhoneNumber = await identityQueries.getIdentityByPhoneNumber(phoneNumber)

            identityExistEmail=JSON.parse(JSON.stringify(identityExistEmail))

            identityExistPhoneNumber=JSON.parse(JSON.stringify(identityExistPhoneNumber))

            if(identityExistEmail.length>0||identityExistPhoneNumber.length>0){
                linkedId = identityExistEmail.length>0?identityExistEmail[0].id:identityExistPhoneNumber[0].id||null
                linkPrecedence = "secondary"
                
                for(let i=0;i<identityExistEmail.length;i++){
                    outputPhoneNumber.push(identityExistEmail[i].phoneNumber)
                    outputId.push(identityExistEmail[i].id)
                }

                for(let i=0;i<identityExistPhoneNumber.length;i++){
                    outputEmail.push(identityExistPhoneNumber[i].email)
                    outputId.push(identityExistPhoneNumber[i].id)
                }

                for(let i=0;i<identityExistPhoneNumber.length;i++){
                    identityExistPhoneNumber?
                    outputEmail.push(identityExistPhoneNumber[i].email):
                    outputId.push(identityExistPhoneNumber[i].id)
                }
            }

            data={
                email:email,
                phoneNumber:phoneNumber,
                linkedId:linkedId ,
                linkPrecedence:linkPrecedence 
            }

            let identity = await identityQueries.createIdentity(data)
            identity=JSON.parse(JSON.stringify(identity))
            outputEmail.push(identity.email)
            outputPhoneNumber.push(identity.phoneNumber)

            decorative={
                "primaryContatctId": identity.id,
			"emails": outputEmail, // first element being email of primary contact 
			"phoneNumbers": outputPhoneNumber, // first element being phoneNumber of primary contact
			"secondaryContactIds": outputId// Array of all Contact IDs that are "secondary" to the primary contact
		}
            
            return res.status(200).send({contacts: decorative });

        }catch (err) {
            return res.status(422).send({ code: 422, status: "failed", msg: err.message });
        }
    }
}