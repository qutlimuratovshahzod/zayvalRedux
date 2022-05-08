import React from 'react'

export const Modal = () => {
    return (
        <div style={{
            position: "absolute",
            top:0,
            left:0,
            background: "rgba(0,0,0,0.5)";
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            height: "100vh"
        }}>
            <form onSubmit={submitHandler}>
                <div className="">
                    <input type="text" placeholder='name' />
                </div>
                <div className="">
                    <input type="text" placeholder='surname' />
                </div>
                <button>edit</button>
            </form>
        </div>
    )
}
