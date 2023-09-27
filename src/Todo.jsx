import React from 'react'

export default function Todo(props) {
    const {id, isCompleted, text} = props.todo;
    const onClick = props.onClick;
  return (
    <div>Todo</div>
  )
}
