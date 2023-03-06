import React from "react";

class Age extends React.Component {
    constructor(props) {
        super(props)
        const birthDate = new Date("1986","04", "09").getFullYear()
        const currentDate = new Date().getFullYear()
        const yearsOld = (currentDate - birthDate)
        this.state = {date:yearsOld}
    }

    render() {
        return (
            <>
                <p className="main__description-text">
                    {this.state.date} лет, г.Караганда
                </p>
            </>
        )
    }

}

export default Age