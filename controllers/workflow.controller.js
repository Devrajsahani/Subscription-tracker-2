// import { subscribe } from 'diagnostics_channel';
// import dayjs from 'dayjs';
// import {createRequire} from 'module';
// import Subscription from '../models/subscription.model.js';
// import { sendReminderEmail } from '../utils/send-email.js';
// const require= createRequire(import.meta.url);
// const {serve} = require('@upstash/workflow/express');

// const REMINDERS =[7,5,2,1];
// // upstash was written in comman js so we used require to import it.or const is also used
// export const sendReminders = serve(async(context)=>{
//     const { subscriptionId } = context.requestPayload;

//     const subscription= await fetchSubscription(context,subscriptionId);

//     if(!subscription || subscription.status!== active)return;

//     const renewalDate = dayjs(subscription.renewalDate);
//     if(renewalDate.isBefore(dayjs())){
//         console.log(`Renewal date has passed for subscription ${subscriptionId}.stopping workflow.`);
//         return ;
//     }

//     for(const daysBefore of REMINDERS){
//         const reminderDate = renewalDate.subtract(daysBefore,'day');

//         // renewal date = 22 feb, reminder date = 15 feb,current date = 16 feb, 17,20,21 so like that the notification will be sent 

//         if(reminderDate.isAfter(dayjs())){
//             await sleepUnitlReminder(context,`Reminder ${daysBefore} days before`,reminderDate);

//         }
//         if(dayjs().isSame(reminderDate,'day')){
//         await triggerReminder(context, `${daysBefore} days before reminder`,Subscription);
//         }
//      }
// });

// const fetchSubscription= async(context,subscriptionId)=>{
//     return await context.run('get subscription',async ()=>{
//         return Subscription.findById(subscriptionId).populate('user','name email');
//     })
// }

// const sleepUnitlReminder = async(context,label, date)=>{
//     console.log(`Sleeping until ${label} reminder at ${date}`);
//     await context.sleepUntil(label,date.toDate());
// }
// const triggerReminder = async(context, label,Subscription)=>{
//     return await context.run (label,async()=>{
//         console.log(`Triggering ${label} reminder`);
//         // send emails

//         await sendReminderEmail ({
//             to: Subscription.user.email,
//             type: label,
//             Subscription,
//         })
//     })
// }