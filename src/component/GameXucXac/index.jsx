import React, { Component } from "react";

import { connect } from 'react-redux'

class GameXucXac extends Component {

    render() {
        return (
            <div style={{ height: "650px" }}>
                <div
                    className="gameXucXac"
                    style={{
                        backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        left: 0,
                        top: 0,
                    }}
                >
                    <div className="container">
                        <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
                        <div className="row text-center">
                            <div className="col-4">
                                <button className="bg-danger display-4 p-5 text-light" onClick={this.props.tai}>
                                    TÀI{" "}
                                </button>
                            </div>
                            <div className="col-4">
                                <div className="d-flex justify-content-center">
                                    {this.props.mangXucXac.map((xucXac, index) => (
                                        <img
                                            key={index}
                                            src={xucXac.hinhAnh}
                                            width={50}
                                            height={50}
                                            alt="hinh"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="col-4">
                                <button className="bg-dark display-4 p-5 text-light" onClick={this.props.xiu}>
                                    XỈU{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container text-center display-4">
                        <div>
                            bạn chọn : <span className="text-danger">{this.props.taixiu}</span>
                        </div>
                        <div>
                            số bàn thắng : <span className="text-success">{this.props.soBanThang}</span>
                        </div>
                        <div>
                            tổng số bàn chơi : <span className="text-warning">{this.props.soBanChoi}</span>
                        </div>
                        <button className="btn btn-success" style={{ fontSize: 30 }} onClick={this.props.handlePlayGame}>
                            PLAY GAME
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        taixiu: state.taixiu.banChon,
        mangXucXac: state.taixiu.mangXucXac,
        soBanThang: state.taixiu.soBanThang,
        soBanChoi: state.taixiu.soBanChoi
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // key la props cua component ; value la phuong thuc thay doi gia tri tren store
        tai: () => {
            const action = {
                type: 'DAT_CUOC_XUC_XAC',
                banChon: 'TAI'
            }
            // gui tin hieu len store( vd: gui tien hieu INCREMENT thi store se nhan tin hieu va thuc thi tang gia tri count len 1)
            dispatch(action);
        },
        xiu: () => {
            const action = {
                type: 'DAT_CUOC_XUC_XAC',
                banChon: 'XIU'
            }
            dispatch(action);
        },
        handlePlayGame: () => {
            var number = 0;

            let randomXiNgau = setInterval(() => {
                number += 1;
                dispatch({
                    type: "RANDOM_XI_NGAU",
                });

                if (number > 10) {
                    //dừng hàm random
                    clearInterval(randomXiNgau);
                    //random 10 lần gọi hàm tính điểm
                    dispatch({
                        type: "TINH_DIEM",
                    });
                }
            }, 100);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameXucXac);
