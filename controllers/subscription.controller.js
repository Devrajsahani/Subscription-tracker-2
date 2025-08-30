import mongoose from 'mongoose';
import Subscription from '../models/subscription.model.js';
// import {WorkFlowClient} from '../config/upstash.js'

// if there is anyy error in this part of the code, then this is just for the reminder that i have changed this part here i can get the original part from gpt i have pasted there.
export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

//         const { workflowRunId } = await WorkFlowClient.trigger({
//     url: `${process.env.SERVER_URL}/api/v1/workflows/subscription/reminder`,
//     body: {
//         subscriptionId: subscription.id,
//     },
//     headers: {
//         'content-type': 'application/json',
//     },
//     retries: 0,
// });



        res.status(201).json({ success: 'True', data: {subscription }});
    } catch (e) {
        next(e);
    }
};
// export const createSubscription = async (req,res,next)=>{
//     try{
//         const subscription = await Subscription.create({
//             ...req.body,
//             user: req.user._id,
//         });

//         await WorkFlowClient.trigger({url,body,headers,workflowRunId,retries}:{
//             url:`${SERVER_URL}`
//         })
//         res.status(201).json({success:'True',data:subscription});
//     }catch(e){
//             next(e);
//         }
//     }
// do that  for this whole part of code 


export const getUserSubscriptions= async(req,res,next)=>{
    try{
        if(req.user.id!== req.params.id){
            const error = new Error('You are not the owner of this account');
            error.status = 401;
            throw error;
        }
        const subscriptions = await Subscription.find({user: req.params.id});
        res.status(200).json({success:true, data:subscriptions});
    }catch(e){
        next(e);

    }
}
