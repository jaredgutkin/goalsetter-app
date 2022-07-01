//@desc Get Goals
//@route GET /api/goals
//@acess Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'get goals'})
}

//@desc Set Goals
//@route POST /api/goals
//@acess Private
const setGoal = (req, res) => {
    res.status(200).json({ message: 'set goals'})
}

//@desc Update Goals
//@route PUT /api/goals/:id
//@acess Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
}

//@desc Delete Goals
//@route DELETE /api/goals/:id
//@acess Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}