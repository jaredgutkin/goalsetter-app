import { FaSkull } from 'react-icons/fa'

function GoalItem({goal}) {
  return (
    <div className="goal">
        <div>
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{goal.text}</h2>
        <button className="close"><FaSkull/></button>
    </div>
  )
}

export default GoalItem