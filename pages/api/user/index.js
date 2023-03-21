import nc from 'next-connect'
import bcrypt from 'bcryptjs';
import ErrorHandler from "@/src/handlers/error.handler";
import UserController from "@/src/controllers/user.controller";
import {isNumber} from 'lodash';

const handler = nc(ErrorHandler);

handler
    .post(async (req, res)=>{
        let inputDTO = req.body
        let salt = bcrypt.genSaltSync(10);
        let hashPassword = bcrypt.hashSync(inputDTO?.password,salt);
        Reflect.set(inputDTO, 'password', hashPassword);
        Reflect.set(inputDTO, 'salt', salt);

        const[err, data] = await new UserController({
            fields: inputDTO
        }).create()

        if(err){
            return res.status(400).json({
                message: err?.message ?? "Error: Some Error"
            })
        }

        Reflect.deleteProperty(data, 'password');
        Reflect.deleteProperty(data, 'salt');

        return res.status(200).json({
            message: "OK!",
            data: data
        })
        
    })
    .delete(async(req,res)=>{
        try{
            const inputDTO = req.body
            const [err, data] = await new UserController({
                key: inputDTO?.key ?? "id",
                value: isNumber(inputDTO?.value) ? 
                    Number(inputDTO?.value):inputDTO?.value ?? null
            }).delete()
            if(err){
                return res.status(400).json({
                    error: true,
                    message: err?.message ?? "Bad Request"
                })
            }
            return res.status(201).json({})
        }catch(err){
            return res.status(500).json({
                error: true,
                message: err?.message ?? "Exceptions Error"
            })
        }
    })


export default handler