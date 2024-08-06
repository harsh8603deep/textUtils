import React from 'react'

function Alert(props) {
    const capatalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
    {/* props.alert && is used as initial value of alert is null */}
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatalize(props.alert.type)}</strong>:{props.alert.msg}
        {/* cross button */}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> cross button */}
    </div>}
    </div>
  )
}

export default Alert
