
import PropTypes from 'prop-types';

const TaskH = (props) => {
  return (
    <div
      key={props.key}
      className={`flex items-center justify-center gap-4 p-5 m-10  ${
        props.isCompleted ? "bg-green-200" : "bg-red-400"
      } border-black`}
    >
      {" "}
      <h1>{props.text}</h1>
      <button
        onClick={() => props.completeTask(props.id)}
        className="px-2 py-1 border-2 border-black"
      >
        Complete task
      </button>
      <button
        onClick={() => props.deleteTask(props.id)}
        className="px-2 py-1 border-2 border-black"
      >
        Delete Task
      </button>
    </div>
  );
};

TaskH.propTypes = {
    key: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired, 
    text: PropTypes.string.isRequired, 
    isCompleted: PropTypes.bool.isRequired,
    completeTask: PropTypes.func.isRequired, 
    deleteTask: PropTypes.func.isRequired, 
};


export default TaskH;
