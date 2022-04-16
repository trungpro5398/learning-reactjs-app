const initialState = {
    dsXucXac: [
        { ma: 1, hinhAnh: "./img/gameXucXac/1.png", soDiem: 1 },
        { ma: 2, hinhAnh: "./img/gameXucXac/2.png", soDiem: 2 },
        { ma: 3, hinhAnh: "./img/gameXucXac/3.png", soDiem: 3 },
        { ma: 4, hinhAnh: "./img/gameXucXac/4.png", soDiem: 4 },
        { ma: 5, hinhAnh: "./img/gameXucXac/5.png", soDiem: 5 },
        { ma: 6, hinhAnh: "./img/gameXucXac/6.png", soDiem: 6 },
    ],
    banChon: "TÀI",
    soBanThang: 0,
    soBanChoi: 0,
    mangXucXac: [
        { ma: 1, hinhAnh: "./img/gameXucXac/1.png", soDiem: 1 },
        { ma: 2, hinhAnh: "./img/gameXucXac/2.png", soDiem: 2 },
        { ma: 1, hinhAnh: "./img/gameXucXac/1.png", soDiem: 1 },
    ],
}

const taiXiuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_CUOC_XUC_XAC':
            state.banChon = action.banChon;
            return { ...state };
        case 'RANDOM_XI_NGAU':
            {
                let mangXiNgau = [];
                for (let i = 0; i < 3; i++) {
                    //Tạo ra số ngẫu nhiên từ 0 -> 5
                    let soNgauNhien = Math.floor(Math.random() * 6);
                    //push vào mangXiNgau 1 xucXac từ dsXucXac (được lấy ra theo thứ tự ngẫu nhiên)
                    mangXiNgau.push(state.dsXucXac[soNgauNhien]);
                }
                state.mangXucXac = mangXiNgau;
                return { ...state };
            }
        case 'TINH_DIEM':
            {
                let tongDiem = state.mangXucXac.reduce((sum, xiNgau, index) => {
                    return (sum += xiNgau.soDiem);
                }, 0)
                //Xử lý thắng
                if (
                    (tongDiem > 10 && state.banChon === "TÀI") ||
                    (tongDiem <= 10 && state.banChon === "XỈU")
                ) {
                    state.soBanThang += 1;
                }

                state.soBanChoi += 1;
                return { ...state };
            }
        default:
            return { ...state };
    }
}

export default taiXiuReducer;