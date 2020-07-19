import React from 'react';
import { Button } from 'reactstrap';

function QuestionButton(props) {
    return (
        <div className="btns">
            <Button color="primary" onClick={props.add} size="sm" disabled={props.disable}>Add Question</Button>
            <Button color="secondary" onClick={props.remove} size="sm" disabled={props.disableRemove}>Remove Question</Button>
        </div>
    )
}

export default QuestionButton;