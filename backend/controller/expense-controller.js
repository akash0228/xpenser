import expenseCollection from "../models/model.js";

export const addExpense=async(req,res)=>{
    try{
        const newExpense=await expenseCollection.create({
            title:req.body.title,
            amount:req.body.amount,
            category:req.body.category,
            createdAt:req.body.createdAt
        })

        await newExpense.save();
        return res.status(200).json(newExpense);
    }catch(error){
        return res.status(500).json(error.message);
    }
};

export const getAllExpense=async(req,res)=>{
    try{
       const expenses=await expenseCollection.find({}).sort({'createdAt':-1});
       return res.status(200).json(expenses);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

export const searchExpense = async (req, res) => {
    try {
      const query = req.params.query;
    //   console.log(query);
      const expenses = await expenseCollection.find({ title: { $regex: `^${query}` } }).sort({ 'createdAt': -1 });
    //  console.log(expenses);
      return res.status(200).json(expenses);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

export const deleteExpense=async(req,res)=>{
    try{
        const id=req.params.id;
        console.log(id);
        //if waha pe display na ho ya dikkat ho to ye variable hata do aur todo.save hata do end me ye variable me find kara ke send kr do
        const expense=await expenseCollection.findOneAndDelete(
            {_id:id}
        );

        return res.status(200).json(expense);
    }catch(error){
        return res.status(500).json(error.message);
    }
}