import React from "react";
import { NavLink } from "react-router-dom";
import Moon from "./IconMoon";
import Sun from "./IconSun";

export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.menuClick = this.menuClick.bind(this)
        this.themToggle = this.themToggle.bind(this)
        this.state = {className: false}
    }

    menuClick () {
        this.setState(prevState => ({
            className: !prevState.className
        }))
    }

    themToggle(){
        const body = document.querySelector(".page")
        const themSwitch = document.querySelector(".switch")
        const icon = document.querySelectorAll(".icon")
        body.classList.toggle("light-them")
        themSwitch.classList.toggle("active")

        icon.forEach((item) => {
            item.classList.toggle("active")
        })
    }



    render() {
        return (
            <header className="header">
                <div className="container header__wrapper">
                    <NavLink className="header__logo" to="/portfolio_v2/">
                        <svg width="100%" height="100%" viewBox="0 0 371.4878048780488 211.84655688725363" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(2.3524389469588036,0,0,2.3524389469588036,-53.60031207366023,-11.69632785317243)" fill="#269384">
                                <path d="M58.662,66.733v6.876c-0.078,0.078-0.258,0.219-0.617,0.386c-0.54,0.244-1.492,0.54-3.124,0.721  c-1.016,0.115-2.301,0.191-3.908,0.191c-1.606,0-2.892-0.076-3.908-0.191c-1.632-0.181-2.583-0.477-3.124-0.721  c-0.359-0.167-0.54-0.308-0.617-0.386v-6.876c-0.745,0.294-1.465,0.563-2.185,0.797v6.286c0,0.603,0.308,1.399,1.646,2.055  c-0.527,1.133-0.81,2.393-0.81,3.729c0,4.975,8.998,15.426,8.998,15.426s8.999-10.451,8.999-15.426c0-1.337-0.283-2.597-0.811-3.729  c1.338-0.655,1.646-1.452,1.646-2.055V67.53C60.127,67.297,59.408,67.027,58.662,66.733z M51.013,91.17c0,0-6.093-7.7-6.093-11.363  c0-1.119,0.258-2.174,0.708-3.099c0.771,0.143,1.696,0.245,2.764,0.309c-0.437,0.564-0.694,1.272-0.694,2.044  c0,1.825,3.316,5.682,3.316,5.682s3.316-3.856,3.316-5.682c0-0.771-0.256-1.479-0.693-2.044c1.067-0.063,1.992-0.166,2.765-0.309  c0.449,0.925,0.707,1.979,0.707,3.099C57.107,83.47,51.013,91.17,51.013,91.17z"></path>
                                <path d="M76.235,28.708c-0.798-1.146-2.521-2.521-6.158-2.521c-2.622,0-5.836,0.694-9.358,1.993c-0.039-0.811-0.104-1.71-0.18-2.674  c-0.219-2.648-0.579-5.746-1.209-8.729c-1.259-6.042-7.353-11.313-7.61-11.544c-0.411-0.348-1.002-0.348-1.414,0  c-0.257,0.23-6.351,5.502-7.61,11.544c-0.63,2.982-0.99,6.08-1.208,8.729c-0.077,0.964-0.142,1.863-0.179,2.674  c-3.523-1.299-6.737-1.993-9.359-1.993c-3.639,0-5.361,1.375-6.158,2.521c-0.552,0.783-0.861,1.671-0.938,2.634  c-1.234,0.656-2.069,1.942-2.069,3.42c0,2.135,1.722,3.856,3.856,3.856c0.129,0,0.258,0,0.386-0.025  c1.466,2.532,3.612,5.22,6.183,7.88c-6.504,6.711-10.31,13.652-7.417,17.754c0.797,1.145,2.519,2.507,6.158,2.519  c4.898,0,11.827-2.429,19.063-6.568c7.238,4.14,14.166,6.568,19.064,6.568c3.638,0,5.36-1.374,6.158-2.519  c2.892-4.102-0.913-11.043-7.419-17.754C75.322,39.75,79.127,32.821,76.235,28.708z M70.077,28.759c1.4,0,3.227,0.244,4.063,1.427  c1.671,2.378-0.952,8.06-7.134,14.475c-1.904-1.825-3.986-3.612-6.158-5.309v-7.058c0-0.077,0-0.591-0.026-1.414  C64.369,29.517,67.57,28.759,70.077,28.759z M43.364,32.294c0-0.038,0-2.559,0.27-5.991c0.193-2.712,0.566-5.989,1.209-9.075  c0.874-4.178,4.589-8.137,6.17-9.667c1.582,1.53,5.296,5.489,6.17,9.667c0.644,3.086,1.016,6.363,1.21,9.075  c0.27,3.433,0.27,5.953,0.27,5.991v0.463c-0.824,0.501-2.828,1.182-7.649,1.182c-4.833,0-6.826-0.681-7.648-1.194V32.294z   M43.364,34.004c1.286,0.553,3.586,1.016,7.648,1.016c4.063,0,6.364-0.463,7.649-1.016v3.123c-0.824,0.502-2.828,1.184-7.649,1.184  c-4.833,0-6.826-0.682-7.648-1.196V34.004z M29.365,37.487c0.694-0.694,1.131-1.658,1.131-2.726c0-1.825-1.273-3.354-2.982-3.753  c0.077-0.31,0.206-0.579,0.373-0.823c0.823-1.183,2.661-1.427,4.063-1.427c2.493,0,5.695,0.758,9.242,2.121  c-0.012,0.823-0.012,1.337-0.012,1.414v7.058c-2.172,1.696-4.255,3.483-6.158,5.309C32.553,42.103,30.651,39.647,29.365,37.487z   M31.949,64.174c-1.401,0-3.24-0.258-4.063-1.426c-1.671-2.379,0.951-8.061,7.122-14.488c2.816,2.699,6.029,5.321,9.346,7.662  c1.363,0.964,2.739,1.876,4.114,2.726C42.104,62.105,36.088,64.174,31.949,64.174z M45.833,53.826  c-3.458-2.443-6.479-4.936-9.012-7.354c1.325-1.272,2.777-2.558,4.358-3.843v4.307c0.707,0.616,1.44,1.22,2.185,1.825V38.374  c1.183,0.502,3.213,0.938,6.672,1.003c0,0,0,0,0.012,0c0.309,0.013,0.63,0.013,0.964,0.013c0.334,0,0.655,0,0.965-0.013  c0.012,0,0.012,0,0.012,0c3.459-0.064,5.49-0.501,6.673-1.003v9.089h0.063c0.464,0,0.9,0.051,1.338,0.142  c0.257-0.219,0.527-0.438,0.784-0.668V42.63c1.581,1.285,3.021,2.57,4.345,3.83c-1.337,1.285-2.816,2.597-4.423,3.896  c-0.592-0.386-1.285-0.592-2.044-0.592c-2.134,0-3.855,1.723-3.855,3.856c0,0.348,0.051,0.694,0.142,1.016  c-1.324,0.913-2.675,1.761-3.999,2.56C49.291,56.166,47.542,55.036,45.833,53.826z M74.14,62.748  c-0.824,1.168-2.662,1.426-4.063,1.426c-4.14,0-10.169-2.068-16.519-5.526c0.977-0.604,1.941-1.234,2.905-1.904  c0.63,0.464,1.413,0.733,2.262,0.733c2.135,0,3.856-1.722,3.856-3.856c0-0.437-0.076-0.874-0.218-1.259  c1.632-1.325,3.201-2.7,4.653-4.102C73.188,54.688,75.811,60.369,74.14,62.748z"></path>
                            </g>
                            <g transform="matrix(8.562933456458124,0,0,8.562933456458124,145.43111832981262,-19.37760073874874)" fill="#FFFFFF">
                                <path className={"logo-text"} d="M6.48 20 l-0.78 -7.46 l-0.04 0 l-0.78 7.46 l-3.02 0 l-1.56 -14 l2.14 0 l1.16 11.04 l0.04 0 l1.04 -11.04 l2.12 0 l1.08 11.12 l0.04 0 l1.12 -11.12 l1.92 0 l-1.56 14 l-2.92 0 z M14.26 8 l0 3.9 l3.02 0 l0 2 l-3.02 0 l0 4.1 l3.8 0 l0 2 l-6 0 l0 -14 l6 0 l0 2 l-3.8 0 z M22.740000000000002 6 c2.28 0 3.26 1.06 3.26 3.22 l0 0.5 c0 1.44 -0.44 2.34 -1.42 2.8 l0 0.04 c1.18 0.46 1.64 1.5 1.64 2.98 l0 1.14 c0 2.16 -1.14 3.32 -3.34 3.32 l-3.46 0 l0 -14 l3.32 0 z M22.6 13.7 l-0.98 0 l0 4.3 l1.26 0 c0.74 0 1.14 -0.34 1.14 -1.38 l0 -1.22 c0 -1.3 -0.42 -1.7 -1.42 -1.7 z M22.68 8 l-1.06 0 l0 3.7 l0.86 0 c0.82 0 1.32 -0.36 1.32 -1.48 l0 -0.78 c0 -1 -0.34 -1.44 -1.12 -1.44 z"></path>
                            </g>
                            <g transform="matrix(1.2276041117297933,0,0,1.2276041117297933,147.017916695982,154.83079355628226)" fill="#FFFFFF">
                                <path className={"logo-text"} d="M0.8 20 l0 -14 l3.48 0 c2.2 0 3.28 1.22 3.28 3.46 l0 7.08 c0 2.24 -1.08 3.46 -3.28 3.46 l-3.48 0 z M4.24 8 l-1.24 0 l0 10 l1.24 0 c0.7 0 1.12 -0.36 1.12 -1.36 l0 -7.28 c0 -1 -0.42 -1.36 -1.12 -1.36 z M25.496499999999997 8 l0 3.9 l3.02 0 l0 2 l-3.02 0 l0 4.1 l3.8 0 l0 2 l-6 0 l0 -14 l6 0 l0 2 l-3.8 0 z M46.632999999999996 6 l1.66 11.42 l0.04 0 l1.66 -11.42 l2.02 0 l-2.16 14 l-3.28 0 l-2.16 -14 l2.22 0 z M69.5695 8 l0 3.9 l3.02 0 l0 2 l-3.02 0 l0 4.1 l3.8 0 l0 2 l-6 0 l0 -14 l6 0 l0 2 l-3.8 0 z M89.066 20 l0 -14 l2.2 0 l0 12 l3.62 0 l0 2 l-5.82 0 z M112.2025 9.22 l0 7.56 c0 1 0.44 1.38 1.14 1.38 s1.14 -0.38 1.14 -1.38 l0 -7.56 c0 -1 -0.44 -1.38 -1.14 -1.38 s-1.14 0.38 -1.14 1.38 z M110.00250000000001 16.64 l0 -7.28 c0 -2.24 1.18 -3.52 3.34 -3.52 s3.34 1.28 3.34 3.52 l0 7.28 c0 2.24 -1.18 3.52 -3.34 3.52 s-3.34 -1.28 -3.34 -3.52 z M135.679 6 c2.2 0 3.28 1.22 3.28 3.46 l0 1.82 c0 2.24 -1.08 3.46 -3.28 3.46 l-1.04 0 l0 5.26 l-2.2 0 l0 -14 l3.24 0 z M135.679 8 l-1.04 0 l0 4.74 l1.04 0 c0.7 0 1.08 -0.32 1.08 -1.32 l0 -2.1 c0 -1 -0.38 -1.32 -1.08 -1.32 z M156.5155 8 l0 3.9 l3.02 0 l0 2 l-3.02 0 l0 4.1 l3.8 0 l0 2 l-6 0 l0 -14 l6 0 l0 2 l-3.8 0 z M182.85199999999998 20 l-2.24 0 c-0.12 -0.36 -0.2 -0.58 -0.2 -1.72 l0 -2.2 c0 -1.3 -0.44 -1.78 -1.44 -1.78 l-0.76 0 l0 5.7 l-2.2 0 l0 -14 l3.32 0 c2.28 0 3.26 1.06 3.26 3.22 l0 1.1 c0 1.44 -0.46 2.36 -1.44 2.82 l0 0.04 c1.1 0.46 1.46 1.5 1.46 2.96 l0 2.16 c0 0.68 0.02 1.18 0.24 1.7 z M179.272 8 l-1.06 0 l0 4.3 l0.86 0 c0.82 0 1.32 -0.36 1.32 -1.48 l0 -1.38 c0 -1 -0.34 -1.44 -1.12 -1.44 z"></path>
                            </g>
                        </svg>
                    </NavLink>
                    <nav
                        className={this.state.className ? "header__menu active" : "header__menu"}>
                        <button onClick={this.menuClick} className="header__menu-close">
                            <span className="close-line"></span>
                            <span className="close-line"></span>
                        </button>
                        <div className="menu">
                            <NavLink onClick={this.menuClick} className="menu-item" to="/portfolio_v2">Главная</NavLink>
                            <NavLink onClick={this.menuClick} className="menu-item" to="/certificate">Сертификаты</NavLink>
                            <NavLink onClick={this.menuClick} className="menu-item" to="/portfolio">Мои работы</NavLink>
                            <NavLink onClick={this.menuClick} className="menu-item" to="/contacts">Контакты</NavLink>
                            <div onClick={this.themToggle} className="them-switch">
                                <Moon/>
                                <button className={'switch'}></button>
                                <Sun/>
                            </div>

                        </div>
                    </nav>



                    <button
                        onClick={this.menuClick}
                        className={'header__btn'}>
                        <span className="btn-line"></span>
                    </button>


                </div>


            </header>
        )
    }

}


export default Header;