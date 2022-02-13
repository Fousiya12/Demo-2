import express from "express";
const router3= express.Router();
import Tasks from '../models/task' 

      router3.get('/userdetails/:associate', async(req,res) =>{ 
        try{ 
          const tasks = await Tasks.find({associate:req.params.associate});
           res.json(tasks);
         }catch (err)
         { res.json({message:err}); 
         } 
       });
     
      router3.get('/totalcount/:associate', async(req,res) =>{ 
        try{ 
         
          const count = await Tasks.count({associate:req.params.associate});
          console.log("COUNT", count)
              res.send({
                count
              })
         }catch (err)
         { res.json({message:err}); 
         } 
       });
   //new count
   router3.get('/newcount/:associate', async(req,res) =>{ 
    try{ 
     
      const count = await Tasks.count({associate:req.params.associate,status:"new"});
      console.log("COUNT", count)
          res.send({
            count
          })
     }catch (err)
     { res.json({message:err}); 
     } 
   });
   //inprogress
   router3.get('/inprogresscount/:associate', async(req,res) =>{ 
    try{ 
     
      const count = await Tasks.count({associate:req.params.associate,status:"inprogress"});
      console.log("COUNT", count)
          res.send({
            count
          })
     }catch (err)
     { res.json({message:err}); 
     } 
   });
   //completed
   router3.get('/completedcount/:associate', async(req,res) =>{ 
    try{ 
     
      const count = await Tasks.count({associate:req.params.associate,status:"completed"});
      console.log("COUNT", count)
          res.send({
            count
          })
     }catch (err)
     { res.json({message:err}); 
     } 
   });

 
export default router3;